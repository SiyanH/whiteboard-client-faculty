import {API_URL} from "../common/constants";

/** Create a new widget instance for the topic whose ID is tid **/
export const createWidget = async (tid, widget) => {
    const response = await fetch(`${API_URL}/topics/${tid}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json();
};

/** Retrieve all widgets for topic whose ID is tid **/
export const findWidgetsForTopic = (tid) => {
    return fetch(`${API_URL}/topics/${tid}/widgets`).then(response => response.json());
};

/** Retrieve all widgets **/
export const findAllWidgets = () => {
    return fetch(`${API_URL}/widgets`).then(response => response.json());
};

/** Retrieve one widget whose id is wid **/
export const findWidgetById = (wid) => {
    return fetch(`${API_URL}/widgets/${wid}`).then(response => response.json());
};

/** Update one widget whose ID is wid **/
export const updateWidget = async (wid, widget) => {
    const response = await fetch(`${API_URI}/widgets/${wid}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json();
};

/** Remove widget whose ID is wid **/
export const deleteWidget = async (wid) => {
    const response = await fetch(`${API_URL}/widgets/${wid}`, {method: 'DELETE'});
    return await response.json();
};

export default {
    createWidget,
    findWidgetsForTopic,
    findAllWidgets,
    findWidgetById,
    updateWidget,
    deleteWidget
}