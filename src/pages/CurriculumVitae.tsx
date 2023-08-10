import CvFeedback from "@/components/CvFeedback";
import PdfViewer from "@/components/PdfViewer";
import useCustomTranslation from "@/hooks/useCustomTranslation";
import useCvService from "@/service-hooks/useCv.service";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { memo, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const QUERY_STRING = "id"

const CurriculumVitae = (): JSX.Element => {
    const {T} = useCustomTranslation();
    const [ searchParams ] = useSearchParams();
    const { getProfileById } = useCvService();
    const [profileId, setProfileId] = useState<string>("");

    const { data } = useQuery({
        queryFn: () => getProfileById(profileId),
        enabled: Boolean(profileId),
        queryKey: ["GET_PROFILE_BY_ID", profileId]
    })

    useEffect(() => {
        const id = searchParams.get(QUERY_STRING) ?? "";
        setProfileId(id);
    }, [searchParams])

    return (
        <div className="h-full w-full px-3 lg:px-0">
            {
                data?.url ? 
                <div className="w-full h-full grid grid-cols-1 lg:grid-cols-3 gap-x-0 lg:gap-x-5 gap-y-5 lg:gap-y-0">
                    <div className={clsx("col-span-2")}>
                        <PdfViewer url={data?.url}/>
                    </div>
                    <CvFeedback profile={data}/>
                </div>
                :
                <div className="w-full h-full flex flex-col space-y-2 justify-center items-center p-5 border border-gray-4 border-solid rounded-md bg-gray-2 text-secondary">
                    <i className="pi pi-inbox text-[60px]"></i>
                    <span>{T('noData')}</span>
                </div>
            }
        </div>
    )


    // const [searchParams, setSearchParams] = useSearchParams();
    // const { handleSubmit, control, watch, setValue, formState: {errors} } = useForm<CvForm>();
    // const [pdfUrl, setPdfUrl] = useState<string>("");
    // const [canFeedback, setCanFeedback] = useState<boolean>(false);
    // useEffect(() => {
    //     const url = searchParams.get(QUERY_STRING) ?? "";
    //     if(!url) return;
    //     setValue("url", url);

    //     const timeout = window.setTimeout(() => {
    //         onSubmit({ url })
    //     }, 350)

    //     return () => {
    //         window.clearTimeout(timeout)
    //     }
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [searchParams, setValue])

    // useEffect(() => {
    //     const feedbackQuery = searchParams.get(QUERY_FEEDBACK) ?? "";
    //     setCanFeedback(feedbackQuery === "1");
    // }, [searchParams])
    

    // const onSubmit = (formValues: CvForm) => {
    //     const { url } = formValues;
    //     searchParams.set(QUERY_STRING, url);
    //     setSearchParams(searchParams);
    //     setPdfUrl(url);
    // }

    // const handleClear = () => {
    //     setValue(QUERY_STRING, "");
    // }

    // return (
    //     <div className={clsx("flex flex-col space-y-5 mx-auto w-full h-full transition-all", pdfUrl ? "mt-0" : "mt-[10vh]")}>
    //         <div className="flex flex-col items-center  space-y-4">
    //             <span className="text-secondary text-2xl font-bold text-center tracking-wide animate-fadeup select-none">
    //                 {T('viewCV')}
    //             </span>
    //             <form 
    //                 className="flex flex-col items-center justify-center space-x-0 lg:space-x-2 space-y-2 lg:space-y-0 lg:flex-row w-full"
    //                 onSubmit={handleSubmit(onSubmit)}>
    //                 <Controller
    //                     name={QUERY_STRING}
    //                     control={control}
    //                     rules={{
    //                         // pattern: {
    //                         //     value: Utils.urlRegex,
    //                         //     message: `${T('invalidUrl')}`
    //                         // }
    //                     }}
    //                     render={({ field }) => (
    //                         <div className="flex flex-col space-y-2 w-full lg:w-2/3">
    //                             <span className={clsx(
    //                                     "p-input-icon-left [&_.p-inputtext]:pl-14 [&_::placeholder]:!text-gray-400 animate-faderight w-full",
    //                                     watch(QUERY_STRING) && " p-input-icon-right"
    //                                 )}>
    //                                 <i className="pi pi-search px-3" />
    //                                 <InputText 
    //                                     {...field}
    //                                     autoComplete="off"
    //                                     placeholder={T('enterCvUrl')}
    //                                     spellCheck={false}
    //                                     className="w-full text-[16px] lg:text-[20px] px-5 lg:px-[1.5625rem] py-3 lg:py-[.9375rem] rounded-xl lg:min-w-[500px] min-w-0"/>
    //                                 {
    //                                     watch(QUERY_STRING) && 
    //                                     <i 
    //                                         onClick={() => handleClear()}
    //                                         className="pi pi-times px-3 cursor-pointer" />
    //                                 }
    //                             </span>
    //                             {
    //                                 errors[QUERY_STRING]?.message && 
    //                                 <span className="text-sm pl-2 text-danger-10 animate-fadedown">
    //                                     {errors[QUERY_STRING]?.message}
    //                                 </span>
    //                             }
    //                         </div>
    //                     )}
    //                     />

    //                 <div>
    //                     <Button
    //                         disabled={!Boolean(watch(QUERY_STRING))}
    //                         className="rounded-xl animate-fadeleft text-[16px] lg:text-[20px] px-5 lg:px-[1.5625rem] py-3 lg:py-[.9375rem]">
    //                         {T('view')}
    //                     </Button>
    //                 </div>
    //             </form>
    //         </div>

    //         <div className="w-full h-full grid grid-cols-3 gap-5">
    //             <div className={clsx(canFeedback ? "col-span-2" : "col-span-3")}>
    //                 <PdfViewer url={pdfUrl}/>
    //             </div>
    //             { 
    //                 canFeedback && 
    //                 <CvFeedback/>
    //             }
    //         </div>
    //     </div>
    // )
}

export default memo(CurriculumVitae)