import React from "react";
import "./CourseEditorComponent.css"
import LessonTabsComponent from "./LessonTabsComponent";
import ModuleListComponent from "./ModuleListComponent";
import TopicPillsComponent from "./TopicPillsComponent";
import WidgetListComponent from "./WidgetListComponent";
import {findCourseById} from "../../services/CourseService";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/moduleReducer";
import lessonReducer from "../../reducers/lessonReducer";
import topicReducer from "../../reducers/topicReducer";

const rootReducer = combineReducers({
                                        modules: moduleReducer,
                                        lessons: lessonReducer,
                                        topics: topicReducer
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
                    <LessonTabsComponent history={this.props.history}
                                         courseTitle={this.state.course.title}/>
                    <div className="container-fluid vh-100">
                        <div className="row vh-100 wbdv-course-editor-content">
                            <div className="wbdv-course-editor-left col-lg-4 col-xl-3">
                                <ModuleListComponent courseId={this.props.courseId}/>
                            </div>
                            <div className="wbdv-course-editor-right col-lg-8 col-xl-9">
                                <TopicPillsComponent/>
                                <div className="d-flex align-items-center float-right">
                                    <button className="btn btn-sm btn-success wbdv-widget-save-btn"
                                            type="button">Save
                                    </button>
                                    <div
                                        className="custom-control custom-control-right custom-switch">
                                        <input className="custom-control-input" data-size="xs"
                                               id="previewSwitch"
                                               type="checkbox"/>
                                        <label className="custom-control-label"
                                               htmlFor="previewSwitch">Preview</label>
                                    </div>
                                </div>
                                <WidgetListComponent/>
                                <button className="btn btn-danger float-right wbdv-widget-add-btn"
                                        title="Add new widget" type="button">
                                    <i className="fas fa-plus-circle fa-sm"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}

export default CourseEditorComponent;