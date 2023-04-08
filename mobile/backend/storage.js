// TODO: storage helper functions
// @ts-check

import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../config/firebase";

// upload file to storage
/**
 *
 * @param {app.Episode} episode
 * @param {File} file
 */
export async function uploadEpisode(episode, file) {
    const storageRef = ref(storage, `episodes/${episode.id}`);
    return await uploadBytes(storageRef, file);
}

/**
 *
 * @param {app.Episode} episode
 * @param {File} file
 */
export async function uploadThumbnail(episode, file) {
    const storageRef = ref(storage, `thumbnails/${episode.id}`);
    return await uploadBytes(storageRef, file);
}
