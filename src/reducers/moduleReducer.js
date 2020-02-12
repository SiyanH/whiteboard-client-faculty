import {
    CREATE_MODULE,
    FIND_MODULE_FOR_COURSE,
    FIND_MODULE,
    UPDATE_MODULE,
    DELETE_MODULE
} from "../actions/moduleActions";

const initialState = {
    modules: []
};

const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_MODULE:
            return {
                modules: [
                    ...state.modules,
                    action.newModule
                ]
            };
        case FIND_MODULE_FOR_COURSE:
            return {
                modules: action.modules
            };
        case FIND_MODULE:
            return {
                modules: action.modules
            };
        case UPDATE_MODULE:
            return {
                modules: state.modules.map(
                    module => module._id === action.moduleId ? action.module : module)
            };
        case DELETE_MODULE:
            return {
                modules: state.modules.filter(module => module._id !== action.moduleId)
            };
        default:
            return state
    }
};

export default moduleReducer;