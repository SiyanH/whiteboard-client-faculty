import React from "react";
import CourseRowComponent from "./CourseRowComponent";

const CourseTableComponent = ({showCourseEditor, deleteCourse, updateCourse, courses}) =>
    <div className="container wbdv-course-list">
        {
            courses.map((course) =>
                            <CourseRowComponent
                                key={course._id}
                                showCourseEditor={showCourseEditor}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}
                                course={course}/>
            )
        }
    </div>;

export default CourseTableComponent;