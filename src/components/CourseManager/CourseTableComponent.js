import React, {useState} from "react";
import Course from "../../models/CourseModel";
import CourseRowComponent from "./CourseRowComponent";

const CourseTableComponent = ({showCourseEditor, deleteCourse, updateCourse, courses}) => {
    const [selectedCourse, setSelectedCourse] = useState(new Course());

    return (
        <div className="container wbdv-course-list">
            {
                courses.map((course) =>
                                <CourseRowComponent
                                    key={course._id}
                                    showCourseEditor={showCourseEditor}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                    course={course}
                                    isSelectedCourse={course._id === selectedCourse._id}
                                    setSelectedCourse={setSelectedCourse}/>
                )
            }
        </div>
    );
};

export default CourseTableComponent;