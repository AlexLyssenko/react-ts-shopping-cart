import {URL_PATH} from "../constants/constants";


export const getPosts = async () => {
    const controller = new AbortController();
    const res = await fetch(URL_PATH, {
        signal: controller.signal,
    });

    if (!res.ok) {
        throw new Error("Failed to fetch");
    }

    return await res.json();
}