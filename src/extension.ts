import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // *******************************************************************
    // ** 1. Formatter-Provider definieren (neu!)**
    // *******************************************************************
    const formatterProvider = {
        provideDocumentFormattingEdits(document: vscode.TextDocument) {
            console.log("KV Formatter wurde aufgerufen!");  
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
    };

    // *******************************************************************
    // ** 2. Formatter registrieren (angepasst!)**
    // *******************************************************************
    const formatter = vscode.languages.registerDocumentFormattingEditProvider('kivy', formatterProvider);
    
    // *******************************************************************
    // ** 3. Manuellen Befehl hinzufügen (neu!)**
    // *******************************************************************
    const manualFormatCommand = vscode.commands.registerCommand('kvFormatter.manualFormat', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) return;

        // Rufe den FormatterProvider direkt auf
        const document = editor.document;
        const edits = await formatterProvider.provideDocumentFormattingEdits(document);
        
        if (edits && edits.length > 0) {
            const workspaceEdit = new vscode.WorkspaceEdit();
            workspaceEdit.set(document.uri, edits);
            await vscode.workspace.applyEdit(workspaceEdit);
        }
    });

    // *******************************************************************
    // ** 4. Alles registrieren (angepasst!)**
    // *******************************************************************
    context.subscriptions.push(formatter, manualFormatCommand);
}