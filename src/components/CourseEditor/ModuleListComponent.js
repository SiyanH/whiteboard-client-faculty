import React from "react";

const ModuleListComponent = () =>
    <div>
        <div aria-hidden="true" aria-labelledby="deleteModuleConfModel" className="modal fade"
             id="deleteModuleConfModel"
             role="dialog" tabIndex="-1">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="deleteModuleConfModalLabel">Delete
                            Module</h5>
                        <button aria-label="Close" className="close" data-dismiss="modal"
                                type="button">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        Are you sure to delete this module?
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" data-dismiss="modal"
                                type="button">No
                        </button>
                        <button className="btn btn-primary" type="button">Yes</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="list-group wbdv-module-list">
            <a className="list-group-item list-group-item-action wbdv-module-item" href="/#"
               role="button">
                <div className="wbdv-module-item-title text-white d-inline-block">Module 1 -
                    jQuery
                </div>
                <button aria-label="Close" className="close text-white wbdv-module-item-delete-btn"
                        data-target="#deleteModuleConfModel"
                        data-toggle="modal"
                        type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </a>
            <a className="list-group-item list-group-item-action wbdv-module-item active" href="/#"
               role="button">
                <span className="wbdv-module-item-title text-white">Module 2 - React</span>
                <button aria-label="Close" className="close text-white wbdv-module-item-delete-btn"
                        data-target="#deleteModuleConfModel"
                        data-toggle="modal"
                        type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </a>
            <a className="list-group-item list-group-item-action wbdv-module-item" href="/#"
               role="button">
                <span className="wbdv-module-item-title text-white">Module 3 - Redux</span>
                <button aria-label="Close" className="close text-white wbdv-module-item-delete-btn"
                        data-target="#deleteModuleConfModel"
                        data-toggle="modal"
                        type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </a>
            <a className="list-group-item list-group-item-action wbdv-module-item" href="/#"
               role="button">
                <span className="wbdv-module-item-title text-white">Module 4 - Native</span>
                <button aria-label="Close" className="close text-white wbdv-module-item-delete-btn"
                        data-target="#deleteModuleConfModel"
                        data-toggle="modal"
                        type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </a>
            <a className="list-group-item list-group-item-action wbdv-module-item" href="/#"
               role="button">
                <span className="wbdv-module-item-title text-white">Module 5 - Angular</span>
                <button aria-label="Close" className="close text-white wbdv-module-item-delete-btn"
                        data-target="#deleteModuleConfModel"
                        data-toggle="modal"
                        type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </a>
            <a className="list-group-item list-group-item-action wbdv-module-item" href="/#"
               role="button">
                <span className="wbdv-module-item-title text-white">Module 6 - Node</span>
                <button aria-label="Close" className="close text-white wbdv-module-item-delete-btn"
                        data-target="#deleteModuleConfModel"
                        data-toggle="modal"
                        type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </a>
            <a className="list-group-item list-group-item-action wbdv-module-item" href="/#"
               role="button">
                <span className="wbdv-module-item-title text-white">Module 7 - Mongo</span>
                <button aria-label="Close" className="close text-white wbdv-module-item-delete-btn"
                        data-target="#deleteModuleConfModel"
                        data-toggle="modal"
                        type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </a>
        </div>
        <form className="d-flex align-items-center">
            <label className="sr-only" htmlFor="newModuleTitleInput">New Module Title</label>
            <input id="newModuleTitleInput" placeholder="New Module Title" type="text"/>
            <button className="wbdv-module-item-add-btn wbdv-btn-hover-shadow"
                    title="Add new module" type="button">
                <i className="fas fa-plus fa-lg text-white-50"></i>
            </button>
        </form>
    </div>;

export default ModuleListComponent;