import {API_URL_COURSE} from "../common/constants";

export const createCourse = async (course) => {
    const response = await fetch(API_URL_COURSE, {
        method: "POST",
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json();
};

export const findAllCourses = () => {
    return fetch(API_URL_COURSE).then(response => response.json());
};

export const findCourseById = (id) => {
    return fetch(`${API_URL_COURSE}/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return null;
            }
        });
};

export const updateCourse = async (id, course) => {
    const response = await fetch(`${API_URL_COURSE}/${id}`, {
        method: 'PUT',
        body: JSON.stringify(course),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json();
};

export const deleteCourse = async (id) => {
    const response = await fetch(`${API_URL_COURSE}/${id}`, {method: 'DELETE'});
    return await response.json();
};