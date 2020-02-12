function Module(title, courseId, _id) {
    this.title = title;
    this.courseId = courseId;
    this._id = _id;

    this.setTitle = setTitle;
    this.getTitle = getTitle;
    this.setCourseId = setCourseId;
    this.getCourseId = getCourseId;
    this.setId = setId;
    this.getId = getId;

    function setTitle(title) {
        this.title = title;
    }

    function getTitle() {
        return this.title;
    }
   
    function setCourseId(courseId) {
        this.courseId = courseId;
    }

    function getCourseId() {
        return this.courseId;
    }

    function setId() {
        this._id = _id;
    }

    function getId() {
        return this._id;
    }
}

export default Module;