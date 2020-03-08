import React from "react";
import {Link} from "react-router-dom";
import {findTopic} from "../../services/TopicService";

class TopicPillItemComponent extends React.Component {
    state = {
        editing: false,
        title: this.props.topicTitle
    };

    setEditing = () => this.setState({editing: true});
    setTitle = (title) => this.setState({title: title});

    updateTopic = () => {
        findTopic(this.props.topicId)
            .then(topic => {
                topic.title = this.state.title;
                this.props.updateTopic(topic.id, topic);
            });
        this.setState({editing: false});
    };

    render() {
        return (
            <li className="nav-item wbdv-topic-pill-item">
                <Link
                    to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}/topic/${this.props.topicId}`}
                    className={`wbdv-topic-pill btn btn-secondary d-flex ${this.props.isCurrentTopic
                                                                           && "active"}`}>
                    <div className="wbdv-topic-title">
                        {
                            !this.state.editing &&
                            <span title={this.state.title}>{this.state.title}</span>
                        }
                        {
                            this.state.editing &&
                            <input className="form-control title-edit-field"
                                   value={this.state.title}
                                   onChange={e => this.setTitle(e.target.value)}/>
                        }
                    </div>
                    <div className="wbdv-topic-button-group">
                        {
                            !this.state.editing &&
                            <i className="fas fa-pencil-alt text-white wbdv-button wbdv-edit"
                               role="button" title="Edit" onClick={this.setEditing}></i>
                        }
                        {
                            this.props.isCurrentTopic && this.state.editing &&
                            <i className="fas fa-times text-white wbdv-button wbdv-delete"
                               role="button" title="Delete"
                               onClick={() => {
                                   this.props.deleteTopic(this.props.topicId)
                                       .then(r => this.props.findTopicsForLesson(
                                           this.props.lessonId));
                               }}></i>
                        }
                        {
                            this.props.isCurrentTopic && this.state.editing &&
                            <i className="fas fa-check text-white wbdv-button wbdv-update"
                               role="button" title="Update" onClick={this.updateTopic}></i>
                        }
                    </div>
                </Link>
            </li>
        )
    }
}

export default TopicPillItemComponent;