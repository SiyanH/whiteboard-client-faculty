import {API_URL_LESSON} from "../common/constants";
import {API_URL_TOPIC} from "../common/constants";

/** Create a new topic instance for the lesson whose ID is lessonId **/
export const createTopic = async (lessonId, topic) => {
    const response = await fetch(`${API_URL_LESSON}/${lessonId}/topic`, {
        method: "POST",
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json();
};

/** Retrieve all topics for lesson whose ID is lessonId **/
export const findTopicsForLesson = (lessonId) => {
    return fetch(`${API_URL_LESSON}/${lessonId}/topic`).then(response => response.json());
};

/** Retrieve one topic whose ID is topicId **/
export const findTopic = (topicId) => {
    return fetch(`${API_URL_TOPIC}/${topicId}`).then(response => response.json());
};

/** Update one topic whose ID is topicId **/
export const updateTopic = async (topicId, topic) => {
    const response = await fetch(`${API_URL_TOPIC}/${topicId}`, {
        method: 'PUT',
        body: JSON.stringify(topic),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json();
};

/** Remove topic whose ID is topicId **/
export const deleteLesson = async (topicId) => {
    const response = await fetch(`${API_URL_TOPIC}/${topicId}`, {method: 'DELETE'});
    return await response.json();
};

export default {
    createTopic,
    findTopicsForLesson,
    findTopic,
    updateTopic,
    deleteLesson
}