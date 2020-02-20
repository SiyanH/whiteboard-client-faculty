import {
    CREATE_WIDGET,
    DELETE_WIDGET,
    UPDATE_WIDGET,
    FIND_ALL_WIDGETS_FOR_TOPIC,
    FIND_ALL_WIDGETS,
    FIND_WIDGET,
    RESET_WIDGET
} from "../actions/widgetActions";

const initialState = {
    widgets: []
};

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_WIDGET:
            return {
                widgets: [
                    ...state.widgets,
                    action.newWidget
                ]
            };
        case DELETE_WIDGET:
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            };
        case UPDATE_WIDGET:
            return {
                ...state,
                widgets: state.widgets.map(
                    widget => widget._id === action.widgetId ? action.widget : widget)
            };
        case FIND_ALL_WIDGETS_FOR_TOPIC:
            return {
                widgets: action.widgets
            };
        case FIND_ALL_WIDGETS:
            return {
                widgets: action.widgets
            };
        case FIND_WIDGET:
            return {
                widget: action.widget
            };
        case RESET_WIDGET:
            return initialState;
        default:
            return state
    }
};

export default widgetReducer;