import {URL_PATH} from "../constants/constants";
import {useFetch} from "../hooks/useFetch";

type Post = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};

export function Posts() {
    const {data, loading, error} = useFetch<Post[]>(URL_PATH);
    if (loading) return <p>Loading…</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <ul>
            {data?.map((u) => (
                <li key={u.id}>{u.title}</li>
            ))}
        </ul>
    );
}
