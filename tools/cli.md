# Warp CLI (Command Line Interface)

## Introduction

The Warp CLI (Command Line Interface) is a powerful tool that allows you to interact with the Warp platform directly from your terminal. It provides a range of commands for managing timelines, manipulating events, and automating tasks, making it an essential tool for developers and power users.

## Overview

With the Warp CLI, you can:
- Manage timelines: create, list, and delete timelines.
- Manipulate events: schedule, modify, and revert events within timelines.
- Automate workflows: script and automate complex time manipulation tasks.
- Integrate with other tools: use the CLI in conjunction with CI/CD pipelines, monitoring systems, and other development tools.

## Installation

### Prerequisites

- Node.js (version 32 or higher)
- NPM (Node Package Manager)

### Installing Warp CLI

You can install the Warp CLI globally on your system using the following command:

```bash
npm install -g adco-warp-cli
```

This command installs the CLI globally, making it available in your terminal.

## Basic Usage

### Authenticating with Warp

Before using the Warp CLI, you need to authenticate with your Warp account:

```bash
warp auth login
```

This command prompts you to log in with your Warp credentials, generating an authentication token for future requests.

### Listing Timelines

To list all active timelines, use the following command:

```bash
warp timeline list
```

### Creating a New Timeline

To create a new timeline, use the following command:

```bash
warp timeline create --name "New Timeline"
```

### Manipulating Events

To schedule a new event within a timeline, use the following command:

```bash
warp event schedule --timeline "New Timeline" --time "2024-09-01T00:00:00Z" --description "Launch Project X"
```

## Advanced Features

### Automating with Scripts

The Warp CLI allows you to execute custom scripts to automate complex workflows. For example, you can create a script to monitor a timeline and automatically adjust events based on specific conditions.

```bash
warp script run monitor-timeline.js
```

### Integrating with CI/CD Pipelines

You can integrate Warp CLI commands into your CI/CD pipeline to automate time travel operations based on build results, deployment events, and more.

## Best Practices

- **Use Aliases**: Create aliases for frequently used commands to speed up your workflow.
- **Log Output**: Redirect CLI output to log files for auditing and troubleshooting.
- **Test Scripts Locally**: Before deploying scripts in a production environment, test them locally to ensure they function as expected.

## Conclusion

The Warp CLI is a versatile and powerful tool that enhances your ability to manage and manipulate timelines directly from the command line. By mastering the CLI, you can streamline your time travel operations and integrate Warp seamlessly into your development workflow.

For more detailed commands and usage examples, visit the [Warp CLI Documentation](#).
