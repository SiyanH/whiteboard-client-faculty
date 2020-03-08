import React from "react";

const WidgetButtonGroupComponent = ({
                                        widget, deleteWidget, changeWidgetType, isTopWidget,
                                        isBottomWidget, moveUp, moveDown, hasWidgetAfter
                                    }) =>
    <div className="row no-gutters">
        <h4 className="col-md-4" title="Heading widget">
            {widget.type.charAt(0) + widget.type.slice(1).toLowerCase()} widget</h4>
        <form
            className="form-inline wbdv-widget-form-inline d-flex justify-content-sm-end col-md-8">
            {
                !isTopWidget &&
                <button className="btn btn-warning" title="Move up" type="button"
                        onClick={() => moveUp(widget)}>
                    <i className="fas fa-arrow-up fa-sm"></i>
                </button>
            }
            {
                !isBottomWidget && hasWidgetAfter &&
                <button className="btn btn-warning" title="Move down" type="button"
                        onClick={() => moveDown(widget)}>
                    <i className="fas fa-arrow-down fa-sm"></i>
                </button>
            }
            <div className="empty-bar d-block d-sm-none"></div>
            <label className="sr-only" htmlFor={`widgetType_${widget.id}`}>Widget Type</label>
            <select className="form-control" id={`widgetType_${widget.id}`} title="Widget type"
                    defaultValue={widget.type}
                    onChange={e => changeWidgetType(widget.id, e.target.value)}>
                <option value="HEADING">Heading</option>
                <option value="PARAGRAPH">Paragraph</option>
                <option value="LIST">List</option>
                <option value="IMAGE">Image</option>
                <option value="HYPERLINK" disabled>Hyperlink</option>
                <option value="VIDEO" disabled>Video</option>
            </select>
            <div className="empty-bar d-block d-sm-none"></div>
            <button className="btn btn-danger" title="Delete widget" type="button"
                    onClick={() => deleteWidget(widget)}>
                <i className="fas fa-times fa-sm"></i>
            </button>
        </form>
    </div>;

export default WidgetButtonGroupComponent;