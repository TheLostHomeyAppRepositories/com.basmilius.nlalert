import { condition, FlowConditionEntity } from '@basmilius/homey-common';
import type { NlAlertApp } from '../../types';

/**
 * Condition that checks whether there is currently an active NL Alert for the Homey's location.
 */
@condition('alert_active')
export default class extends FlowConditionEntity<NlAlertApp, never, never> {
    async onRun(): Promise<boolean> {
        return this.app.alerts.activeAlerts.length > 0;
    }
}
