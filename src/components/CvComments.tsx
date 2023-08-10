import useCustomTranslation from "@/hooks/useCustomTranslation"
import useCvService from "@/service-hooks/useCv.service"
import { useMutation, useQuery } from "@tanstack/react-query"
import dayjs from "dayjs"
import { Button } from "primereact/button"
import { InputTextarea } from "primereact/inputtextarea"
import { memo } from "react"
import { Controller, useForm } from "react-hook-form"
type CvCommentsProps = {
    id: string
}

type CvCommentsForm = {
    comment: string,
}

const COMMENT_KEY = 'comment';

const CvComments = ({
    id
}: CvCommentsProps): JSX.Element => {
    const { 
        getCommentsById,
        updateCommentById
    } = useCvService();
    const {T} = useCustomTranslation();
    const { control, handleSubmit, watch} = useForm<CvCommentsForm>();

    const {data, refetch} = useQuery({
        queryFn: () => getCommentsById(id),
        queryKey: ["GET_COMMENT_BY_ID", id],
    })

    const mutateComment = useMutation({
        mutationFn: ({id, comment}: {id: string, comment: string}) => updateCommentById(id, comment),
        mutationKey: [id]
    })

    const onSubmit = async (formValues: CvCommentsForm) => {
        const { comment } = formValues;
        await mutateComment.mutateAsync({id, comment});
        refetch();
    }
    return (
        <div className="h-full w-full flex flex-col space-y-5">
            <div className="grow relative">
                <div className="absolute inset-0 w-full h-full flex flex-col space-y-2 overflow-auto px-5">
                    {
                        data?.length ?
                        data.map(item => 
                            <div
                                className="animate-faderight border border-gray-4 border-solid rounded-md"
                                key={item.id}>
                                <div className="flex flex-col items-end w-full space-y-1 px-3 py-2 bg-gray-4">
                                    <div className="flex items-center space-x-1">
                                        <span className="text-xs text-gray-8">{T('by')}</span>
                                        <span className="text-sm text-primary font-medium">{item.comment_by}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <span className="text-xs text-gray-8">{T('at')}</span>
                                        <span className="text-sm text-primary font-medium">{dayjs(item.created_at).format("mm/hh-DD/MM/YYYY")}</span>
                                    </div>
                                </div>

                                <div className="border-y border-x-0 border-gray-4 border-solid p-3">
                                    <span>{item.comment}</span>
                                </div>
                            </div>
                        )
                        :
                        <div className="h-full flex items-center flex-col space-y-2 justify-center border border-solid border-gray-4 rounded-md bg-gray-2 text-secondary">
                            <i className="pi pi-inbox text-[60px]"></i>
                            <span>{T('noData')}</span>
                        </div>
                    }
                </div>
            </div>

            <div className="px-5 animate-faderight">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    >
                    <Controller
                        name={COMMENT_KEY}
                        control={control}
                        render={({field}) => 
                            <InputTextarea 
                                {...field}
                                placeholder={T('enterYourComment')}
                                className="w-full"
                                rows={5} />
                        }/>
                    <div className="w-full flex justify-end pt-2">
                        <Button
                            disabled={!Boolean(watch(COMMENT_KEY))}
                            size="small"
                            icon="pi pi-send"
                            iconPos="right"
                            className="[&_*]:!font-normal"
                            label={T('addComment')}/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default memo(CvComments)