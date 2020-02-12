export const CREATE_LESSON = "CREATE_LESSON";
export const FIND_LESSON_FOR_MODULE = "FIND_LESSON_FOR_MODULE";
export const FIND_LESSON = "FIND_LESSON";
export const UPDATE_LESSON = "UPDATE_LESSON";
export const DELETE_LESSON = "DELETE_LESSON";

export const createLesson = (lesson) => ({
    type: CREATE_LESSON,
    newLesson: lesson
});

export const updateLesson = (lessonId, lesson) => ({
    type: UPDATE_LESSON,
    lessonId: lessonId,
    lesson: lesson
});

export const deleteLesson = (lessonId) => ({
    type: DELETE_LESSON,
    lessonId: lessonId
});