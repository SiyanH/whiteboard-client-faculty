import React from "react";

const LessonTabsComponent = ({hideCourseEditor}) =>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a aria-label="Close"
           className="close ml-1 pb-1 wbdv-course-editor wbdv-close"
           href="/#" role="button" title="Close" onClick={hideCourseEditor}>
            <span aria-hidden="true">&times;</span>
        </a>
        <a className="navbar-brand wbdv-course-title" href="/#">CS5610 - WebDev</a>
        <button aria-controls="navbarOption" aria-expanded="false" aria-label="Toggle navigation"
                className="navbar-toggler" data-target="#navbarOption" data-toggle="collapse"
                type="button">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarOption">
            <div className="navbar-nav nav-pills wbdv-page-tab-group">
                <a className="nav-item nav-link wbdv-page-tab" href="/#">Build</a>
                <a className="nav-item nav-link wbdv-page-tab active" href="/#">Pages</a>
                <a className="nav-item nav-link wbdv-page-tab" href="/#">Theme</a>
                <a className="nav-item nav-link wbdv-page-tab" href="/#">Store</a>
                <a className="nav-item nav-link wbdv-page-tab" href="/#">Apps</a>
                <a className="nav-item nav-link wbdv-page-tab" href="/#">Settings</a>
                <a className="nav-item nav-link d-sm-block d-md-none" href="/#">Add new page</a>
            </div>
        </div>
        <button className="wbdv-new-page-btn wbdv-btn-hover-shadow d-none d-md-block"
                title="Add new page"
                type="button">
            <i className="fas fa-plus fa-lg text-white"></i>
        </button>
    </nav>;

export default LessonTabsComponent;