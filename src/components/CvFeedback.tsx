import useCustomTranslation from "@/hooks/useCustomTranslation";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea"
import { memo } from "react"
import { Controller, useForm } from "react-hook-form"

const FIELD_KEY = "feedback";

type FeedbackForm = {
    feedback: string
}

const CvFeedback = (): JSX.Element => {
    const { control, handleSubmit} = useForm<FeedbackForm>();
    const {T} = useCustomTranslation();

    const onSubmit = (values: FeedbackForm) => {
        const { feedback } = values;
        console.log(feedback)
    }

    return (
        <div className="w-full h-full pb-20 flex flex-col animate-fadeleft">
            <form
                className="w-full h-full"
                onSubmit={handleSubmit(onSubmit)}>
                <div className="w-full h-full flex flex-col space-y-5">
                    <div className="grow">
                        <Controller
                            control={control}
                            name={FIELD_KEY}
                            render={({field}) => 
                                <InputTextarea
                                    className="w-full !h-full bg-gray-2"
                                    placeholder={T('thoughtAboutCandidate')}
                                    {...field}
                                    />
                            }
                        />
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