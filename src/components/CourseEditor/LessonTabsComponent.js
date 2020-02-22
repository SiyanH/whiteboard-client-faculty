import React from "react";
import {connect} from "react-redux";
import Lesson from "../../models/LessonModel";
import topicService from "../../services/TopicService";
import lessonService from "../../services/LessonService";
import LessonTabItemsComponent from "./LessonTabItemsComponent";
import {
    createLesson, deleteLesson,
    updateLesson,
    findLessonsForModule
} from "../../actions/lessonActions";
import {findTopicsForLesson} from "../../actions/topicActions";

class LessonTabsComponent extends React.Component {
    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.moduleId !== this.props.moduleId) {
            this.props.findLessonsForModule(this.props.moduleId)
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.lessons.length > 0 &&
                    <ul className="nav nav-tabs wbdv-lesson-tabs">
                        {
                            this.props.lessons.map(
                                lesson =>
                                    <LessonTabItemsComponent key={lesson._id}
                                                             lesson={lesson}
                                                             moduleId={this.props.moduleId}
                                                             courseId={this.props.courseId}
                                                             updateLesson={this.props.updateLesson}
                                                             deleteLesson={this.props.deleteLesson}
                                                             findLessonsForModule={this.props.findLessonsForModule}
                                                             isCurrentLesson={this.props.lessonId
                                                                              === lesson._id}/>)
                        }
                        <li className="nav-item wbdv-lesson-tab-item">
                            <button className="nav-link btn btn-secondary" title="Add new lesson"
                                    onClick={() => this.props.createLesson(
                                        this.props.moduleId,
                                        new Lesson("New Lesson", this.props.moduleId))}>
                                <i className="fas fa-plus fa"></i>
                            </button>
                        </li>
                    </ul>
                }
                {
                    this.props.lessons.length === 0 && this.props.moduleId !== undefined &&
                    <button className="nav-link btn btn-secondary wbdv-lesson-tab-btn-only"
                            title="Add new lesson"
                            onClick={() => this.props.createLesson(
                                this.props.moduleId,
                                new Lesson("New Lesson", this.props.moduleId))}>
                        Add lesson</button>
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        lessons: state.lessons.lessons
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createLesson: (moduleId, lesson) =>
            lessonService.createLesson(moduleId, lesson)
                .then(actualLesson => dispatch(createLesson(actualLesson))),
        findLessonsForModule: (moduleId) =>
            lessonService.findLessonsForModule(moduleId)
                .then(actualLessons => dispatch(findLessonsForModule(actualLessons))),
        updateLesson: (lessonId, lesson) =>
            lessonService.updateLesson(lessonId, lesson)
                .then(status => dispatch(updateLesson(lessonId, lesson))),
        deleteLesson: (lessonId) =>
            lessonService.deleteLesson(lessonId)
                .then(status => dispatch(deleteLesson(lessonId))),
        findTopicsForLesson: (lessonId) =>
            topicService.findTopicsForLesson(lessonId)
                .then(actualTopics => dispatch(findTopicsForLesson(actualTopics)))
    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(LessonTabsComponent);