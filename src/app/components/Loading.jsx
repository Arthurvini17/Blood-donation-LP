"use client"

import { useState } from "react";
import { useEffect } from "react";

export default function Loading() {
    const [Loading, setIsLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000);
        return () => clearTimeout(timer)
    }, []);

    if (Loading) {


        return (
            <div>
                <h1>teste</h1>
            </div>
        )

    }
}

