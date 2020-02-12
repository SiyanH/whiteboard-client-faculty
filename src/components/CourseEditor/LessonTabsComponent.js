import React from "react";
import {connect} from "react-redux";
import Lesson from "../../models/LessonModel";
import lessonService from "../../services/LessonService";
import LessonTabItemsComponent from "./LessonTabItemsComponent";
import {
    createLesson, deleteLesson,
    findLessons,
    setCurrentLessonId,
    updateLesson,
    findLessonsForModule
} from "../../actions/lessonActions";

class LessonTabsComponent extends React.Component {
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
                                                             moduleId={this.props.currentModuleId}
                                                             updateLesson={this.props.updateLesson}
                                                             deleteLesson={this.props.deleteLesson}
                                                             findLessonsForModule={this.props.findLessonsForModule}
                                                             setCurrentLessonId={this.props.setCurrentLessonId}
                                                             isCurrentLesson={this.props.currentLessonId
                                                                              === lesson._id}/>)
                        }
                        <li className="nav-item wbdv-lesson-tab-item">
                            <button className="nav-link btn btn-secondary" title="Add new lesson"
                                    onClick={() => this.props.createLesson(
                                        this.props.currentModuleId,
                                        new Lesson("New Lesson", this.props.currentModuleId))}>
                                <i className="fas fa-plus fa"></i>
                            </button>
                        </li>
                    </ul>
                }
                {
                    this.props.lessons.length === 0 &&
                    <button className="nav-link btn btn-secondary wbdv-lesson-tab-btn-only"
                            title="Add new lesson"
                            onClick={() => this.props.createLesson(
                                this.props.currentModuleId,
                                new Lesson("New Lesson", this.props.currentModuleId))}>
                        Add lesson</button>
                }
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        lessons: state.lessons.lessons,
        currentLessonId: state.lessons.currentLessonId,
        currentModuleId: state.modules.currentModuleId
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
        findLessons: (lessonId) =>
            lessonService.findLesson(lessonId)
                .then(actualLessons => dispatch(findLessons(actualLessons))),
        updateLesson: (lessonId, lesson) =>
            lessonService.updateLesson(lessonId, lesson)
                .then(status => dispatch(updateLesson(lessonId, lesson))),
        deleteLesson: (lessonId) =>
            lessonService.deleteLesson(lessonId)
                .then(status => dispatch(deleteLesson(lessonId))),
        setCurrentLessonId: (lessonId) =>
            dispatch(setCurrentLessonId(lessonId))
    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(LessonTabsComponent);