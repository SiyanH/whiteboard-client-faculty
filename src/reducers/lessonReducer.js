import {
    CREATE_LESSON,
    FIND_LESSON_FOR_MODULE,
    FIND_LESSON,
    UPDATE_LESSON,
    DELETE_LESSON
} from "../actions/lessonActions";

const initialState = {
    lessons: []
};

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LESSON:
            return {
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            };
        case FIND_LESSON_FOR_MODULE:
            return {
                lessons: action.lessons
            };
        case FIND_LESSON:
            return {
                lessons: action.lessons
            };
        case UPDATE_LESSON:
            return {
                lessons: state.lessons.map(
                    lesson => lesson._id === lesson.lessonId ? action.lesson : lesson)
            };
        case DELETE_LESSON:
            return {
                lessons: state.lessons.filter(lesson => lesson._id !== lesson.lessonId)
            };
        default:
            return state
    }
};

export default lessonReducer;
