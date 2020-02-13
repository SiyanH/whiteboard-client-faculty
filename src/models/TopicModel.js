function Topic(title, lessonId, _id) {
    this.title = title;
    this.lessonId = lessonId;
    this._id = _id;

    this.setTitle = setTitle;
    this.getTitle = getTitle;
    this.setLessonId = setLessonId;
    this.getLessonId = getLessonId;
    this.setId = setId;
    this.getId = getId;

    function setTitle(title) {
        this.title = title;
    }

    function getTitle() {
        return this.title;
    }
   
    function setLessonId(lessonId) {
        this.lessonId = lessonId;
    }

    function getLessonId() {
        return this.lessonId;
    }

    function setId() {
        this._id = _id;
    }

    function getId() {
        return this._id;
    }
}

export default Topic;