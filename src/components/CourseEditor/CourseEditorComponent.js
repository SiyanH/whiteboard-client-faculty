import React from "react";
import "./CourseEditorComponent.css"
import LessonTabsComponent from "./LessonTabsComponent";
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";

const CourseEditorComponent = ({hideCourseEditor}) =>
    <div>
        <LessonTabsComponent hideCourseEditor={hideCourseEditor}/>
        <div className="container-fluid vh-100">
            <div className="row vh-100">
                <div className="wbdv-course-editor-left col-lg-4 col-xl-3">
                    <ModuleListComponent/>
                </div>
                <div className="wbdv-course-editor-right col-lg-8 col-xl-9">
                    <TopicPillsComponent/>
                    <div className="d-flex align-items-center float-right">
                        <button className="btn btn-sm btn-success wbdv-widget-save-btn"
                                type="button">Save
                        </button>
                        <div className="custom-control custom-control-right custom-switch">
                            <input className="custom-control-input" data-size="xs" id="previewSwitch"
                                   type="checkbox"/>
                            <label className="custom-control-label"
                                   htmlFor="previewSwitch">Preview</label>
                        </div>
                    </div>
                    <WidgetListComponent/>
                    <button className="btn btn-danger float-right wbdv-widget-add-btn"
                            title="Add new widget" type="button">
                        <i className="fas fa-plus-circle fa-sm"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>;

export default CourseEditorComponent;