import React from "react";
import {connect} from "react-redux";
import HeadingWidgetComponent from "./widgets/HeadingWidgetComponent";
import widgetService from "../../services";
import {
    createWidget,
    deleteWidget,
    findAllWidgets,
    findWidgetsForTopic,
    updateWidget
} from "../../actions/widgetActions";
import WidgetComponent from "./widgets/WidgetComponent";

class WidgetListComponent extends React.Component {
    componentDidMount() {
        this.props.findWidgetsForTopic(this.props.topicId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId) {
            this.props.findWidgetsForTopic(this.props.topicId);
        }
    }

    state = {
        widget: this.props.widgets
    };

    save = () => {
        this.setState({
                          widget: {}
                      })
    };

    render() {
        return (
            <div>
                <div className="d-flex align-items-center float-right wbdv-widget-list-btn-top">
                    <button className="btn btn-sm btn-success wbdv-widget-save-btn"
                            type="button">Save
                    </button>
                    <div
                        className="custom-control custom-control-right custom-switch">
                        <input className="custom-control-input" data-size="xs"
                               id="previewSwitch"
                               type="checkbox"/>
                        <label className="custom-control-label"
                               htmlFor="previewSwitch">Preview</label>
                    </div>
                </div>
                <WidgetComponent widget={this.state.widget}/>
            </div>
        )
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createWidget: (widgetId, widget) =>
            widgetService.createWidget(widgetId, widget)
                .then(actualWidget => dispatch(createWidget(actualWidget))),
        findWidgetsForTopic: (topicId) =>
            widgetService.findWidgetsForTopic(topicId)
                .then(actualWidgets => dispatch(findWidgetsForTopic(actualWidgets))),
        findAllWidgets: () =>
            widgetService.findAllWidgets()
                .then(actualWidgets => dispatch(findAllWidgets(actualWidgets))),
        updateWidget: (widgetId, widget) =>
            widgetService.updateWidget(widgetId, widget)
                .then(status => dispatch(updateWidget(widgetId, widget))),
        deleteWidget: (widgetId) =>
            widgetService.deleteWidget(widgetId)
                .then(status => dispatch(deleteWidget(widgetId))),
    }
};

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets,
    topicId: state.topics.topics.currentTopicId
});

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(WidgetListComponent);