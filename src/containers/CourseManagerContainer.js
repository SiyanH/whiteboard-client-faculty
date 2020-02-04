import React from "react";
import "./CourseManagerContainer.css"
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import CourseManagerHeaderComponent from "../components/CourseManager/CourseManagerHeaderComponent";
import CourseTableComponent from "../components/CourseManager/CourseTableComponent";
import {
    createCourse,
    deleteCourse,
    updateCourse,
    findAllCourses
} from "../services/CourseService";

class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        editingCourse: false,
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
                                                      toggleView={this.toggleView}/>
                        <CourseTableComponent showCourseEditor={this.showCourseEditor}
                                              deleteCourse={this.deleteCourse}
                                              updateCourse={this.updateCourse}
                                              courses={this.state.courses}/>
                    </div>
                }
            </div>
        )
    }
}

export default CourseManagerContainer;