import {use} from "react";
import {Post} from "../types/Post";
import {URL_PATH} from "../constants/constants";

const postsPromise: Promise<Post[]> = fetch(URL_PATH).then((res) => res.json());

export function NewPosts() {
    const posts: Post[] = use(postsPromise);
    return (
        <ul>
            {posts.map((u) => (
                <li key={u.id}>{u.title}</li>
            ))}
        </ul>
    );
}
