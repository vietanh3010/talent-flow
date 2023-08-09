import PdfViewer from "@/components/PdfViewer";
import useCustomTranslation from "@/hooks/useCustomTranslation";
import clsx from "clsx";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { memo, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

const QUERY_STRING = "url"
type CvForm = {
    url: string
}

const CurriculumVitae = (): JSX.Element => {
    const {T} = useCustomTranslation();
    const [searchParams, setSearchParams] = useSearchParams();
    const { handleSubmit, control, watch, setValue, formState: {errors} } = useForm<CvForm>();
    const [pdfUrl, setPdfUrl] = useState<string>("");
    useEffect(() => {
        const url = searchParams.get(QUERY_STRING) ?? "";
        if(!url) return;
        setValue("url", url);

        const timeout = window.setTimeout(() => {
            onSubmit({ url })
        }, 350)

        return () => {
            window.clearTimeout(timeout)
        }
    }, [])

    const onSubmit = (formValues: CvForm) => {
        const { url } = formValues;
        searchParams.set(QUERY_STRING, url);
        setSearchParams(searchParams);
        setPdfUrl(url);
    }

    const handleClear = () => {
        setValue(QUERY_STRING, "");
    }

    return (
        <div className={clsx("flex flex-col space-y-5 mx-auto w-full h-full transition-all", pdfUrl ? "mt-0" : "mt-[10vh]")}>
            <div className="flex flex-col items-center  space-y-4">
                <span className="text-secondary text-2xl font-bold text-center tracking-wide animate-fadeup select-none">
                    {T('viewCV')}
                </span>
                <form 
                    className="flex items-center justify-center space-x-0 lg:space-x-2 space-y-2 lg:space-y-0 flex-col lg:flex-row w-full"
                    onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name={QUERY_STRING}
                        control={control}
                        rules={{
                            // pattern: {
                            //     value: Utils.urlRegex,
                            //     message: `${T('invalidUrl')}`
                            // }
                        }}
                        render={({ field }) => (
                            <div className="flex flex-col space-y-2 w-full lg:w-2/3">
                                <span className={clsx(
                                        "p-input-icon-left [&_.p-inputtext]:pl-14 [&_::placeholder]:!text-gray-400 animate-faderight w-full",
                                        watch(QUERY_STRING) && " p-input-icon-right"
                                    )}>
                                    <i className="pi pi-search px-3" />
                                    <InputText 
                                        {...field}
                                        autoComplete="off"
                                        placeholder={T('enterCvUrl')}
                                        spellCheck={false}
                                        className="w-full text-[16px] lg:text-[20px] px-5 lg:px-[1.5625rem] py-3 lg:py-[.9375rem] rounded-xl lg:min-w-[500px] min-w-0"/>
                                    {
                                        watch(QUERY_STRING) && 
                                        <i 
                                            onClick={() => handleClear()}
                                            className="pi pi-times px-3 cursor-pointer" />
                                    }
                                </span>
                                {
                                    errors[QUERY_STRING]?.message && 
                                    <span className="text-sm pl-2 text-danger-10 animate-fadedown">
                                        {errors[QUERY_STRING]?.message}
                                    </span>
                                }
                            </div>
                        )}
                        />

                    <div>
                        <Button
                            disabled={!Boolean(watch(QUERY_STRING))}
                            className="rounded-xl animate-fadeleft text-[16px] lg:text-[20px] px-5 lg:px-[1.5625rem] py-3 lg:py-[.9375rem]">
                            {T('view')}
                        </Button>
                    </div>
                </form>
            </div>
            <PdfViewer url={pdfUrl}/>
        </div>
    )
}

export default memo(CurriculumVitae)