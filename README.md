# KV Formatter

Professional formatter for Kivy .kv files

## Features
- Automatic widget hierarchy detection
- 4-space indentation
- Idempotent formatting
- Preserves comments and empty lines

## Installation

### From VSIX
1. Download the latest release from [Releases](https://github.com/fl-tech-design/kv-formatter.git)
2. In VS Code: `Ctrl+Shift+P` → "Extensions: Install from VSIX..."
3. Select the downloaded `.vsix` file

### From Marketplace
1. Open Extensions view (`Ctrl+Shift+X`)
2. Search for "KV Formatter"
3. Click Install

## Usage
1. Open a `.kv` file
2. Position widgets at desired indentation levels
3. Use **`Ctrl+Shift+Alt+K`** (Windows/Linux) or **`Cmd+Shift+Alt+K`** (Mac) to format, instead of the standard format command. there were configuration problems, but with the new shortcut it works just as well. You don't need to do anything else
4. Formatting preserves manual widget positions while auto-indenting properties

### Example
```kv
#before formatting:

BoxLayout:                  # ← Position set
    Label:                  # → Position set
text: "Hello"               # → will be indented
```
```kv
#after formatting:
BoxLayout:                  # ← Position set
    Label:                  # → Position set
        text: "Hello"       # → indented
```
## Golden Rules
- Widgets define hierarchy: Place them where you want
- Properties follow widgets: Automatic 4-space indentation
- Comments stay intact: No unwanted changes

## Troubleshooting
- __Problem:__ Incorrect indentation
- __Solution:__ Manually reposition the widget line

- __Problem:__ Formatting not applied
- __Solution:__ Ensure file has .kv extension

## Contributing
Pull requests are welcome! For major changes, please open an issue first.

