import { App } from '@basmilius/homey-common';
import { Actions, Conditions, Triggers } from './flow';
import NlAlertService from './nlAlertService';

/**
 * Main NL Alert app class.
 */
export default class NlAlertApp extends App<NlAlertApp> {
    /**
     * Returns the NL Alert service.
     */
    get alerts(): NlAlertService {
        return this.#alerts;
    }

    readonly #alerts: NlAlertService;

    constructor(...args: any[]) {
        super(...args);

        this.#alerts = new NlAlertService(this);
    }

    async onInit(): Promise<void> {
        try {
            this.#registerTriggers();
            this.#registerConditions();
            this.#registerActions();

            await this.#alerts.initialize();

            this.log('NL Alert app has been initialized!');
        } catch (err) {
            this.error('Failed to initialize the NL Alert app.', err);
        }
    }

    async onUninit(): Promise<void> {
        await this.#alerts.destroy();
    }

    #registerActions(): void {
        this.registry.action(Actions.GetAlerts);
    }

    #registerConditions(): void {
        this.registry.condition(Conditions.AlertActive);
    }

    #registerTriggers(): void {
        this.registry.trigger(Triggers.AlertReceived);
    }
}
