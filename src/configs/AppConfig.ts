

export default class AppConfig {
    static LANG_TOKEN = "lang";
    static BASE_URL = import.meta.env.VITE_APP_BASE_CV_URL;

    static CV = {
        GET_PROFILES: (params: string) => `/cvs${params}`,
        GET_COMMENTS_BY_ID: (id: string) => `/talents/${id}/comments`,
        UPDATE_COMMENT_BY_ID: (id: string) => `/talents/${id}/comments`,
        GET_PROFILE_BY_ID: (id: string) => `/talents/${id}`,

        GET_FEEDBACK_BY_ID: (id: string) => `/talents/${id}/feedbacks`,
        UPDATE_FEEDBACK_BY_ID: (id: string) => `/talents/${id}/feedbacks`,
    }
}