'use server'
import fs from "fs";
import {enAppEnvironment} from "@/app/enAppEnvironment";

//We use in-mem cache for environment so if we update the config file we need to restart the app.
let cachedEnv: enAppEnvironment | null = null;
const getEnv: () => Promise<enAppEnvironment> = async () => {
    let data: string = await fs.promises.readFile("config.json", {encoding: 'utf-8'});
    // Strip BOM if it exists
    if (data.charCodeAt(0) === 0xFEFF) {
        data = data.substring(1);
    }
    const config = JSON.parse(data);
    const envValStr: string = config.environment;
    // throw `envVal in file: '${envValStr}'.`
    const envVal: enAppEnvironment = enAppEnvironment[envValStr as keyof typeof enAppEnvironment];
    let date = new Date().toString();
    console.log(`readAppEnvironment called at ${date} with env val '${envVal}'.`);
    return envVal;
};

export async function readAppEnvironment() {
    if (!cachedEnv) {
        cachedEnv = await getEnv();
    }
    return cachedEnv;
}
