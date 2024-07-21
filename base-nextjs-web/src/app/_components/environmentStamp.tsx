import {Env} from "@/Env";
import React from "react";

export default function EnvironmentStamp() {
    const env = new Env();
    let environmentStr = '?', envClass = '';
    if (env.isEnvDev) {
        environmentStr = 'DEV';
        envClass = 'bg-green-200 bg-opacity-40';
    } else if (env.isEnvStaging) {
        environmentStr = 'STAGING';
        envClass = 'bg-yellow-200 bg-opacity-80';
    } else if (env.isEnvProd) {
        environmentStr = 'PROD';
        envClass = 'bg-red-200 bg-opacity-40';
    }
    return (
        <div className="flex justify-center border-0 w-full text-center ">
            <div className="w-1/3 text-xl font-mono ">
                <p className={`border-2 rounded-2xl bg-gradient-to-b  ${envClass} `}>
                    {environmentStr}
                </p>
            </div>
        </div>
    )

}
