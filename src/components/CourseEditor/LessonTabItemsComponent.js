import React from "react";
import {Link} from "react-router-dom";
import {findLesson} from "../../services/LessonService";

class LessonTabItemsComponent extends React.Component {
    state = {
        editing: false,
        title: this.props.lessonTitle
    };

    setEditing = () => this.setState({editing: true});
    setLesson = (title) => this.setState({title: title});

    updateLesson = () => {
        findLesson(this.props.lessonId)
            .then(lesson => {
                lesson.title = this.state.title;
                this.props.updateLesson(lesson._id, lesson);
            });
        this.setState({editing: false});
    };

    render() {
        return (
            <li className="nav-item wbdv-lesson-tab-item">
                <Link
                    to={`/course/${this.props.courseId}/module/${this.props.moduleId}/lesson/${this.props.lessonId}`}
                    className={`nav-link text-white d-flex ${this.props.isCurrentLesson ? "bg-dark"
                                                                                        : "bg-secondary"}`}>
                    <div className="wbdv-lesson-title">
                        {
                            !this.state.editing &&
                            <span title={this.state.title}>{this.state.title}</span>
                        }
                        {
                            this.state.editing &&
                            <input className="form-control title-edit-field"
                                   value={this.state.title}
                                   onChange={e => this.setLesson(e.target.value)}/>
                        }
                    </div>
                    <div className="wbdv-lesson-tab-btn">
                        {
                            !this.state.editing &&
                            <i className="fas fa-pencil-alt text-white wbdv-button wbdv-edit"
                               role="button" title="Edit" onClick={this.setEditing}></i>
                        }
                        {
                            this.props.isCurrentLesson && this.state.editing &&
                            <i className="fas fa-times text-white wbdv-button wbdv-delete"
                               role="button" title="Delete"
                               onClick={() => this.props.deleteLesson(this.props.lessonId)}></i>
                        }
                        {
                            this.props.isCurrentLesson && this.state.editing &&
                            <i className="fas fa-check text-white wbdv-button wbdv-update"
                               role="button" title="Update" onClick={this.updateLesson}></i>
                        }
                    </div>
                </Link>
            </li>
        )
    }
}

export default LessonTabItemsComponent;