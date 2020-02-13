import React from "react";
import {connect} from "react-redux";
import Topic from "../../models/TopicModel";
import topicService from "../../services/TopicService";
import TopicPillItemComponent from "./TopicPillItemComponent";
import {
    createTopic, deleteTopic,
    findTopics,
    findTopicsForLesson, setCurrentTopicId,
    updateTopic
} from "../../actions/topicActions";

class TopicPillsComponent extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.currentLessonId !== -1 && this.props.topics.length > 0 &&
                    <ul className="nav nav-pills">
                        {
                            this.props.topics.map(
                                topic =>
                                    <TopicPillItemComponent key={topic._id}
                                                            topic={topic}
                                                            lessonId={this.props.currentLessonId}
                                                            updateTopic={this.props.updateTopic}
                                                            deleteTopic={this.props.deleteTopic}
                                                            findTopicsForLesson={this.props.findTopicsForLesson}
                                                            setCurrentTopicId={this.props.setCurrentTopicId}
                                                            isCurrentTopic={this.props.currentTopicId
                                                                            === topic._id}/>)
                        }
                        <li className="nav-item wbdv-topic-add-btn btn btn-secondary"
                            title="Add new topic" role="button"
                            onClick={() => this.props.createTopic(this.props.currentLessonId,
                                                                  new Topic("New Topic"))}>
                            <i className="fas fa-plus fa"></i>
                        </li>
                    </ul>
                }
                {
                    (this.props.currentLessonId !== -1 && this.props.topics.length === 0) &&
                    <button className="wbdv-topic-add-btn btn btn-secondary"
                            title="Add new topic" type="button"
                            onClick={() => this.props.createTopic(this.props.currentLessonId,
                                                                  new Topic("New Topic"))}>
                        Add new topic</button>
                }
            </div>

        )
    }
}

const stateToPropertyMapper = (state) => {
    return {
        topics: state.topics.topics,
        lessons: state.lessons.lessons,
        currentTopicId: state.topics.currentTopicId,
        currentLessonId: state.lessons.currentLessonId,
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createTopic: (lessonId, topic) =>
            topicService.createTopic(lessonId, topic)
                .then(actualTopic => dispatch(createTopic(actualTopic))),
        findTopicsForLesson: (lessonId) =>
            topicService.findTopicsForLesson(lessonId)
                .then(actualTopics => dispatch(findTopicsForLesson(actualTopics))),
        findTopics: (topicId) =>
            topicService.findTopic(topicId)
                .then(actualTopics => dispatch(findTopics(actualTopics))),
        updateTopic: (topicId, topic) =>
            topicService.updateTopic(topicId, topic)
                .then(status => dispatch(updateTopic(topicId, topic))),
        deleteTopic: (topicId) =>
            topicService.deleteTopic(topicId)
                .then(status => dispatch(deleteTopic(topicId))),
        setCurrentTopicId: (topicId) =>
            dispatch(setCurrentTopicId(topicId))
    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(TopicPillsComponent);