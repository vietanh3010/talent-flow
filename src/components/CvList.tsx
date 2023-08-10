import useCustomTranslation from "@/hooks/useCustomTranslation";
import useCvService from "@/service-hooks/useCv.service";
import { ProfileResponse } from "@/types/response.type";
import useMainStore from "@/zustand/main.slice";
import { useQuery } from "@tanstack/react-query";
import clsx from "clsx";
import { Button } from "primereact/button";
import { Panel, PanelHeaderTemplateOptions } from "primereact/panel";
import { Tag } from "primereact/tag";
import { memo, useState } from "react";
import CvPreviewDialog from "./CvPreviewDialog";

const DETAIL_FIELDS: Array<keyof ProfileResponse> = [
    'tf_summary',
    'total_experience_in_year'
]

const CvList = (): JSX.Element => {
    const {T} = useCustomTranslation();
    const [previewPdfLink, setPreviewPdfLink] = useState<string>("");
    const { getCV } = useCvService();
    const { query } = useMainStore();
    const { filterStrings } = useMainStore();

    const { data } = useQuery({
        queryFn: () => getCV([query, ...filterStrings]),
        queryKey: ["GET_CV", query, filterStrings],
    })


    const handleViewCV = (data: ProfileResponse) => {
        setPreviewPdfLink(data.url)
    }

    // const handleDownloadCV = (data: ProfileResponse) => {
    //     console.log('download', data)
    // }

    const template = (options: PanelHeaderTemplateOptions, data: ProfileResponse) => {
    
        return (
            <div 
                className={clsx("cursor-pointer animate-fadeup",
                    options.className,
                    options.collapsed && "rounded-lg transition-all delay-300"
                )} 
                onClick={options.onTogglerClick}>
                <div className="w-full flex justify-between">
                    <div className="flex items-center space-x-5">
                        <div className="flex flex-col items-start">
                            <div className="flex items-center space-x-2">
                                <span className="text-primary font-bold text-base mr-2 whitespace-nowrap">
                                    {data.name}
                                </span>
                                <div className="flex justify-end items-center space-x-1">
                                    <span className="text-secondary text-base font-medium">
                                        {/* {data.score} */} 4.2
                                    </span>
                                    <i className="pi pi-star-fill pb-0.5 text-sm text-warning-7"></i>
                                </div>
                            </div>
                            <span className="text-secondary/80 font-medium text-sm">{data.email}</span>
                        </div>

                    </div>

                    <div className="flex items-center space-x-5">
                        <div className="flex flex-col space-y-1 min-w-[140px]">
                            {
                                data.phone && 
                                <div className="flex items-center space-x-2">
                                    <i className="pi pi-phone pb-0.5"></i>
                                    <span className="text-primary text-sm font-medium">{data.phone}</span>
                                </div>
                            }
                            {
                                data.city && 
                                <div className="flex items-center space-x-2">
                                    <i className="pi pi-map-marker pb-0.5"></i>
                                    <span className="text-primary text-sm font-medium">{data.city}</span>
                                </div>
                            }
                            
                        </div>

                        <div className="flex items-center space-x-2">
                            <Button
                                rounded
                                outlined
                                severity="secondary"
                                tooltip={T('viewCV')}
                                tooltipOptions={{
                                    position: "left"
                                }}
                                icon="pi pi-file-pdf"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleViewCV(data);
                                }}
                                />
                            {/* <Button
                                rounded
                                outlined
                                severity="secondary"
                                tooltip={T('downloadCV')}
                                tooltipOptions={{
                                    position: "left"
                                }}
                                icon="pi pi-cloud-download"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDownloadCV(data);
                                }}
                                /> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <div className="w-full h-full rounded-md pt-5">
            <span className="text-primary font-medium text-2xl">
                {`${data?.length ?? 0} ${T('talentsFoundForKeyWord')}`} 
                <span className="text-blue-500 px-1">{query}</span>
            </span>
            <div className="grid grid-cols-1 gap-2">
            {
                data?.map((data, i) => 
                    <Panel
                        key={i}
                        headerTemplate={(opt) => template(opt, data)}
                        collapsed={true}
                        toggleable>
                        <div className="flex flex-col space-y-4 ">
                            <div className="flex flex-col space-y-3">
                                {
                                    DETAIL_FIELDS.map(field => 
                                        <div
                                            className="flex flex-col space-y-1"
                                            key={field}>
                                            <span className="text-primary font-medium">
                                                {T(field)}
                                            </span>
                                            <span className="text-gray-9 text-sm">
                                                {data[field] as string}
                                            </span>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="flex flex-wrap">
                                {
                                    data.skill_details.map(skillItem => 
                                        <Tag
                                            className="bg-slate-200 text-primary font-medium capitalize mr-1 mb-1"
                                            key={skillItem.name}>
                                            {skillItem.name}
                                        </Tag>
                                    )
                                }
                            </div>
                        </div>
                    </Panel>
                )
            }
            </div>
            <CvPreviewDialog 
                link={previewPdfLink}
                onHide={() => setPreviewPdfLink("")}/>
        </div>
    )
}

export default memo(CvList)