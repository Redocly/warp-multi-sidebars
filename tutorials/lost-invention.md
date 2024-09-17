---
template: ../@theme/Templates/StepByStep.tsx
---

# Chapter 1 - "The Lost Invention"

## Mission Objective

Travel back to the year 1889 and retrieve the blueprint for Nikola Tesla’s lost invention before it’s destroyed in a mysterious fire.

## Story Setup

Your mission begins in 1889, just days before Nikola Tesla's laboratory is set to be engulfed in flames. Historical records indicate that Tesla was working on a device that could revolutionize the world, but the blueprints were lost in the fire. You’ve been tasked with retrieving a copy of these blueprints to bring them back to the present.

## Tutorial Content

{% split %}

### Step 1: Establish a Temporal Anchor

- Set up a temporal anchor in the present to return to after completing the mission.
- Take note of the `id` in the response because you'll need it (`anc_mel2c9ba`) to be able to return home.

---

**API Call Example:**
{% openapi-code-sample operationId="setAnchor" descriptionFile="../apis/index.yaml" /%}

**API Call Response Example:**

```json
{
  "id": "anc_mel2c9ba",
  "timestamp": "2024-09-16T05:04:00Z",
  "description": "Home Base - Start of Tesla Mission"
}
```

{% /split %}

---

{% split %}

### Step 2: Create the timeline to navigate to 1889

- Use Warp’s timeline preparation API to set the destination.
- Take note of the `id` in the response because you'll need it (`tml_tesla_mission_1`) for the next travel step.
- You'll also need to complete your time travel within the window specified or else you may become cosmic vapor.

---

**API Call Example:**
{% openapi-code-sample operationId="createTimeline" descriptionFile="../apis/index.yaml" /%}

**API Call Response Example:**

```json
{
  "id": "tml_tesla_mission_1",
  "name": "Tesla blueprint retrieval",
  "destination_time": "1889-03-10T23:50:00Z",
  "created_at": "2019-08-24T14:15:22Z",
  "status": "open",
  "window": "12 minutes"
}
```

{% /split %}

---

{% split %}

### Step 3: Navigate to 1889

- Use Warp’s time navigation API to travel back to the exact date of the fire.

---

**API Call Example:**
{% openapi-code-sample operationId="timeTravel" descriptionFile="../apis/index.yaml" /%}

**API Call Response Example:**

```json
{
  "destination": "tml_tesla_mission_1"
}
```

{% /split %}

---

{% split %}

### Step 4: Retrieve the Blueprints

- Interact with the events of the past to retrieve the blueprints. Once you find the item, you'll need to register it or you won't be able to travel back with the item.
- Take note of the `id` in the response as you'll need it to check for paradoxes and when you travel back home.

---

**API Call Example:**
{% openapi-code-sample operationId="registerItem" descriptionFile="../apis/index.yaml" /%}

**API Response Example:**

```json
{
  "id": "itm_tsla_blueprint"
  "timeline_id": "trv_ts4c97ab",
  "item_description": "Tesla's Blueprint",
  "location": "Tesla's Lab"
}
```

{% /split %}

---

{% split %}

### Step 5: Avoid Paradoxes

- If a paradox occurs the result might be catastrophic. To prevent a catasrophe, check that the item is safe to travel with back to the future.
  Proposed changes could be in our example items, but it could be other events that influence behaviors of the past.
  Because Tesla's blueprints are unknown, it's impossible to check for a paradox until the blueprints are found.
- If you don't get a stable timeline in the response, then you have to continue to adjust events and items until you can product a stable timeline. Or, take a risk of changing the world forever in a possibly catasrophic way (or be vaporized on your return to the present).

---

**API Call Example:**
{% openapi-code-sample operationId="checkParadox" descriptionFile="../apis/index.yaml" /%}

**API Response Example:**

```json
{
  "is_stable": true
}
```

{% /split %}

---

{% split %}

### Step 6: Return to the Present

- Safely return to the present with the retrieved blueprint.

---

**API Call Example:**
{% replay-openapi operationId="timeTravel" descriptionFile="../apis/index.yaml"
  environment="Mock server"
  requestBody={
    "destination": "anc_mel2c9ba"
  }
/%}

{% /split %}

## Outcome

You successfully retrieve the blueprints, but there’s a twist—the fire was no accident. This discovery sets the stage for the next chapter, where you must find out who wanted Tesla’s invention destroyed and why.
