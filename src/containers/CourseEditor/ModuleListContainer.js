import React from "react";
import {connect} from "react-redux";
import Module from "../../models/ModuleModel";
import moduleService from "../../services/ModuleService";
import {
    createModule,
    findModulesForCourse,
    updateModule,
    deleteModule
} from "../../actions/moduleActions";
import ModuleListItemComponent from "../../components/CourseEditor/ModuleListItemComponent";
import lessonService from "../../services/LessonService";
import {findLessonsForModule} from "../../actions/lessonActions";

class ModuleListContainer extends React.Component {
    state = {
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
                                <ModuleListItemComponent key={module._id}
                                                         module={module}
                                                         updateModule={this.props.updateModule}
                                                         deleteModule={this.props.deleteModule}
                                                         isCurrentModule={this.props.moduleId
                                                                          === module._id}/>)
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
        updateModule: (moduleId, module) =>
            moduleService.updateModule(moduleId, module)
                .then(status => dispatch(updateModule(moduleId, module))),
        deleteModule: (moduleId) =>
            moduleService.deleteModule(moduleId)
                .then(status => dispatch(deleteModule(moduleId))),
        findLessonsForModule: (moduleId) =>
            lessonService.findLessonsForModule(moduleId)
                .then(actualLessons => dispatch(findLessonsForModule(actualLessons)))
    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListContainer);