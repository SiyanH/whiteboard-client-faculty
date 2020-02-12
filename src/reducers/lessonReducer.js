import {
    CREATE_LESSON,
    FIND_LESSON_FOR_MODULE,
    FIND_LESSON,
    UPDATE_LESSON,
    DELETE_LESSON,
    CURRENT_LESSON
} from "../actions/lessonActions";

const initialState = {
    lessons: [],
    currentLessonId: -1
};

const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_LESSON:
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.newLesson
                ]
            };
        case FIND_LESSON_FOR_MODULE:
            return {
                ...state,
                lessons: action.lessons
            };
        case FIND_LESSON:
            return {
                ...state,
                lessons: action.lessons
            };
        case UPDATE_LESSON:
            return {
                ...state,
                lessons: state.lessons.map(
                    lesson => lesson._id === lesson.lessonId ? action.lesson : lesson)
            };
        case DELETE_LESSON:
            return {
                ...state,
                lessons: state.lessons.filter(lesson => lesson._id !== lesson.lessonId)
            };
        case CURRENT_LESSON:
            return {
                ...state,
                currentLessonId: action.lessonId
            };
        default:
            return state
    }
};

export default lessonReducer;
