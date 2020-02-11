import React from "react";
import CourseManagerHeaderComponent from "./CourseManagerHeaderComponent";
import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import CourseAddFloatButton from "./CourseAddFloatButton";
import {Route} from "react-router-dom";

const CourseListComponent =
    ({
         updateCourse,
         newCourseTitle,
         addCourse,
         deleteCourse,
         courses,
         history,
         match
     }) =>
        <div>
            {   match.url === '/table' ?
                <CourseManagerHeaderComponent
                                              addCourse={addCourse}
                                              layout="table"
                                              newCourseTitle={newCourseTitle}
                                              history={history}/> :
                <CourseManagerHeaderComponent
                                              addCourse={addCourse}
                                              layout="grid"
                                              newCourseTitle={newCourseTitle}
                                              history={history}/>
            }
            <Route
                path="/table"
                exact={true}
                render={() =>
                    <CourseTableComponent deleteCourse={deleteCourse}
                                          updateCourse={updateCourse}
                                          courses={courses}/>
                }/>
            <Route
                path="/grid"
                exact={true}
                render={() =>
                    <CourseGridComponent deleteCourse={deleteCourse}
                                         updateCourse={updateCourse}
                                         courses={courses}/>
                }/>
            <CourseAddFloatButton addCourse={addCourse}
                                  newCourseTitle={newCourseTitle}/>
        </div>;

export default CourseListComponent;