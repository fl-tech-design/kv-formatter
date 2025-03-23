import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const formatter = vscode.languages.registerDocumentFormattingEditProvider('kivy', {
        provideDocumentFormattingEdits(document: vscode.TextDocument) {
            const edits: vscode.TextEdit[] = [];
            let indentLevel = 0;
            let isInsideWidget = false;

            for (let i = 0; i < document.lineCount; i++) {
                const line = document.lineAt(i);
                const text = line.text.trim();
                const currentIndent = line.firstNonWhitespaceCharacterIndex;

                // Originalformatierung beibehalten für:
                if (text.startsWith('#') || text === '') {
                    edits.push(vscode.TextEdit.replace(line.range, line.text));
                    continue;
                }

                // Hierarchie-Logik
                const isWidget = text.endsWith(':');
                const isProperty = !isWidget && text.includes(':');

                // Einrückungsregeln
                if (isWidget) {
                    indentLevel = Math.floor(currentIndent / 4);
                    isInsideWidget = true;
                } else if (isProperty && isInsideWidget) {
                    indentLevel += 1;
                }

                // Ziel-Einrückung berechnen
                const targetIndent = ' '.repeat(indentLevel * 4);
                const formattedLine = targetIndent + text;

                if (formattedLine !== line.text) {
                    edits.push(vscode.TextEdit.replace(line.range, formattedLine));
                }

                // Reset für nächste Zeile
                if (!isWidget) isInsideWidget = false;
            }

            return edits;
        }
    });

    context.subscriptions.push(formatter);
}