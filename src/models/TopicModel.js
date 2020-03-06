function Topic(title, description, widgets, lessonId, id) {
    this.title = title;
    this.description = description;
    this.widgets = widgets;
    this.lessonId = lessonId;
    this.id = id;

    this.setTitle = setTitle;
    this.getTitle = getTitle;
    this.setDescription = setDescription;
    this.getDescription = getDescription;
    this.setWidgets = setWidgets;
    this.getWidgets = getWidgets;

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

    function setDescription(description) {
        this.description = description;
    }

    function getDescription() {
        return this.description;
    }

    function setWidgets(widgets) {
        this.widgets = widgets;
    }

    function getWidgets() {
        return this.widgets;
    }
   
    function setLessonId(lessonId) {
        this.lessonId = lessonId;
    }

    function getLessonId() {
        return this.lessonId;
    }

    function setId() {
        this.id = id;
    }

    function getId() {
        return this.id;
    }
}

export default Topic;