import React from "react";
import {format} from "date-fns";

class CourseRowComponent extends React.Component {
    state = {
        editing: false,
        course: this.props.course
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
            <ul className={`list-group list-group-horizontal wbdv-row wbdv-course 
            ${this.props.isSelectedCourse && "active"}`} onClick={this.setClicked}>
                <li className={`list-group-item col-lg-6 col-md-7 col-10 
                ${this.props.isSelectedCourse && "active"}`}>
                    <i className={`fas fa-file-alt wbdv-row wbdv-icon 
                    ${this.props.isSelectedCourse ? "text-white" : "text-primary"}`}></i>
                    {
                        !this.state.editing &&
                        <span className="ml-3 mr-3 wbdv-row wbdv-title"
                              onClick={this.props.showCourseEditor}>
                            {this.props.course.title}</span>
                    }
                    {
                        this.state.editing &&
                        <input className="form-control title-edit-field"
                               value={this.state.course.title}
                               onChange={(e) => this.setCourse(e)}/>
                    }
                </li>
                <li className={`list-group-item wbdv-row wbdv-owner col-lg-2 d-none d-md-block 
                ${this.props.isSelectedCourse && "active"}`}>{this.props.course.owner}
                </li>
                <li className={`list-group-item wbdv-row wbdv-modified-date col-lg-3 d-none d-lg-block
                ${this.props.isSelectedCourse && "active"}`}>
                    {format(new Date(this.props.course.modifiedDate), 'PP p')}
                </li>
                <li className={`list-group-item d-flex justify-content-center col-lg-1 col-2
                ${this.props.isSelectedCourse && "active"}`} id="courseRowBtn">
                    {
                        this.props.isSelectedCourse && !this.state.editing &&
                        <i className="fas fa-pencil-alt text-white wbdv-row wbdv-button wbdv-edit"
                           role="button" title="Edit" onClick={this.setEditing}></i>
                    }
                    {
                        this.props.isSelectedCourse && !this.state.editing &&
                        <i className="fas fa-trash-alt text-white wbdv-row wbdv-button wbdv-delete"
                           role="button" title="Delete"
                           onClick={() => this.props.deleteCourse(this.props.course)}></i>
                    }
                    {
                        this.props.isSelectedCourse && this.state.editing &&
                        <i className="fas fa-check text-white wbdv-row wbdv-button wbdv-update"
                           role="button" title="Update" onClick={this.updateCourse}></i>
                    }
                </li>
            </ul>
        )
    }
}

export default CourseRowComponent;