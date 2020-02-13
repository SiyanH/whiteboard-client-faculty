import React from "react";
import {connect} from "react-redux";
import Module from "../../models/ModuleModel";
import moduleService from "../../services/ModuleService";
import {
    createModule,
    findModulesForCourse,
    findModules,
    updateModule,
    deleteModule,
    setCurrentModuleId
} from "../../actions/moduleActions";
import ModuleListItemComponent from "./ModuleListItemComponent";
import lessonService from "../../services/LessonService";
import {findLessonsForModule, setCurrentLessonId} from "../../actions/lessonActions";

class ModuleListComponent extends React.Component {
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
                                                         findLessonsForModule={this.props.findLessonsForModule}
                                                         setCurrentModuleId={this.props.setCurrentModuleId}
                                                         setCurrentLessonId={this.props.setCurrentLessonId}
                                                         isCurrentModule={this.props.currentModuleId
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
        modules: state.modules.modules,
        currentModuleId: state.modules.currentModuleId
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
                .then(status => dispatch(updateModule(moduleId, module))),
        deleteModule: (moduleId) =>
            moduleService.deleteModule(moduleId)
                .then(status => dispatch(deleteModule(moduleId))),
        setCurrentModuleId: (moduleId) =>
            dispatch(setCurrentModuleId(moduleId)),
        setCurrentLessonId: (lessonId) =>
            dispatch(setCurrentLessonId(lessonId)),
        findLessonsForModule: (moduleId) =>
            lessonService.findLessonsForModule(moduleId)
                .then(actualLessons => dispatch(findLessonsForModule(actualLessons)))
    }
};

export default connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)
(ModuleListComponent);