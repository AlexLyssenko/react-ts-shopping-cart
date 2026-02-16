import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        async function run() {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(url, {
                    signal: controller.signal,
                });

                if (!res.ok) {
                    throw new Error(res.statusText);
                }

                setData(await res.json());
            } catch (err: any) {
                if (err.name !== "AbortError") {
                    setError(err);
                }
            } finally {
                setLoading(false);
            }
        }

        run();
        return () => controller.abort();
    }, [url]);

    return { data, loading, error };
}
