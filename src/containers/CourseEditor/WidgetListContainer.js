import React from "react";
import {connect} from "react-redux";
import widgetService from "../../services/WidgetService";
import {
    createWidget,
    deleteWidget,
    findAllWidgets,
    findWidgetsForTopic,
    updateWidget,
    saveAllWidgets
} from "../../actions/widgetActions";
import WidgetComponent from "../../components/CourseEditor/widgets/WidgetComponent";

class WidgetListContainer extends React.Component {
    state = {
        widgets: this.props.widgets,
        isPreview: this.props.preview === 'true'
    };

    componentDidMount() {
        if (this.props.topicId !== undefined) {
            this.props.findWidgetsForTopic(this.props.topicId)
                .then(() => this.setState((state, props) => ({
                    widgets: props.widgets,
                    isPreview: props.preview === 'true'
                })))
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topicId !== this.props.topicId) {
            if (this.props.topicId !== undefined) {
                this.props.findWidgetsForTopic(this.props.topicId)
                    .then(() => this.setState((state, props) => ({
                        widgets: props.widgets,
                        isPreview: props.preview === 'true'
                    })))
            } else {
                this.setState({widgets: []})
            }
        }
    }

    save = () => {
        this.state.widgets.forEach(w => this.props.updateWidget(w.id, w))
    };

    toggleReview = () => {
        this.setState(state => ({
            isPreview: !state.isPreview
        }));
        this.props.history.replace(
            `${this.props.history.location.pathname}?preview=${!this.state.isPreview}`);
    };

    changeWidgetType = (widgetId, type) => {
        this.setState(state => ({
            widgets: state.widgets.map(
                w => {
                    if (w.id === widgetId) {
                        w.type = type;
                    }
                    return w;
                })
        }))
    };

    changeWidgetText = (widgetId, text) => {
        this.setState(state => ({
            widgets: state.widgets.map(
                w => {
                    if (w.id === widgetId) {
                        w.text = text;
                    }
                    return w;
                })
        }));
    };

    changeWidgetName = (widgetId, name) => {
        this.setState(state => ({
            widgets: state.widgets.map(
                w => {
                    if (w.id === widgetId) {
                        w.name = name;
                    }
                    return w;
                })
        }));
    };

    changeWidgetSize = (widgetId, size) => {
        this.setState(state => ({
            widgets: state.widgets.map(
                w => {
                    if (w.id === widgetId) {
                        w.size = size;
                    }
                    return w;
                })
        }));
    };

    changeListType = (widgetId, type) => {
        this.setState(state => ({
            widgets: state.widgets.map(
                w => {
                    if (w.id === widgetId) {
                        w.ordered = type === 'ORDERED';
                    }
                    return w;
                })
        }));
    };

    changeImageUrl = (widgetId, url) => {
        this.setState(state => ({
            widgets: state.widgets.map(
                w => {
                    if (w.id === widgetId) {
                        w.url = url;
                    }
                    return w;
                })
        }));
    };

    createWidget = () => {
        this.props.createWidget(this.props.topicId, {})
            .then(res => {
                this.setState(state => ({
                    widgets: [...state.widgets, res.newWidget]
                }))
            })
    };

    deleteWidget = (widget) => {
        this.props.deleteWidget(widget.id)
            .then(() => this.setState(state => ({
                widgets: state.widgets
                    .filter(w => w.id !== widget.id)
                    .map(w => {
                        if (w.order > widget.order) {
                            w.order--;
                        }
                        return w;
                    })
            })))
    };

    moveUp = (widget) => {
        if (widget.order - 1 >= 0) {
            this.setState(state => {
                let newWidgets = state.widgets.slice();
                let widgetBefore = newWidgets[widget.order - 1];

                widgetBefore.order++;
                widget.order--;
                newWidgets.splice(widget.order, 2, widget, widgetBefore);

                return {widgets: newWidgets};
            });
        }
    };

    moveDown = (widget) => {
        if (widget.order + 1 < this.state.widgets.length) {
            this.setState(state => {
                let newWidgets = state.widgets.slice();
                let widgetAfter = newWidgets[widget.order + 1];

                widgetAfter.order--;
                widget.order++;
                newWidgets.splice(widgetAfter.order, 2, widgetAfter, widget);

                return {widgets: newWidgets};
            });
        }
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
                                hasWidgetAfter={this.state.widgets.length > 1}
                                deleteWidget={this.deleteWidget}
                                changeWidgetType={this.changeWidgetType}
                                changeWidgetText={this.changeWidgetText}
                                changeWidgetName={this.changeWidgetName}
                                changeWidgetSize={this.changeWidgetSize}
                                changeListType={this.changeListType}
                                changeImageUrl={this.changeImageUrl}
                                moveUp={this.moveUp}
                                moveDown={this.moveDown}/>)
                }
                {
                    this.props.topicId !== undefined &&
                    <button className="btn btn-danger float-right wbdv-widget-add-btn"
                            title="Add new widget" type="button"
                            onClick={() => this.createWidget(this.props.topicId, {})}>
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
});

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(WidgetListContainer);