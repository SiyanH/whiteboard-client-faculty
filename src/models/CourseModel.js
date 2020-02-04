function Course(title, owner, createdDate, modifiedDate, _id) {
    this.title = title;
    this.owner = owner;
    this.createdDate = createdDate;
    this.modifiedDate = modifiedDate;
    this._id = _id;

    this.setTitle = setTitle;
    this.getTitle = getTitle;
    this.setOwner = setOwner;
    this.getOwner = getOwner;
    this.setCreatedDate = setCreatedDate;
    this.getCreatedDate = getCreatedDate;
    this.setModifiedDate = setModifiedDate;
    this.getModifiedDate = getModifiedDate;
    this.setId = setId;
    this.getId = getId;

    function setTitle(title) {
        this.title = title;
    }

    function getTitle() {
        return this.title;
    }

    function setOwner(owner) {
        this.owner = owner;
    }

    function getOwner() {
        return this.owner;
    }

    function setCreatedDate(createdDate) {
        this.createdDate = createdDate;
    }

    function getCreatedDate() {
        return this.createdDate;
    }

    function setModifiedDate(modifiedDate) {
        this.modifiedDate = modifiedDate;
    }

    function getModifiedDate() {
        return this.modifiedDate;
    }

    function setId() {
        this._id = _id;
    }

    function getId() {
        return this._id;
    }
}

export default Course;