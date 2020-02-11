import React from "react";
import "./CourseManagerContainer.css"
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import CourseListComponent from "../components/CourseManager/CourseListComponent";
import ErrorPage from "../components/ErrorPage"
import {
    createCourse,
    deleteCourse,
    updateCourse,
    findAllCourses
} from "../services/CourseService";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

class CourseManagerContainer extends React.Component {
    state = {
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

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Redirect exact from="/" to="/table"/>
                        <Route
                            path="/course/:courseId"
                            exact={true}
                            render={(props) =>
                                <CourseEditorComponent history={props.history}
                                                       courseId={props.match.params.courseId}/>
                            }/>
                        <Route
                            path="/(table|grid)"
                            exact={true}
                            render={(props) =>
                                <div>
                                    <CourseListComponent
                                        updateCourse={this.updateCourse}
                                        newCourseTitle={this.state.newCourseTitle}
                                        addCourse={this.addCourse}
                                        deleteCourse={this.deleteCourse}
                                        courses={this.state.courses}
                                        history={props.history}
                                        match={props.match}/>
                                </div>
                            }/>
                        <Route
                            path="/error"
                            exact={true}
                            render={(props) => <ErrorPage/>}
                        />
                        <Redirect to="/error"/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default CourseManagerContainer;