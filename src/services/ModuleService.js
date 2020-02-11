import {API_URL_COURSE} from "../common/constants";
import {API_URL_MODULE} from "../common/constants";

/** Create a new module instance for the course whose ID is courseId **/
export const createModule = async (courseId, module) => {
    const response = await fetch(`${API_URL_COURSE}/${courseId}/modules`, {
        method: "POST",
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json();
};

/** Retrieve all modules for course whose ID is courseId **/
export const findModulesForCourse = (courseId) => {
    return fetch(`${API_URL_COURSE}/${courseId}/modules`).then(response => response.json());
};

/** Retrieve one module whose ID is moduleId **/
export const findModule = (moduleId) => {
    return fetch(`${API_URL_MODULE}/${moduleId}`).then(response => response.json());
};

/** Update one module whose ID is moduleId **/
export const updateModule = async (moduleId, module) => {
    const response = await fetch(`${API_URL_MODULE}/${moduleId}`, {
        method: 'PUT',
        body: JSON.stringify(module),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json();
};

/** Remove module whose ID is moduleId **/
 export const deleteModule = async (moduleId) => {
    const response = await fetch(`${API_URL_MODULE}/${moduleId}`, {method: 'DELETE'});
    return await response.json();
};