import React, {useState} from "react";
import Course from "../../models/CourseModel";
import CourseRowComponent from "./CourseRowComponent";

const CourseTableComponent = ({deleteCourse, updateCourse, courses}) => {
    const [selectedCourse, setSelectedCourse] = useState(new Course());

    return (
        <div className="container-fluid wbdv-course-list">
            {
                courses.map((course) =>
                                <CourseRowComponent
                                    key={course._id}
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