import React from "react";
import EnvironmentStamp from "@/app/_components/environmentStamp";
import HomeView from "@/app/_components/homeView";

export default function Home() {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <HomeView environmentStamp={<EnvironmentStamp/>}/>
        </main>
    );
}
