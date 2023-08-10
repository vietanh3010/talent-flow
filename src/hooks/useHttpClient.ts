/* eslint-disable @typescript-eslint/no-explicit-any */
import AppConfig from "@/configs/AppConfig";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { useEffect } from "react";

const createBaseInstance = (): AxiosInstance => {
    const axiosInstance = axios.create({
        baseURL: AppConfig.BASE_URL
    });
    return axiosInstance
}

type ResultHttpClient = {
    get: <T>(url: string, options?: Record<string, string>, requestOptions?: AxiosRequestConfig<any>) => Promise<T>,
    post: <T>(url: string, data: any, options?: Record<string, string>) => Promise<T>,
    put: <T>(url: string, data: any, options?: Record<string, string>) => Promise<T>,
    patch: <T>(url: string, data: any, options?: Record<string, string>) => Promise<T>,
    delete: <T>(url: string, options?: Record<string, string>) => Promise<T>,
    axiosBase: AxiosInstance,
}

export default function useHttpClient(): ResultHttpClient {
    const axiosBase = createBaseInstance();

    // interceptor
    useEffect(() => {
        // auth
        axiosBase.interceptors.response.use(
            (response) => {
                return response.data;
            },
            (error) => {
                if (error?.response?.status === 401) {
                    //
                }

                return Promise.reject(error);
            },
        )
        axiosBase.interceptors.request.use(
            (config) => {
                return config
            },
            (error) => {
                return Promise.reject(error);
            },
        )
    }, [axiosBase.interceptors.request, axiosBase.interceptors.response])

    //methods

    const getAuth = <T>(url: string, headers: Record<string, string> = {}, requestOptions?: AxiosRequestConfig<any>) => {
        return axiosBase.request({
            url,
            method: 'GET',
            headers: {
                ...headers
            },
            ...(requestOptions ?? {}),
        }) as Promise<T>;
    }

    const postAuth = <T>(url: string, data: any, headers: Record<string, string> = {}) => {
        return axiosBase.request({
            url,
            method: 'POST',
            data,
            headers: {
                ...headers
            }
        }) as Promise<T>;
    }

    const putAuth = <T>(url: string, data: any, headers: Record<string, string> = {}) => {
        return axiosBase.request({
            url,
            method: 'PUT',
            data,
            headers: {
                ...headers
            }
        }) as Promise<T>;
    }

    const patchAuth = <T>(url: string, data: any, headers: Record<string, string> = {}) => {
        return axiosBase.request({
            url,
            method: 'PATCH',
            data,
            headers: {
                ...headers
            }
        }) as Promise<T>;
    }

    const deleteAuth = <T>(url: string, options: Record<string, string> = {}) => {
        return axiosBase.request({
            url,
            method: 'DELETE',
            headers: {
                ...options
            }
        }) as Promise<T>;
    }

    return {
        get: getAuth,
        post: postAuth,
        put: putAuth,
        patch: patchAuth,
        delete: deleteAuth,
        axiosBase,
    }
}