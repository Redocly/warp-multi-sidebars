# Warp API Temporal Anchoring Guide

Temporal anchoring is a crucial feature in Warp that allows you to set fixed points in time to which you can return after making changes. This guide will walk you through the steps to effectively use temporal anchors in your time travel operations.

## Overview

Temporal anchors act as safe points in time, ensuring that you can always return to a known state. They are essential for undoing changes or restoring timelines to their original condition after experimentation.

## Step 1: Setting a Temporal Anchor

To create a temporal anchor, you'll need to specify the exact time you want to anchor and provide a description for future reference.

### Setting an Anchor

Use the following `curl` command to set a temporal anchor:

```bash
curl -X POST https://api.warp.com/v1/set-anchor \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{
  "timestamp": "2024-09-01T00:00:00Z",
  "description": "Starting Point"
}'
```

- **`timestamp`**: The date and time you wish to anchor, in ISO 8601 format.
- **`description`**: A brief description of the anchor’s purpose, which helps identify its use later.

### Response Example

```json
{
  "anchor_id": "1234567890abcdef",
  "status": "Anchor set successfully"
}
```

This response confirms that the temporal anchor has been successfully created and provides an `anchor_id` for future operations.

## Step 2: Listing Existing Anchors

You can retrieve a list of all temporal anchors you have set. This is useful for reviewing your options before deciding to return to a specific point.

### Listing Anchors

Use the following `curl` command to list all anchors:

```bash
curl -X GET https://api.warp.com/v1/list-anchors \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY"
```

### Response Example

```json
{
  "anchors": [
    {
      "anchor_id": "1234567890abcdef",
      "timestamp": "2024-09-01T00:00:00Z",
      "description": "Starting Point"
    },
    {
      "anchor_id": "abcdef1234567890",
      "timestamp": "2024-09-15T10:00:00Z",
      "description": "Pre-deployment Anchor"
    }
  ]
}
```

This response provides a list of all temporal anchors, including their IDs, timestamps, and descriptions.

## Step 3: Returning to a Temporal Anchor

When you've completed your time travel tasks or if you need to undo changes, you can return to a previously set temporal anchor.

### Returning to an Anchor

Use the following `curl` command to return to a specific anchor:

```bash
curl -X POST https://api.warp.com/v1/return \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{
  "anchor_id": "1234567890abcdef"
}'
```

- **`anchor_id`**: The ID of the anchor you wish to return to.

### Response Example

```json
{
  "status": "Return successful",
  "current_time": "2024-09-01T00:00:00Z"
}
```

This response confirms that you have successfully returned to the specified temporal anchor.

## Step 4: Deleting a Temporal Anchor

If you no longer need a temporal anchor, you can delete it to keep your timeline organized.

### Deleting an Anchor

Use the following `curl` command to delete a temporal anchor:

```bash
curl -X DELETE https://api.warp.com/v1/delete-anchor \
-H "Content-Type: application/json" \
-H "Authorization: Bearer YOUR_API_KEY" \
-d '{
  "anchor_id": "1234567890abcdef"
}'
```

### Response Example

```json
{
  "status": "Anchor deleted successfully"
}
```

This response confirms that the specified temporal anchor has been successfully deleted.

## Best Practices

- **Set Anchors Before Major Changes**: Always set a temporal anchor before making significant changes to the timeline. This ensures you have a safe point to return to.
- **Organize Your Anchors**: Use descriptive names and timestamps to easily identify and manage your temporal anchors.
- **Regularly Review Anchors**: Periodically list and review your anchors to ensure they are still relevant, and delete any that are no longer needed.

## Conclusion

Temporal anchoring is a powerful tool that ensures safety and stability in your time travel operations. By following this guide, you can effectively manage your temporal anchors, allowing you to experiment with confidence and precision.

For more advanced features and detailed API documentation, visit the [Warp Documentation](#).
