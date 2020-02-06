import React from "react";

const WidgetListComponent = () =>
    <div className="card">
        <div className="card-body">
            <div className="row no-gutters">
                <h4 className="col-md-4">Heading widget</h4>
                <form
                    className="form-inline wbdv-widget-form-inline d-flex justify-content-sm-end col-md-8"
                    name="widget">
                    <button className="btn btn-warning"
                            title="Move up" type="button">
                        <i className="fas fa-arrow-up fa-sm"></i>
                    </button>
                    <button className="btn btn-warning"
                            title="Move down" type="button">
                        <i className="fas fa-arrow-down fa-sm"></i>
                    </button>
                    <label className="sr-only" htmlFor="widgetType">Widget Type</label>
                    <select className="form-control" id="widgetType" title="Widget type">
                        <option>Heading</option>
                        <option>Paragraph</option>
                        <option>Image</option>
                        <option>List</option>
                    </select>
                    <button className="btn btn-danger"
                            title="Delete widget" type="button">
                        <i className="fas fa-times fa-sm"></i>
                    </button>
                </form>
            </div>
            <form>
                <div className="form-group">
                    <label className="sr-only" htmlFor="headingText">Heading text</label>
                    <input className="form-control" id="headingText" placeholder="Heading text"
                           type="text"/>
                </div>
                <div className="form-group">
                    <label className="sr-only" htmlFor="headingSize">Heading size</label>
                    <select className="form-control" id="headingSize" title="Heading style">
                        <option>Heading 1</option>
                        <option>Heading 2</option>
                        <option>Heading 3</option>
                        <option>Heading 4</option>
                        <option>Heading 5</option>
                        <option>Heading 6</option>
                    </select>
                </div>
                <div className="form-group">
                    <label className="sr-only" htmlFor="widgetName">Widget name</label>
                    <input className="form-control" id="widgetName" placeholder="Widget name"
                           type="text"/>
                </div>
            </form>
            <h5>Preview</h5>
            <h1 className="mb-0">Heading text</h1>
        </div>
    </div>;

export default WidgetListComponent;