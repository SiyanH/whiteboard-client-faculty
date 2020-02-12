import React from "react";
import {connect} from "react-redux";
import Module from "../../models/ModuleModel";
import moduleService from "../../services/ModuleService";
import {
    createModule,
    findModulesForCourse,
    findModules,
    updateModule,
    deleteModule
} from "../../actions/moduleActions";

class ModuleListComponent extends React.Component {
    state = {
        editing: false,
        newModuleTitle: "New Module"
    };

    componentDidMount() {
        this.props.findModulesForCourse(this.props.courseId).then();
    }

    render() {
        return (
            <div>
                <div className="list-group wbdv-module-list">
                    {
                        this.props.modules && this.props.modules.map(
                            module =>
                                <div key={module._id}
                                     className="d-flex align-items-center justify-content-between
                                            list-group-item list-group-item-action wbdv-module-item">
                                    <div title={module.title}
                                         className="wbdv-module-item-title text-white d-inline-block">
                                        {module.title}</div>
                                    <button
                                        aria-label="Delete" title="Delete" type="button"
                                        className="close text-white wbdv-module-item-delete-btn"
                                        onClick={() => this.props.deleteModule(module._id)}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>)
                    }
                </div>
                <form className="d-flex align-items-center">
                    <label className="sr-only" htmlFor="newModuleTitleInput">New Module
                        Title</label>
                    <input id="newModuleTitleInput" placeholder="New Module" type="text"
                           onChange={(e) => {
                               if (e.target.value.length > 0) {
                                   this.setState({newModuleTitle: e.target.value})
                               } else {
                                   this.setState({newModuleTitle: "New Module"})
                               }
                           }}/>
                    <button className="wbdv-module-item-add-btn wbdv-btn-hover-shadow"
                            title="Add new module" type="button"
                            onClick={() =>
                                this.props.createModule(this.props.courseId,
                                                        new Module(
                                                            this.state.newModuleTitle,
                                                            this.props.courseId))}>
                        <i className="fas fa-plus fa-lg text-white-50"></i>
                    </button>
                </form>
            </div>)
    }
}

const stateToPropertyMapper = (state) => {
    return {
        modules: state.modules.modules
    }
};

const dispatchToPropertyMapper = (dispatch) => {
    return {
        createModule: (courseId, module) =>
            moduleService.createModule(courseId, module)
                .then(actualModule => dispatch(createModule(actualModule))),
        findModulesForCourse: (courseId) =>
            moduleService.findModulesForCourse(courseId)
                .then(actualModules => dispatch(findModulesForCourse(actualModules))),
        findModules: (moduleId) =>
            moduleService.findModule(moduleId)
                .then(actualModules => dispatch(findModules(actualModules))),
        updateModule: (moduleId, module) =>
            moduleService.updateModule(moduleId, module)
                .then(actualModule => dispatch(updateModule(moduleId, actualModule))),
        deleteModule: (moduleId) =>
            moduleService.deleteModule(moduleId)
                .then(status => dispatch(deleteModule(moduleId)))
    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListComponent);