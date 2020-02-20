export const CREATE_WIDGET = "CREATE_WIDGET";
export const DELETE_WIDGET = "DELETE_WIDGET";
export const UPDATE_WIDGET = "UPDATE_WIDGET";
export const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC";
export const FIND_ALL_WIDGETS = "FIND_ALL_WIDGETS";
export const FIND_WIDGET = "FIND_WIDGET";
export const RESET_WIDGET = "RESET_WIDGET";

export const createWidget = (widget) => ({
    type: CREATE_WIDGET,
    newWidget: widget
});

export const deleteWidget = (widgetId) => ({
    type: DELETE_WIDGET,
    widgetId: widgetId
});

export const updateWidget = (widgetId, widget) => ({
    type: UPDATE_WIDGET,
    widgetId: widgetId,
    widget: widget
});

export const findWidgetsForTopic = (widgets) => ({
    type: FIND_ALL_WIDGETS_FOR_TOPIC,
    widgets: widgets
});

export const findAllWidgets = (widgets) => ({
    type: FIND_ALL_WIDGETS,
    widgets: widgets
});

export const findWidget = (widget) => ({
    type: FIND_WIDGET,
    widget: widget
});

export const resetWidgets = () => ({
    type: RESET_WIDGET
});