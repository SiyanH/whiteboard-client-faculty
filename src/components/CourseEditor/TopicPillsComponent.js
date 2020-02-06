import React from "react";

const TopicPillsComponent = () =>
    <div aria-label="Topic list" className="wbdv-topic-pill-list" role="group">
        <button className="wbdv-topic-pill btn btn-secondary" type="button">Topic
            1
        </button>
        <button className="wbdv-topic-pill btn btn-secondary active"
                type="button">Topic 2
        </button>
        <button className="wbdv-topic-pill btn btn-secondary" type="button">Topic
            3
        </button>
        <button className="wbdv-topic-pill btn btn-secondary" type="button">Topic
            4
        </button>
        <button className="wbdv-topic-add-btn btn btn-secondary"
                title="Add new topic" type="button">
            <i className="fas fa-plus fa"></i>
        </button>
    </div>;

export default TopicPillsComponent;
