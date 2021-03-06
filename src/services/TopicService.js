import {API_URL, API_URL_TOPIC} from "../common/constants";

/** Create a new topic instance for the lesson whose ID is lessonId **/
export const createTopic = async (lessonId, topic) => {
    const response = await fetch(`${API_URL}/lessons/${lessonId}/topics`, {
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
    return fetch(`${API_URL}/lessons/${lessonId}/topics`).then(response => response.json());
};

/**  Retrieve collection of all topics **/
export const findAllTopics = () => {
    return fetch(API_URL_TOPIC).then(response => response.json());
};

/** Retrieve one topic whose ID is topicId **/
export const findTopic = (topicId) => {
    return fetch(`${API_URL_TOPIC}/${topicId}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return null;
            }
        });
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
export const deleteTopic = async (topicId) => {
    const response = await fetch(`${API_URL_TOPIC}/${topicId}`, {method: 'DELETE'});
    return await response.json();
};

export default {
    createTopic,
    findTopicsForLesson,
    findAllTopics,
    findTopic,
    updateTopic,
    deleteTopic
}