'use client'
import React, {useEffect, useState} from "react";
import {enAppEnvironment} from "@/app/enAppEnvironment";
import {readAppEnvironment} from "@/app/_components/serverActions";

export default function EnvironmentStamp() {
    const [environmentStr, setEnvironmentStr] = useState<string>('?');
    const [envClass, setEnvClass] = useState<string>('');

    useEffect(() => {
        readAppEnvironment().then(env => {
            if (env == enAppEnvironment.dev) {
                setEnvironmentStr('DEV');
                setEnvClass('bg-green-200 bg-opacity-40');
            } else if (env == enAppEnvironment.staging) {
                setEnvironmentStr('STAGING');
                setEnvClass('bg-yellow-200 bg-opacity-80');
            } else if (env == enAppEnvironment.production) {
                setEnvironmentStr('PROD');
                setEnvClass('bg-red-200 bg-opacity-40');
            }
        });
    }, []); // empty array means this effect runs once on component mount

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
