import React from "react";
import "./CourseEditorContainer.css"
import CourseEditorHeaderComponent from "../../components/CourseEditor/CourseEditorHeaderComponent";
import WidgetListContainer from "./WidgetListContainer";
import {findCourseById} from "../../services/CourseService";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import topicReducer from "../../reducers/topicReducer";
import widgetReducer from "../../reducers/widgetReducer";
import ModuleListContainer from "./ModuleListContainer";
import LessonTabsContainer from "./LessonTabsContainer";
import TopicPillsContainer from "./TopicPillsContainer";
import {findModule} from "../../services/ModuleService";
import {findLesson} from "../../services/LessonService";
import {findTopic} from "../../services/TopicService";

const rootReducer = combineReducers({
                                        modules: moduleReducer,
                                        lessons: lessonReducer,
                                        topics: topicReducer,
                                        widgets: widgetReducer
                                    });

const store = createStore(rootReducer);

class CourseEditorContainer extends React.Component {
    state = {
        course: {}
    };

    getCourse = async () => {
        let module, lesson, topic;
        const course = await findCourseById(this.props.courseId);

        if (this.props.moduleId !== undefined) {
            module = await findModule(this.props.moduleId);
        }
        if (this.props.lessonId !== undefined) {
            lesson = await findLesson(this.props.lessonId);
        }
        if (this.props.topicId !== undefined) {
            topic = await findTopic(this.props.topicId);
        }

        if (course === null || module === null || lesson === null || topic === null) {
            alert("Invalid path");
            this.props.history.replace("/");
        } else {
            this.setState({course: course});
        }
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
                                <ModuleListContainer history={this.props.history}
                                                     courseId={this.props.courseId}
                                                     moduleId={this.props.moduleId}/>
                            </div>
                            <div className="wbdv-course-editor-right col-lg-8 col-xl-9">
                                <LessonTabsContainer history={this.props.history}
                                                     courseId={this.props.courseId}
                                                     moduleId={this.props.moduleId}
                                                     lessonId={this.props.lessonId}/>
                                <TopicPillsContainer history={this.props.history}
                                                     courseId={this.props.courseId}
                                                     moduleId={this.props.moduleId}
                                                     lessonId={this.props.lessonId}
                                                     topicId={this.props.topicId}/>
                                <WidgetListContainer courseId={this.props.courseId}
                                                     moduleId={this.props.moduleId}
                                                     lessonId={this.props.lessonId}
                                                     topicId={this.props.topicId}
                                                     preview={this.props.preview}
                                                     history={this.props.history}/>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}

export default CourseEditorContainer;