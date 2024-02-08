'use client'

import { useEffect } from "react";

export default function Error({
    error,
    reset
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.log(error);
    }, [error])
    return (
        <div>
            <h2>Algo deu errado!</h2>
            <button onClick={() => reset}>Tente Novamente</button>
        </div>
    )
}