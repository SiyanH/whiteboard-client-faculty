import {API_URL_MODULE, API_URL_LESSON} from "../common/constants";

/** Create a new lesson instance for the module whose ID is moduleId **/
export const createLesson = async (moduleId, lesson) => {
    const response = await fetch(`${API_URL_MODULE}/${moduleId}/lessons`, {
        method: "POST",
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json();
};

/** Retrieve all lessons for course whose ID is moduleId **/
export const findLessonsForModule = (moduleId) => {
    return fetch(`${API_URL_MODULE}/${moduleId}/lessons`).then(response => response.json());
};

/** Retrieve one lesson whose ID is lessonId **/
export const findLesson = (lessonId) => {
    return fetch(`${API_URL_LESSON}/${lessonId}`).then(response => response.json());
};

/** Update one lesson whose ID is lessonId **/
export const updateLesson = async (lessonId, lesson) => {
    const response = await fetch(`${API_URL_LESSON}/${lessonId}`, {
        method: 'PUT',
        body: JSON.stringify(lesson),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json();
};

/** Remove lesson whose ID is lessonId **/
export const deleteLesson = async (lessonId) => {
    const response = await fetch(`${API_URL_LESSON}/${lessonId}`, {method: 'DELETE'});
    return await response.json();
};

export default {
    createLesson,
    findLessonsForModule,
    findLesson,
    updateLesson,
    deleteLesson
}