import React from "react";
import {connect} from "react-redux";
import Topic from "../../models/TopicModel";
import topicService from "../../services/TopicService";
import TopicPillItemComponent from "../../components/CourseEditor/TopicPillItemComponent";
import {
    createTopic, deleteTopic,
    findTopicsForLesson,
    updateTopic, resetTopics
} from "../../actions/topicActions";

class TopicPillsContainer extends React.Component {
    componentDidMount() {
        if (this.props.lessonId !== undefined) {
            this.props.findTopicsForLesson(this.props.lessonId)
        } else {
            this.props.resetTopics()
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.lessonId !== this.props.lessonId) {
            if (this.props.lessonId !== undefined) {
                this.props.findTopicsForLesson(this.props.lessonId)
            } else {
                this.props.resetTopics()
            }
        }
    }

    deleteTopic = (topicId) => {
        this.props.deleteTopic(topicId)
            .then(() => this.props.history.replace(
                `/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`))
    };

    render() {
        return (
            <div>
                {
                    this.props.topics.length > 0 &&
                    <ul className="nav nav-pills">
                        {
                            this.props.topics.map(
                                topic =>
                                    <TopicPillItemComponent key={topic.id}
                                                            topicId={topic.id}
                                                            topicTitle={topic.title}
                                                            lessonId={this.props.lessonId}
                                                            moduleId={this.props.moduleId}
                                                            courseId={this.props.courseId}
                                                            updateTopic={this.props.updateTopic}
                                                            deleteTopic={this.deleteTopic}
                                                            findTopicsForLesson={this.props.findTopicsForLesson}
                                                            isCurrentTopic={this.props.topicId
                                                                            === topic.id.toString()}/>)
                        }
                        <li className="nav-item wbdv-topic-pill-item wbdv-topic-add-btn btn btn-secondary"
                            title="Add new topic" role="button"
                            onClick={() => this.props.createTopic(this.props.lessonId,
                                                                  new Topic("New Topic"))}>
                            <i className="fas fa-plus fa"></i>
                        </li>
                    </ul>
                }
                {
                    this.props.topics.length === 0 && this.props.lessonId !== undefined &&
                    <button className="wbdv-topic-add-btn btn btn-secondary"
                            title="Add new topic" type="button"
                            onClick={() => this.props.createTopic(this.props.lessonId,
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
        lessons: state.lessons.lessons
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
        updateTopic: (topicId, topic) =>
            topicService.updateTopic(topicId, topic)
                .then(status => dispatch(updateTopic(topicId, topic))),
        deleteTopic: (topicId) =>
            topicService.deleteTopic(topicId)
                .then(status => dispatch(deleteTopic(topicId))),
        resetTopics: () => dispatch(resetTopics())
    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(TopicPillsContainer);