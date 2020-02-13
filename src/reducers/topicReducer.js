import {
    CREATE_TOPIC,
    FIND_TOPICS_FOR_LESSON,
    FIND_TOPIC,
    UPDATE_TOPIC,
    DELETE_TOPIC,
    CURRENT_TOPIC,
    RESET_TOPIC
} from "../actions/topicActions";

const initialState = {
    topics: [],
    currentTopicId: -1
};

const topicReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TOPIC:
            return {
                ...state,
                topics: [
                    ...state.topics,
                    action.newTopic
                ]
            };
        case FIND_TOPICS_FOR_LESSON:
            return {
                ...state,
                topics: action.topics
            };
        case FIND_TOPIC:
            return {
                ...state,
                topics: action.topics
            };
        case UPDATE_TOPIC:
            return {
                ...state,
                topics: state.topics.map(
                    topic => topic._id === topic.topicId ? action.topic : topic)
            };
        case DELETE_TOPIC:
            return {
                ...state,
                topics: state.topics.filter(topic => topic._id !== topic.topicId)
            };
        case CURRENT_TOPIC:
            return {
                ...state,
                currentTopicId: action.topicId
            };
        case RESET_TOPIC:
            return initialState;
        default:
            return state
    }
};

export default topicReducer;
