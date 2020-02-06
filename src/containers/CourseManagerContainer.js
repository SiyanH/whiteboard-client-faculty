import React from "react";
import "./CourseManagerContainer.css"
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import CourseManagerHeaderComponent from "../components/CourseManager/CourseManagerHeaderComponent";
import CourseTableComponent from "../components/CourseManager/CourseTableComponent";
import CourseGridComponent from "../components/CourseManager/CourseGridComponent";
import {
    createCourse,
    deleteCourse,
    updateCourse,
    findAllCourses
} from "../services/CourseService";
import CourseAddFloatButton from "../components/CourseManager/CourseAddFloatButton";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        editingCourse: false,
        newCourseTitle: 'New Course Title',
        courses: []
    };

    fetchCourses = async () => {
        const courses = await findAllCourses();
        this.setState({courses: courses});
    };

    componentDidMount = () => this.fetchCourses();

    addCourse = async (course) => {
        await createCourse(course);
        this.fetchCourses();
    };

    deleteCourse = async (course) => {
        await deleteCourse(course._id);
        this.fetchCourses();
    };

    updateCourse = async (id, course) => {
        await updateCourse(id, course);
        this.fetchCourses();
    };

    toggleView = () => {
        this.setState((prevState) => {
            if (prevState.layout === 'grid') {
                return {
                    layout: 'table'
                }
            } else {
                return {
                    layout: 'grid'
                }
            }
        });
    };

    showCourseEditor = () =>
        this.setState({editingCourse: true});

    hideCourseEditor = () =>
        this.setState({editingCourse: false});

    render() {
        return (
            <div>
                {
                    this.state.editingCourse
                    && <CourseEditorComponent hideCourseEditor={this.hideCourseEditor}/>
                }
                {
                    !this.state.editingCourse &&
                    <div>
                        <CourseManagerHeaderComponent addCourse={this.addCourse}
                                                      toggleView={this.toggleView}
                                                      layout={this.state.layout}
                                                      newCourseTitle={this.state.newCourseTitle}/>
                        {
                            this.state.layout === 'table' &&
                            <CourseTableComponent showCourseEditor={this.showCourseEditor}
                                                  deleteCourse={this.deleteCourse}
                                                  updateCourse={this.updateCourse}
                                                  courses={this.state.courses}/>
                        }
                        {
                            this.state.layout === 'grid' &&
                            <CourseGridComponent showCourseEditor={this.showCourseEditor}
                                                 deleteCourse={this.deleteCourse}
                                                 updateCourse={this.updateCourse}
                                                 courses={this.state.courses}/>
                        }
                        <CourseAddFloatButton addCourse={this.addCourse}
                                              newCourseTitle={this.state.newCourseTitle}/>
                    </div>
                }
            </div>
        )
    }
}

export default CourseManagerContainer;