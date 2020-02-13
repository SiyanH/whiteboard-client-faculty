import {
    CREATE_MODULE,
    FIND_MODULE_FOR_COURSE,
    FIND_MODULE,
    UPDATE_MODULE,
    DELETE_MODULE,
    CURRENT_MODULE,
    RESET_MODULE
} from "../actions/moduleActions";

const initialState = {
    modules: [],
    currentModuleId: -1
};

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MODULE:
            return {
                ...state,
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            };
        case FIND_MODULE_FOR_COURSE:
            return {
                ...state,
                modules: action.modules
            };
        case FIND_MODULE:
            return {
                ...state,
                modules: action.modules
            };
        case UPDATE_MODULE:
            return {
                ...state,
                modules: state.modules.map(
                    module => module._id === action.moduleId ? action.module : module)
            };
        case DELETE_MODULE:
            return {
                ...state,
                modules: state.modules.filter(module => module._id !== action.moduleId)
            };
        case CURRENT_MODULE:
            return {
                ...state,
                currentModuleId: action.moduleId
            };
        case RESET_MODULE:
            return initialState;
        default:
            return state
    }
};

export default moduleReducer;