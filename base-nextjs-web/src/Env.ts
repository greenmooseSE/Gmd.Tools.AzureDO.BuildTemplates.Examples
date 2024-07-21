import publicRuntimeConfig from "@/nextRuntimeConfig";

export class Env {
    readonly isEnvDev: boolean = process.env.environment === 'dev';
    readonly isEnvStaging: boolean = process.env.environment === 'staging';
    readonly isEnvProd: boolean = process.env.environment === 'production';
}
