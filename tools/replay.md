# Replay: Browser-based Try-It Console

## Introduction

Replay is Redocly's built-in Try-It console, allowing users to interact with Warp’s API directly from their web browser. With Replay, you can test API requests, experiment with time travel scenarios, and see real-time responses, all without writing a single line of code.

## Overview

With Replay, you can:
- Send API requests to Warp from your browser and receive immediate feedback.
- Test different endpoints and parameters to see how they affect your timelines.
- Experiment with time travel scenarios before implementing them in your code.
- Learn how Warp’s API works by interacting with it in a user-friendly environment.

## Accessing Replay

### Opening Replay in Redocly

Replay is integrated directly into Redocly’s documentation platform. To access Replay:
1. Navigate to the API endpoint you want to test in the Redocly documentation.
2. Click on the "Try It" button next to the endpoint description.
3. The Replay console will open, pre-filled with the selected endpoint and parameters.

### Authentication

Before sending requests, you need to authenticate with your Warp account. Replay will prompt you to log in if you haven’t already authenticated.

## Basic Usage

### Sending a Request

Replay allows you to send GET, POST, PUT, DELETE, and other types of requests to Warp’s API. Here’s an example of how to list all timelines:

1. Select the `GET /timelines` endpoint from the documentation.
2. Click the "Try It" button to open Replay.
3. Click "Send Request."

Replay will display the response in the console, showing you the list of timelines returned by the API.

### Modifying Request Parameters

You can modify request parameters directly in Replay to test different scenarios. For example, you can change the `timeline_id` to see how the response changes:

1. Select an endpoint with parameters, such as `GET /timeline/{timeline_id}`.
2. Enter a different `timeline_id` in the input field.
3. Click "Send Request" to see the response.

### Viewing Responses

Replay displays the full response from the API, including the status code, headers, and body. This allows you to see exactly how Warp’s API behaves with different inputs.

## Advanced Features

### Experimenting with Time Travel

Replay is an excellent tool for experimenting with time travel scenarios. You can use it to:
- Test event scheduling and manipulation.
- Simulate timeline branching and merging.
- Monitor timeline stability after making changes.

### Saving and Sharing Requests

Replay allows you to save your API requests and share them with others. This is useful for collaborative debugging or demonstrating how specific endpoints work.

### Debugging with Replay

Replay provides detailed error messages when requests fail, helping you debug issues quickly. You can see exactly what went wrong, whether it’s a missing parameter, authentication error, or something else.

## Best Practices

- **Start with Small Requests**: Begin by testing simple requests to understand how the API works before moving on to more complex scenarios.
- **Use Replay for Learning**: Replay is a great tool for learning the Warp API, as it allows you to see how different endpoints and parameters interact.
- **Save Frequently Used Requests**: Save requests that you use often to speed up your workflow and avoid repetitive typing.

## Conclusion

Replay is a powerful tool that makes it easy to interact with Warp’s API directly from your browser. Whether you’re testing endpoints,