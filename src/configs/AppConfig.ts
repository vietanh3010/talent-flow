

export default class AppConfig {
    static LANG_TOKEN = "lang";
    static BASE_URL = import.meta.env.VITE_APP_BASE_CV_URL;

    static CV = {
        GET_PROFILES: (params: string) => `/talent${params}`,
    }
}