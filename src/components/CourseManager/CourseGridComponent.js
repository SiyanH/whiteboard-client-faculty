import React, {useState} from "react";
import Course from "../../models/CourseModel";
import CourseCardComponent from "./CourseCardComponent";

const CourseGridComponent = ({deleteCourse, updateCourse, courses}) => {
    const [selectedCourse, setSelectedCourse] = useState(new Course());

    return (
        <div className="container-fluid wbdv-course-list">
            <div
                className="wbdv-course-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6">
                {
                    courses.map((course) =>
                                    <CourseCardComponent
                                        key={course._id}
                                        deleteCourse={deleteCourse}
                                        updateCourse={updateCourse}
                                        course={course}
                                        isSelectedCourse={course._id === selectedCourse._id}
                                        setSelectedCourse={setSelectedCourse}/>
                    )
                }
            </div>
        </div>
    );
};

export default CourseGridComponent;