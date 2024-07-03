import publicRuntimeConfig from "@/nextRuntimeConfig";

export class Env {
    readonly isEnvDev: boolean = publicRuntimeConfig?.environment === 'dev';
    readonly isEnvStaging: boolean = publicRuntimeConfig?.environment === 'staging';
    readonly isEnvProd: boolean = publicRuntimeConfig?.environment === 'production';
}
