export const CREATE_MODULE = "CREATE_MODULE";
export const FIND_MODULE_FOR_COURSE = "FIND_MODULE_FOR_COURSE";
export const FIND_MODULE = "FIND_MODULE";
export const UPDATE_MODULE = "UPDATE_MODULE";
export const DELETE_MODULE = "DELETE_MODULE";
export const CURRENT_MODULE = "CURRENT_MODULE";
export const RESET_MODULE = "RESET_MODULE";

export const createModule = (module) => ({
    type: CREATE_MODULE,
    newModule: module
});

export const findModulesForCourse = (modules) => ({
    type: FIND_MODULE_FOR_COURSE,
    modules: modules
});

export const findModules = (modules) => ({
    type: FIND_MODULE,
    modules: modules
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

export const setCurrentModuleId = (moduleId) => ({
    type: CURRENT_MODULE,
    moduleId: moduleId
});

export const resetModules = () => ({
    type: RESET_MODULE
});