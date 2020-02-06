import React from "react";
import Course from "../../models/CourseModel";

const CourseAddFloatButton = ({addCourse, newCourseTitle}) =>
    <div className="wbdv-fixed-bottom-right">
        <button className="wbdv-button wbdv-add-course" title="Add new course" type="button"
        onClick={() => addCourse(new Course(newCourseTitle, "me", new Date(), new Date()))}>
            <span className="fa-stack fa-2x">
                <i className="fas fa-circle fa-stack-1x"></i>
                <i className="fas fa-plus-circle fa-stack-2x"></i>
            </span>
        </button>
    </div>;

export default CourseAddFloatButton;