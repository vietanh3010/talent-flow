import AppConfig from "@/configs/AppConfig";
import useHttpClient from "@/hooks/useHttpClient";
import { FeedbackResponse } from "@/types/response.type";

type ResultFeedbackService = {
    getFeedbackById: (id: string) => Promise<FeedbackResponse>,
    updateFeedbackById: (id: string, payload: Partial<FeedbackResponse>) => Promise<FeedbackResponse>,
}
export default function useFeedbackService(): ResultFeedbackService {
    const httpClient = useHttpClient();

    const getFeedbackById = (id: string) => {
        return httpClient.get<FeedbackResponse[]>(`${AppConfig.CV.GET_FEEDBACK_BY_ID(id)}`).then(res => res[0] ?? [])
    }

    const updateFeedbackById = (id: string, payload: Partial<FeedbackResponse>) => {
        return httpClient.patch<FeedbackResponse>(
            `${AppConfig.CV.UPDATE_FEEDBACK_BY_ID(id)}`,
            payload
        )
    }

    return {
        getFeedbackById,
        updateFeedbackById
    }
}