import React from "react";

class TopicPillItemComponent extends React.Component {
    state = {
        editing: false,
        topic: this.props.topic
    };

    setEditing = () => this.setState({editing: true});
    setTopic = (e) => this.setState({
                                        topic: {
                                            ...this.state.topic,
                                            title: e.target.value
                                        }
                                    });
    updateTopic = () => {
        this.props.updateTopic(this.state.topic._id, this.state.topic);
        this.setState({editing: false});
    };

    render() {
        return (
            <li className="nav-item wbdv-topic-pill-item">
                <div className={`wbdv-topic-pill btn btn-secondary d-flex 
                     ${this.props.isCurrentTopic && "active"}`}
                     onClick={() => this.props.setCurrentTopicId(this.props.topic._id)}>
                    <div className="wbdv-topic-title">
                        {
                            !this.state.editing &&
                            <span title={this.state.topic.title}>{this.state.topic.title}</span>
                        }
                        {
                            this.state.editing &&
                            <input className="form-control title-edit-field"
                                   value={this.state.topic.title}
                                   onChange={(e) => this.setTopic(e)}/>
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
                                   this.props.deleteTopic(this.props.topic._id)
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
                </div>
            </li>
        )
    }
}

export default TopicPillItemComponent;