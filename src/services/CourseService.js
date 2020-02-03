import {API_URL} from "../common/constants";

export const createCourse = async (course) => {
    const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json();
};

export const findAllCourses = () => {
    return fetch(API_URL).then(response => response.json());
};

export const findCourseById = (id) => {
    return fetch(`${API_URL}/${id}`).then(response => response.json());
};

export const updateCourse = async (id, course) => {
    const response = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json();
};

export const deleteCourse = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {method: 'DELETE'});
    return await response.json();
};