import React from "react";
import Course from "../../models/CourseModel";

const CourseManagerHeaderComponent = ({addCourse, toggleView, layout, newCourseTitle}) =>
    <div className="fixed-top">
        <nav className="navbar navbar-dark bg-primary">
            <div className="wbdv-navbar-header row">
                <button aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation"
                        className="navbar-toggler wbdv-field wbdv-hamburger"
                        data-target="#navbarNavDropdown" data-toggle="collapse" title="Main menu"
                        type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand wbdv-label wbdv-course-manager d-none d-sm-block col-lg-4 col-sm-4"
                   href="/#">Course Manager</a>
                <form className="form-inline row col-lg-6 col-sm-7 col-10">
                    <input
                        className="form-control wbdv-field wbdv-new-course mr-sm-2 col-md-8 col-sm-8 col-9"
                        placeholder="New Course Title" type="text"
                        onChange={(e) => newCourseTitle = e.target.value}/>
                    <button className="wbdv-button wbdv-add-course col-1" title="Add new course"
                            type="submit"
                            onClick=
                                {
                                    () => addCourse(new Course(newCourseTitle, "me", new Date(), new Date()))
                                }>
                        <span className="fa-stack fa-lg">
                            <i className="fas fa-circle fa-stack-1x"></i>
                            <i className="fas fa-plus-circle fa-stack-2x"></i>
                        </span>
                    </button>
                </form>
            </div>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"
                           href="/profile/profile.template.client.html">Profile</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Sign out</a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className="container-md wbdv-header-bar">
            <ul className="nav nav-pills d-flex align-items-center row">
                <li className={`nav-item col-lg-6 col-6 
                ${layout === 'table' ? "col-md-7 col-sm-8" : "col-md-6 col-sm-7"}`}>
                    {
                        layout === 'table' &&
                        <div className="nav-link wbdv-header wbdv-title">Title</div>
                    }
                    {
                        layout === 'grid' &&
                        <div className="nav-link wbdv-header wbdv-title">
                            <span className="d-none d-sm-block">Recent courses</span>
                            <span className="d-block d-sm-none">Courses</span>
                        </div>
                    }
                </li>
                <li className={`nav-item dropdown d-none d-md-block col-md-2 
                ${layout === 'table' && "col-lg-2"}`}>
                    <button aria-expanded="false" aria-haspopup="true"
                            className="nav-link dropdown-toggle border-0 wbdv-header wbdv-owner"
                            data-toggle="dropdown" type="button">Owned by
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="/#">me</a>
                        <a className="dropdown-item" href="/#">other</a>
                        <a className="dropdown-item" href="/#">anyone</a>
                    </div>
                </li>
                {
                    layout === 'table' &&
                    <li className="nav-item col-lg-2 d-none d-lg-block">
                        <div className="nav-link wbdv-header wbdv-last-modified">Last modified</div>
                    </li>
                }
                <li className={`nav-item d-flex justify-content-lg-center justify-content-end col-6
                ${layout === 'table' ? "col-lg-2 col-md-3 col-sm-4" : "col-md-4 col-sm-5"}`}>
                    <ul className="nav nav-pills d-flex align-items-center">
                        {
                            layout === 'table' &&
                            <li className="nav-item">
                                <button className="nav-link wbdv-button wbdv-list-layout"
                                        title="Grid view" type="button" onClick={toggleView}>
                                    <i className="fas fa-grip-horizontal"></i>
                                </button>
                            </li>
                        }
                        {
                            layout === 'grid' &&
                            <li className="nav-item">
                                <button className="nav-link wbdv-button wbdv-grid-layout"
                                        title="List view" type="button" onClick={toggleView}>
                                    <i className="fas fa-list"></i>
                                </button>
                            </li>
                        }
                        <li className="nav-item dropdown">
                            <button aria-expanded="false" aria-haspopup="true"
                                    className="nav-link dropdown-toggle wbdv-header wbdv-sort"
                                    data-toggle="dropdown"
                                    title="Sort options" type="button">
                                <i className="fas fa-sort"></i>
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="/#">Last opened by me</a>
                                <a className="dropdown-item" href="/#">Last modified by me</a>
                                <a className="dropdown-item" href="/#">Last modified</a>
                                <a className="dropdown-item" href="/#">Title</a>
                            </div>
                        </li>
                        {
                            layout === 'grid' &&
                            <li className="nav-item">
                                <button
                                    className="nav-link wbdv-button wbdv-grid-layout d-none d-sm-block"
                                    title="Open file picker" type="button">
                                    <i className="fas fa-folder"></i>
                                </button>
                            </li>
                        }
                    </ul>
                </li>
            </ul>
        </div>
        <hr className="m-0"/>
    </div>;

export default CourseManagerHeaderComponent;