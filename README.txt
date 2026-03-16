NL Alert keeps you informed when an emergency alert is issued for your area. The app polls the NL Alert API every minute and checks whether any active alert affects your Homey's location.

When a new alert is detected, a flow trigger fires so you can act immediately — turn on lights, send a notification, or trigger any other automation you have set up.

Flow cards:

- Trigger: fires when a new NL Alert is received for your location. Provides the alert message, ID, start time, and end time as flow tokens.
- Condition: checks whether there is currently an active NL Alert for your location.
- Action: retrieves all active NL Alerts for your location and provides the count, the first alert message, and a full JSON list as flow tokens.

The app uses your Homey's configured location to determine whether an alert affects you. No additional setup is required.
