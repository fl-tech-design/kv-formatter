# Changelog

All notable changes to the **KV Formatter** extension will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [0.1.3] - 2025-03-30
- Added warning about canvas block formatting limitations
- Improved documentation clarity

## [0.1.2] - 2025-03-23
### Fixed
- Fixed bug with format command problems. new format command "crtl+shift+alt+k"

## [0.1.1] - 2025-03-23
### Fixed
- Fixed incorrect language configuration in `package.json`.
- Added proper formatter registration for `.kv` files.

### Changed
- Updated `package.json` to include missing formatter contributions.

## [0.1.0] - 2025-03-23
### Added
- Basic formatting functionality for Kivy `.kv` files.
- Command to format documents via `Shift+Alt+F` or right-click → "Format Document".
- Support for idempotent formatting (multiple runs produce the same result).

### Fixed
- Initial bug fixes and stability improvements.

---


### Changed
- Improved handling of nested widgets and complex hierarchies.