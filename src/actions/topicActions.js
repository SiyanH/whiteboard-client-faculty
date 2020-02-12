export const CREATE_TOPIC = "CREATE_TOPIC";
export const FIND_TOPICS_FOR_LESSON = "FIND_TOPICS_FOR_LESSON";
export const FIND_TOPIC = "FIND_TOPIC";
export const UPDATE_TOPIC = "UPDATE_TOPIC";
export const DELETE_TOPIC = "DELETE_TOPIC";

export const createTopic = (topic) => ({
    type: CREATE_TOPIC,
    newTopic: topic
});

export const updateTopic = (topicId, topic) => ({
    type: UPDATE_TOPIC,
    topicId: topicId,
    topic: topic
});

export const deleteTopic = (topicId) => ({
    type: DELETE_TOPIC,
    topicId: topicId
});