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
2. Place your widgets at the desired position
3. All properties will be automatically indented
4. Format with `Shift+Alt+F` or right-click → "Format Document"

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

