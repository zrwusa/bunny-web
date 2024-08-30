"use client";

import Link from "next/link";
import React, {useState} from "react";

export default function CounterCypress() {

    const [count, setCount] = useState(0);
    return (
        <>
            <h2>{count}</h2>
            <button type="button" onClick={() => setCount(count + 1)}>
                +
            </button>
            <Link href="/">&larr; Go Back</Link>
        </>
    );
}
