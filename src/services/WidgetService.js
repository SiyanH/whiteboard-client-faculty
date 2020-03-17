import {API_URL_TOPIC, API_URL_WIDGET} from "../common/constants";

/** Create a new widget instance for the topic whose ID is tid **/
export const createWidget = async (tid, widget) => {
    const response = await fetch(`${API_URL_TOPIC}/${tid}/widgets`, {
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
    return fetch(`${API_URL_TOPIC}/${tid}/widgets`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return [];
            }
        });
};

/** Retrieve all widgets **/
export const findAllWidgets = () => {
    return fetch(API_URL_WIDGET).then(response => response.json());
};

/** Retrieve one widget whose id is wid **/
export const findWidgetById = (wid) => {
    return fetch(`${API_URL_WIDGET}/${wid}`).then(response => response.json());
};

/** Update one widget whose ID is wid **/
export const updateWidget = async (wid, widget) => {
    const response = await fetch(`${API_URL_WIDGET}/${wid}`, {
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
    const response = await fetch(`${API_URL_WIDGET}/${wid}`, {method: 'DELETE'});
    return await response.json();
};

/** Replace all widgets with the given widgets **/
export const saveAllWidgets = async (widgets) => {
    const response = await fetch(API_URL_WIDGET, {
        method: 'PUT',
        body: JSON.stringify(widgets),
        headers: {
            'content-type': 'application/json'
        }
    });
    return await response.json();
};

export default {
    createWidget,
    findWidgetsForTopic,
    findAllWidgets,
    findWidgetById,
    updateWidget,
    deleteWidget,
    saveAllWidgets
}