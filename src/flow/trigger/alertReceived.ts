import { FlowTriggerEntity, trigger } from '@basmilius/homey-common';
import type { NlAlertApp } from '../../types';

/**
 * Trigger that fires when a new NL Alert is received that affects the Homey's location.
 */
@trigger('alert_received')
export default class extends FlowTriggerEntity<NlAlertApp, never, Record<string, never>, Tokens> {
    async onRun(): Promise<boolean> {
        return true;
    }
}

type Tokens = {
    readonly alert_id: string;
    readonly alert_message: string;
    readonly alert_start_at: string;
    readonly alert_stop_at: string;
};
