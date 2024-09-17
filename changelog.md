# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **Timeline Monitoring**: Introduced a new `/monitor-timeline` endpoint to allow real-time monitoring of timelines for anomalies. Users can now set up automated responses to detected anomalies, improving timeline stability.
- **Quantum State Manipulation**: Added support for quantum state considerations in the `/manipulate-event` endpoint. This allows for high-precision temporal manipulations that account for quantum states, reducing the risk of paradoxes.
- **Parallel Timeline Management**: New `/create-parallel-timeline` endpoint enables users to easily create and manage parallel timelines. This feature supports complex scenario testing and "what-if" analyses without affecting the primary timeline.
- **Replay Console Integration**: Added support for using the Warp API directly within the Redocly Replay console. This feature allows users to test API endpoints interactively from their browser with real-time feedback.

### Changed
- **Anchor Stability Enhancements**: Improved the accuracy and stability of temporal anchors, especially in environments with fluctuating quantum states. The `/set-anchor` endpoint now includes an optional `stability_check` parameter.
- **Event Manipulation Response Format**: The response format for `/manipulate-event` has been updated to include more detailed information about the new event, including a timestamp and status of the manipulation.
- **Improved Error Handling**: Enhanced error messages across all endpoints, providing more detailed explanations and suggestions for troubleshooting common issues.

### Deprecated
- **Legacy Event Manipulation**: The old `/event/modify` endpoint has been deprecated in favor of the new and more versatile `/manipulate-event` endpoint, which offers better support for complex scenarios.

### Fixed
- **Timeline Deletion Bugs**: Fixed a bug where deleting a timeline could sometimes result in orphaned events. The `/timeline/delete` endpoint now ensures all associated events and data are properly cleaned up.
- **Paradox Detection Accuracy**: Improved the accuracy of the `/check-paradox` endpoint, reducing false positives and improving the detection of potential timeline paradoxes.

### Removed
- **Old API Versions**: Removed support for API versions 1.0.0 and 1.1.0. Users are encouraged to migrate to the latest API version to take advantage of new features and improvements.

## [1.2.0] - 2024-08-15

### Added
- **Multi-Timeline Support**: Introduced the ability to create, manage, and merge multiple timelines. The `/timelines` and `/merge-timelines` endpoints have been added to facilitate these operations.
- **Automated Event Scripting**: Added a new scripting engine that allows users to automate event manipulations based on specific conditions. Scripts can be created and managed via the `/scripts` endpoint.

### Changed
- **Timeline Creation Process**: Timeline creation now requires a unique `name` parameter to improve management and identification of timelines in large-scale operations.
- **Improved API Documentation**: Enhanced the OpenAPI documentation with more detailed descriptions, examples, and schema explanations.

### Fixed
- **Event Scheduling Conflicts**: Resolved an issue where scheduling overlapping events could lead to unexpected behavior. The `/event/schedule` endpoint now includes conflict detection and resolution mechanisms.

## [1.1.0] - 2024-06-01

### Added
- **Temporal Anchors**: Introduced the concept of temporal anchors, allowing users to set fixed points in time to revert to if needed. The `/set-anchor` and `/revert-anchor` endpoints were added as part of this feature.
- **Paradox Detection**: Added a new `/check-paradox` endpoint to identify potential paradoxes resulting from time manipulations.

### Changed
- **Enhanced Event Details**: The event model now includes additional metadata fields, such as `created_by` and `last_modified`, to provide better context for each event.

### Fixed
- **Time Format Consistency**: Standardized all time-related fields to use ISO 8601 format, ensuring consistency across the API.

## [1.0.0] - 2024-03-15

### Initial Release
- Launched the Warp API with core features including timeline creation, event manipulation, and basic monitoring capabilities.