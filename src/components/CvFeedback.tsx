import useCustomTranslation from "@/hooks/useCustomTranslation";
import useFeedbackService from "@/service-hooks/useFeedback.services";
import { FeedbackResponse, ProfileResponse } from "@/types/response.type";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Button } from "primereact/button";
import { InputSwitch } from "primereact/inputswitch";
import { InputTextarea } from "primereact/inputtextarea"
import { memo, useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import clsx from "clsx"
type FeedbackForm = {
    comment: string,
    result: boolean,
}

type CvFeedbackProps = {
    profile: ProfileResponse,
}

const CvFeedback = ({
    profile
}: CvFeedbackProps): JSX.Element => {
    const { control, handleSubmit, watch, setValue} = useForm<FeedbackForm>();
    const {T} = useCustomTranslation();
    const { getFeedbackById, updateFeedbackById } = useFeedbackService();
    
    const {data} = useQuery({
        queryFn: () => getFeedbackById(profile.id),
        queryKey: ["GET_FEEDBACK_BY_ID", profile.id]
    })

    useEffect(() => {
        if(!data) return;
        setValue("comment", data.comment);
        setValue("result", data.result === 'pass')
    }, [data, setValue])
    

    const mutationFeedback = useMutation({
        mutationFn: ({id, payload}: {id: string, payload: Partial<FeedbackResponse>}) => updateFeedbackById(id, payload),
        mutationKey: ["UPDATE_FEEDBACK_BY_ID"],
    })

    const onSubmit = (values: FeedbackForm) => {
        const { comment, result } = values;
        console.log(comment, result)
        mutationFeedback.mutateAsync({
            id: profile.id,
            payload: {
                comment,
                result: result ? "pass" : "fail",
            }
        })
    }

    return (
        <div className="w-full h-full flex flex-col animate-fadeleft">
            <form
                className="w-full h-full"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full h-full flex flex-col space-y-5">
                    <div className="flex flex-col space-y-2 max-h-[50%]">
                        <div className="h-full w-full flex flex-col space-y-4">
                            <div className="flex flex-col space-y-1">
                                <span className="text-gray-9 text-sm">{T('feedback')}</span>
                                <Controller
                                    control={control}
                                    name={"comment"}
                                    render={({field}) => 
                                        <InputTextarea
                                            autoResize
                                            className="w-full !h-full bg-gray-2 min-h-[150px]"
                                            placeholder={T('thoughtAboutCandidate')}
                                            {...field}
                                            />
                                    }
                                />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <span className="text-gray-9 text-sm">{T('result')}</span>
                                <Controller
                                    control={control}
                                    name={"result"}
                                    render={({field}) => 
                                        <div className="flex items-center space-x-2 w-full">
                                            <InputSwitch 
                                                inputRef={field.ref}
                                                onChange={(e) => {
                                                    field.onChange(e.value);
                                                }}
                                                checked={Boolean(field.value)}
                                                />
                                             <span className={clsx("font-medium text-sm", watch('result') ? "text-success-7": "text-danger-7")}>
                                                { watch('result') ? T('pass') : T('fail')}
                                            </span>
                                        </div>
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full">
                        <Button
                            className="w-full flex justify-center"
                            size="small">
                            <div className="flex items-center space-x-2">
                                <span>{T('submit')}</span>
                                <i className="pi pi-send"></i>
                            </div>
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default memo(CvFeedback)