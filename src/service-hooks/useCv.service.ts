import AppConfig from "@/configs/AppConfig";
import useHttpClient from "@/hooks/useHttpClient"
import { ProfileResponse } from "@/types/response.type";
import Utils from "@/utils/Utils";

type ResultCvService = {
    getCV: (queries?: string[]) => Promise<ProfileResponse[]>,
}
export default function useCvService(): ResultCvService {
    const httpClient = useHttpClient();

    const getCV = (queries: string[] = []) => {
        const query_string = queries.join(' ');
        const params = Utils.parseObjectToParam({ query_string });

        return httpClient.get<ProfileResponse[]>(`${AppConfig.CV.GET_PROFILES(params)}`);
    }

    return {
        getCV
    }
}   