import React from "react";
import {connect} from "react-redux";
import widgetService from "../services/WidgetService";
import {
    createWidget,
    deleteWidget,
    findAllWidgets,
    findWidgetsForTopic,
    updateWidget,
    saveAllWidgets
} from "../actions/widgetActions";
import WidgetComponent from "../components/CourseEditor/widgets/WidgetComponent";

class WidgetListContainer extends React.Component {
    state = {
        widgets: this.props.widgets,
        isPreview: false
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId || prevProps.widgets.length
            !== this.props.widgets.length) {
            this.props.findWidgetsForTopic(this.props.topicId)
                .then(() => this.setState({widgets: this.props.widgets}))
        }
    }

    save = () => {
        this.props.saveAllWidgets(this.state.widgets).then();
    };

    toggleReview = () => {
        this.setState({
                          isPreview: !this.state.isPreview
                      })
    };

    updateWidgets = () => {
        this.setState({
                          widgets: this.state.widgets
                      })
    };

    moveUp = (widget) => {
        let widgetBefore = this.state.widgets[widget.order - 1];

        widgetBefore.order++;
        widget.order--;
        this.state.widgets.splice(widget.order, 2, widget, widgetBefore);

        this.updateWidgets();
    };

    moveDown = (widget) => {
        let widgetAfter = this.state.widgets[widget.order + 1];

        widgetAfter.order--;
        widget.order++;
        this.state.widgets.splice(widgetAfter.order, 2, widgetAfter, widget);

        this.updateWidgets();
    };

    render() {
        return (
            <div>
                {
                    this.props.widgets.length > 0 &&
                    <div className="d-flex align-items-center float-right wbdv-widget-list-btn-top">
                        <button className="btn btn-sm btn-success wbdv-widget-save-btn"
                                type="button"
                                onClick={this.save}>Save
                        </button>
                        <div className="custom-control custom-control-right custom-switch">
                            {
                                this.state.isPreview &&
                                <input className="custom-control-input" data-size="xs"
                                       id="previewSwitch" type="checkbox" checked
                                       onChange={this.toggleReview}/>
                            }
                            {
                                !this.state.isPreview &&
                                <input className="custom-control-input" data-size="xs"
                                       id="previewSwitch" type="checkbox"
                                       onChange={this.toggleReview}/>
                            }
                            <label className="custom-control-label"
                                   htmlFor="previewSwitch">Preview</label>
                        </div>
                    </div>
                }
                {
                    this.state.widgets.map(
                        (widget, index, widgets) =>
                            <WidgetComponent
                                key={widget.id}
                                widget={widget}
                                isPreview={this.state.isPreview}
                                isTopWidget={index === 0}
                                isBottomWidget={index > 0 && index === widgets.length - 1}
                                deleteWidget={this.props.deleteWidget}
                                updateWidgets={this.updateWidgets}
                                moveUp={this.moveUp}
                                moveDown={this.moveDown}/>)
                }
                {
                    this.props.topicId !== -1 &&
                    <button className="btn btn-danger float-right wbdv-widget-add-btn"
                            title="Add new widget" type="button"
                            onClick={() => this.props.createWidget(this.props.topicId, {})}>
                        <i className="fas fa-plus-circle fa-sm"></i>
                    </button>
                }
            </div>
        )
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createWidget: (topicId, widget) =>
            widgetService.createWidget(topicId, widget)
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
        saveAllWidgets: (widgets) =>
            widgetService.saveAllWidgets(widgets)
                .then(status => dispatch(saveAllWidgets(widgets)))
    }
};

const stateToPropertyMapper = (state) => ({
    widgets: state.widgets.widgets,
    topicId: state.topics.currentTopicId
});

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(WidgetListContainer);