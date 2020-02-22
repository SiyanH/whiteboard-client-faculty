import React from "react";
import {Link} from "react-router-dom";

class ModuleListItemComponent extends React.Component {
    state = {
        editing: false,
        module: this.props.module
    };

    setEditing = () => this.setState({editing: true});
    setModule = (e) => this.setState({
                                         module: {
                                             ...this.state.module,
                                             title: e.target.value
                                         }
                                     });
    updateModule = () => {
        this.props.updateModule(this.state.module._id, this.state.module);
        this.setState({editing: false});
    };

    render() {
        return (
            <Link to={`/course/${this.props.module.courseId}/module/${this.props.module._id}`}
                  className={`d-flex align-items-center justify-content-between list-group-item 
                            list-group-item-action wbdv-module-item 
                            ${this.props.isCurrentModule && "active"}`}>
                {
                    !this.state.editing &&
                    <div title={this.props.module.title}
                         className="wbdv-module-item-title text-white d-inline-block">
                        {this.props.module.title}</div>
                }
                {
                    this.state.editing &&
                    <input className="form-control title-edit-field"
                           value={this.state.module.title}
                           onChange={(e) => this.setModule(e)}/>
                }
                <div className="d-flex justify-content-center">
                    {
                        !this.state.editing &&
                        <i className="fas fa-pencil-alt text-white wbdv-button wbdv-edit"
                           role="button" title="Edit" onClick={this.setEditing}></i>
                    }
                    {
                        this.props.isCurrentModule && this.state.editing &&
                        <i className="fas fa-times text-white wbdv-button wbdv-delete"
                           role="button" title="Delete"
                           onClick={() => this.props.deleteModule(this.props.module._id)}></i>
                    }
                    {
                        this.props.isCurrentModule && this.state.editing &&
                        <i className="fas fa-check text-white wbdv-button wbdv-update"
                           role="button" title="Update" onClick={this.updateModule}></i>
                    }
                </div>
            </Link>
        )
    }
}

export default ModuleListItemComponent;