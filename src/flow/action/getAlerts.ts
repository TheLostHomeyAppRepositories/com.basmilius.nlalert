import { action, FlowActionEntity } from '@basmilius/homey-common';
import type { NlAlertApp } from '../../types';

/**
 * Action that retrieves all currently active NL Alerts for the Homey's location.
 */
@action('get_alerts')
export default class extends FlowActionEntity<NlAlertApp, never, never, Tokens> {
    async onRun(): Promise<Tokens> {
        const alerts = this.app.alerts.activeAlerts;

        return {
            count: alerts.length,
            first_message: alerts[0]?.message ?? '',
            alerts_json: JSON.stringify(alerts.map(alert => ({
                id: alert.id,
                message: alert.message,
                start_at: alert.start_at,
                stop_at: alert.stop_at
            })))
        };
    }
}

type Tokens = {
    readonly count: number;
    readonly first_message: string;
    readonly alerts_json: string;
};
