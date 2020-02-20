import React from "react";
import "./CourseEditorComponent.css"
import CourseEditorHeaderComponent from "./CourseEditorHeaderComponent";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabsComponent from "./LessonTabsComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "../../containers/WidgetListContainer";
import {findCourseById} from "../../services/CourseService";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import topicReducer from "../../reducers/topicReducer";
import widgetReducer from "../../reducers/widgetReducer";

const rootReducer = combineReducers({
                                        modules: moduleReducer,
                                        lessons: lessonReducer,
                                        topics: topicReducer,
                                        widgets: widgetReducer
                                    });

const store = createStore(rootReducer);

class CourseEditorComponent extends React.Component {
    state = {
        course: {}
    };

    getCourse = async () => {
        const course = await findCourseById(this.props.courseId);
        this.setState({course: course});
    };

    componentDidMount = () => this.getCourse();

    render() {
        return (
            <Provider store={store}>
                <div>
                    <CourseEditorHeaderComponent history={this.props.history}
                                                 courseTitle={this.state.course.title}/>
                    <div className="container-fluid vh-100">
                        <div className="row vh-100 wbdv-course-editor-content">
                            <div className="wbdv-course-editor-left col-lg-4 col-xl-3">
                                <ModuleListComponent courseId={this.props.courseId}/>
                            </div>
                            <div className="wbdv-course-editor-right col-lg-8 col-xl-9">
                                <LessonTabsComponent/>
                                <TopicPillsComponent/>
                                <WidgetListComponent/>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}

export default CourseEditorComponent;