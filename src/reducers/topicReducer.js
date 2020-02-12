import {
    CREATE_TOPIC,
    FIND_TOPICS_FOR_LESSON,
    FIND_TOPIC,
    UPDATE_TOPIC,
    DELETE_TOPIC
} from "../actions/topicActions";

const initialState = {
    topics: []
};

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TOPIC:
            return {
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            };
        case FIND_TOPICS_FOR_LESSON:
            return {
                topics: action.topics
            };
        case FIND_TOPIC:
            return {
                topics: action.topics
            };
        case UPDATE_TOPIC:
            return {
                topics: state.topics.map(
                    topic => topic._id === topic.topicId ? action.topic : topic)
            };
        case DELETE_TOPIC:
            return {
                topics: state.topics.filter(topic => topic._id !== topic.topicId)
            };
        default:
            return state
    }
};

export default topicReducer;
