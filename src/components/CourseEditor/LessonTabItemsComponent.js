import React from "react";

class LessonTabItemsComponent extends React.Component {
    state = {
        editing: false,
        lesson: this.props.lesson
    };

    setEditing = () => this.setState({editing: true});
    setLesson = (e) => this.setState({
                                         lesson: {
                                             ...this.state.lesson,
                                             title: e.target.value
                                         }
                                     });
    updateLesson = () => {
        this.props.updateLesson(this.state.lesson._id, this.state.lesson);
        this.setState({editing: false});
    };

    render() {
        return (
            <li className="nav-item wbdv-lesson-tab-item">
                <div className={`nav-link text-white d-flex
                     ${this.props.isCurrentLesson ? "bg-dark" : "bg-secondary"}`}
                     onClick={() => this.props.setCurrentLessonId(this.props.lesson._id)}>
                    <div>
                        {
                            !this.state.editing &&
                            <span title={this.state.lesson.title}>{this.state.lesson.title}</span>
                        }
                        {
                            this.state.editing &&
                            <input className="form-control title-edit-field"
                                   value={this.state.lesson.title}
                                   onChange={(e) => this.setLesson(e)}/>
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
                               onClick={() => {
                                   this.props.deleteLesson(this.props.lesson._id)
                                       .then(r => this.props.findLessonsForModule(
                                           this.props.moduleId));
                               }}></i>
                        }
                        {
                            this.props.isCurrentLesson && this.state.editing &&
                            <i className="fas fa-check text-white wbdv-button wbdv-update"
                               role="button" title="Update" onClick={this.updateLesson}></i>
                        }
                    </div>
                </div>
            </li>
        )
    }
}

export default LessonTabItemsComponent;