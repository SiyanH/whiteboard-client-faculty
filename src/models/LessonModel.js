function Lesson(title, moduleId, _id) {
    this.title = title;
    this.moduleId = moduleId;
    this._id = _id;

    this.setTitle = setTitle;
    this.getTitle = getTitle;
    this.setModuleId = setModuleId;
    this.getModuleId = getModuleId;
    this.setId = setId;
    this.getId = getId;

    function setTitle(title) {
        this.title = title;
    }

    function getTitle() {
        return this.title;
    }
   
    function setModuleId(moduleId) {
        this.moduleId = moduleId;
    }

    function getModuleId() {
        return this.moduleId;
    }

    function setId() {
        this._id = _id;
    }

    function getId() {
        return this._id;
    }
}

export default Lesson;