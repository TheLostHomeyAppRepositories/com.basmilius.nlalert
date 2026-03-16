import type App from './index';

export type NlAlertApp = App;

export type NlAlert = {
    readonly id: string;
    readonly message: string;
    readonly type: string;
    readonly start_at: string;
    readonly stop_at: string;
    readonly area: string;
};

export type NlAlertApiResponse = {
    readonly data: NlAlert[];
};
