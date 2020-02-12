export const CREATE_MODULE = "CREATE_MODULE";
export const FIND_MODULE_FOR_COURSE = "FIND_MODULE_FOR_COURSE";
export const FIND_MODULE = "FIND_MODULE";
export const UPDATE_MODULE = "UPDATE_MODULE";
export const DELETE_MODULE = "DELETE_MODULE";

export const createModule = (module) => ({
    type: CREATE_MODULE,
    newModule: module
});

export const updateModule = (moduleId, module) => ({
    type: UPDATE_MODULE,
    moduleId: moduleId,
    module: module
});

export const deleteModule = (moduleId) => ({
    type: DELETE_MODULE,
    moduleId: moduleId
});