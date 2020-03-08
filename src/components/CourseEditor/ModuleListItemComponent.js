import React from "react";
import {Link} from "react-router-dom";
import {findModule} from "../../services/ModuleService";

class ModuleListItemComponent extends React.Component {
    state = {
        editing: false,
        title: this.props.moduleTitle
    };

    setEditing = () => this.setState({editing: true});
    setModule = (title) => this.setState({title: title});

    updateModule = () => {
        findModule(this.props.moduleId)
            .then(module => {
                module.title = this.state.title;
                this.props.updateModule(module._id, module);
            });
        this.setState({editing: false});
    };

    render() {
        return (
            <Link to={`/course/${this.props.courseId}/module/${this.props.moduleId}`}
                  className={`d-flex align-items-center justify-content-between list-group-item 
                            list-group-item-action wbdv-module-item 
                            ${this.props.isCurrentModule && "active"}`}>
                {
                    !this.state.editing &&
                    <div title={this.state.title}
                         className="wbdv-module-item-title text-white d-inline-block">
                        {this.state.title}</div>
                }
                {
                    this.state.editing &&
                    <input className="form-control title-edit-field"
                           value={this.state.title} onChange={e => this.setModule(e.target.value)}/>
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
                           onClick={() => this.props.deleteModule(this.props.moduleId)}></i>
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