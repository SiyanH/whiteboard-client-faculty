import React from "react";
import {format, isToday} from 'date-fns'
import {Link} from "react-router-dom";

class CourseCardComponent extends React.Component {
    state = {
        editing: false,
        course: this.props.course,
        modifiedDate: new Date(this.props.course.modifiedDate)
    };

    setClicked = () => this.props.setSelectedCourse(this.props.course);
    setEditing = () => this.setState({editing: true});
    setCourse = (e) => this.setState({
                                         course: {
                                             ...this.state.course,
                                             title: e.target.value,
                                             modifiedDate: new Date()
                                         }
                                     });
    updateCourse = () => {
        this.props.updateCourse(this.state.course._id, this.state.course);
        this.setState({editing: false});
    };

    render() {
        return (
            <div className="col mb-4">
                <div className="card h-100 wbdv-course-card" onClick={this.setClicked}>
                    {/* Photo by Kiy Turk on Unsplash https://unsplash.com/photos/I0yLAcAetNQ */}
                    <img
                        src="https://images.unsplash.com/photo-1576976881052-ee7e730fbfee"
                        className="card-img-top" alt="Course Preview"/>
                    <div className={`card-body ${this.props.isSelectedCourse && "active"}`}>
                        <div>
                            {
                                !this.state.editing &&
                                <Link to={`/course/${this.props.course._id}`}>
                                    <h6 className="card-title"
                                        title={this.props.course.title}>{this.props.course.title}</h6>
                                </Link>
                            }
                            {
                                this.state.editing &&
                                <input className="form-control title-edit-field"
                                       value={this.state.course.title}
                                       onChange={(e) => this.setCourse(e)}/>
                            }
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div>
                                <i className="fas fa-file-alt wbdv-row wbdv-icon text-primary mr-2"></i>
                                <span className="card-text text-muted">Modified&nbsp;
                                    {
                                        isToday(this.state.modifiedDate) ?
                                        format(this.state.modifiedDate, ' p') :
                                        format(this.state.modifiedDate, ' PP')
                                    }
                                </span>
                            </div>
                            <div>
                                {
                                    !this.props.isSelectedCourse &&
                                    <i className="fas fa-ellipsis-v text-black-50"></i>
                                }
                                {
                                    this.props.isSelectedCourse && !this.state.editing &&
                                    <i className="fas fa-pencil-alt text-primary mr-2 wbdv-button wbdv-edit"
                                       role="button" title="Edit" onClick={this.setEditing}></i>
                                }
                                {
                                    this.props.isSelectedCourse && !this.state.editing &&
                                    <i className="fas fa-trash-alt text-primary wbdv-button wbdv-delete"
                                       role="button" title="Delete"
                                       onClick={() => this.props.deleteCourse(
                                           this.props.course)}></i>
                                }
                                {
                                    this.props.isSelectedCourse && this.state.editing &&
                                    <i className="fas fa-check text-primary wbdv-button wbdv-update"
                                       role="button" title="Update" onClick={this.updateCourse}></i>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CourseCardComponent;