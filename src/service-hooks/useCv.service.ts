import AppConfig from "@/configs/AppConfig";
import useHttpClient from "@/hooks/useHttpClient"
import { CommentResponse, ProfileResponse } from "@/types/response.type";
import Utils from "@/utils/Utils";

type ResultCvService = {
    getCV: (queries?: string[]) => Promise<ProfileResponse[]>,
    getCommentsById: (id: string) => Promise<CommentResponse[]>,
    updateCommentById: (id: string, comment: string) => Promise<CommentResponse>,
    getProfileById: (id: string) => Promise<ProfileResponse>,
}

export default function useCvService(): ResultCvService {
    const httpClient = useHttpClient();

    const getCV = (queries: string[] = []) => {
        const query_string = queries.join(' ');
        const params = Utils.parseObjectToParam({ query_string });

        return httpClient.get<ProfileResponse[]>(`${AppConfig.CV.GET_PROFILES(params)}`);
    }


    const getCommentsById = (id: string) => {
        return httpClient.get<CommentResponse[]>(`${AppConfig.CV.GET_COMMENTS_BY_ID(id)}`);
    }

    const updateCommentById = (id: string, comment: string) => {
        const payload = {
            comment
        }

        return httpClient.patch<CommentResponse>(`${AppConfig.CV.UPDATE_COMMENT_BY_ID(id)}`, payload);
    }

    const getProfileById = (id: string) => {

        return httpClient.get<ProfileResponse>(`${AppConfig.CV.GET_PROFILE_BY_ID(id)}`);
    }

    return {
        getCV,
        getCommentsById,
        updateCommentById,
        getProfileById
    }
}   