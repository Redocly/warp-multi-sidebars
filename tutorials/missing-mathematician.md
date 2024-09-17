# Chapter 2 - "The Missing Mathematician"

## **Mission Objective:**
Travel to 1957 and ensure that the young prodigy, Katherine Johnson, stays on the path that will lead her to NASA, where she will play a crucial role in space exploration.

## **Story Setup:**
In this chapter, historical records show that Katherine Johnson, the brilliant mathematician who would one day help NASA launch John Glenn into orbit, nearly abandoned her studies due to personal challenges. Your mission is to travel to 1957, locate young Katherine, and subtly influence events to ensure she continues her academic journey.

## **Tutorial Content:**
- **Step 1: Time Jump to 1957**
  - Travel to the exact moment when Katherine is considering leaving her studies.
  - API Call Example:
    ```json
    POST /api/v1/travel
    {
      "destination_time": "1957-04-22T14:00:00Z",
      "location": "West Virginia State College"
    }
    ```

- **Step 2: Identifying Key Influences**
  - Identify the events and people that are pivotal in Katherine's decision to continue her education.
  - API Call Example:
    ```json
    POST /api/v1/scan-events
    {
      "location": "West Virginia State College",
      "time_range": "1957-04-20T00:00:00Z/1957-04-22T23:59:59Z"
    }
    ```

- **Step 3: Subtle Intervention**
  - Learn how to use minimal and non-intrusive event manipulation to ensure Katherine’s decision remains unaffected by your presence.
  - API Call Example:
    ```json
    POST /api/v1/manipulate-event
    {
      "event_id": "katherine_decision",
      "action": "Reinforce positive influence from professor",
      "time": "1957-04-22T14:30:00Z"
    }
    ```

- **Step 4: Monitoring for Paradox**
  - Ensure that your intervention doesn’t create any unintended paradoxes by continuously monitoring the timeline.
  - API Call Example:
    ```json
    GET /api/v1/monitor-paradox
    {
      "timeline_id": "katherine_mission",
      "time_range": "1957-04-22T14:00:00Z/1957-04-22T15:00:00Z"
    }
    ```

- **Step 5: Ensuring a Seamless Future**
  - Return to the present and check the timeline to confirm that Katherine Johnson’s contributions to NASA remain intact.
  - API Call Example:
    ```json
    GET /api/v1/check-timeline
    {
      "timeline_id": "primary",
      "significant_event": "John Glenn’s Orbit, 1962"
    }
    ```

## **Outcome:**
You successfully ensure that Katherine Johnson continues her education, safeguarding her future contributions to NASA. However, you discover subtle changes in the timeline that hint at new, unforeseen challenges. The next chapter will focus on uncovering these anomalies and correcting them.
