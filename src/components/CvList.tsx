import useCustomTranslation from "@/hooks/useCustomTranslation";
import clsx from "clsx";
import { Button } from "primereact/button";
import { Panel, PanelHeaderTemplateOptions } from "primereact/panel";
import { Tag } from "primereact/tag";
import { memo, useState } from "react";
import CvPreviewDialog from "./CvPreviewDialog";

type ProfileResponse = {
    name: string,
    city: string,
    self_summary: string,
    objective: string,
    phone: string,
    email: string,
    skills: string[],
    total_experience_in_year: string,
    url: string,
}
const DUMMY_DATA: ProfileResponse = {
    name: "Nguyễn Hải Đăng",
    // score: "4.2",
    city: "Ha Noi",
    self_summary: "Phát triển trở thành leader sau 3 - 4 năm, mục tiêu dài hạn trở thành PM",
    objective: "Phát triển trở thành leader sau 3 - 4 năm, mục tiêu dài hạn trở thành PM",
    phone: "+84397485801",
    email: "nguyenhaidark25072001@gmail.com",
    skills: ['backend', 'frontend', 'javascript', 'softskills', 'python', 'fullstack', 'good looking'],
    total_experience_in_year: "0.4",
    url: "https://s3-sgn09.fptcloud.com/talent-flow/Nguy%E1%BB%85n%20H%E1%BA%A3i%20%C4%90%C4%83ng%20-%20FE.pdf",
}

const DETAIL_FIELDS: Array<keyof ProfileResponse> = [
    'self_summary',
    'total_experience_in_year'
]

const CvList = (): JSX.Element => {
    const {T} = useCustomTranslation();
    const [previewPdfLink, setPreviewPdfLink] = useState<string>("");

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

                        <div className="flex flex-wrap">
                            {
                                data.skills.map(skill => 
                                    <Tag
                                        className="bg-slate-200 text-primary font-medium capitalize mr-1 mb-1"
                                        key={skill}>
                                        {skill}
                                    </Tag>
                                )
                            }
                        </div>
                    </div>

                    <div className="flex items-center space-x-5">
                        <div className="flex flex-col space-y-1">
                            <div className="flex items-center space-x-2">
                                <i className="pi pi-phone pb-0.5"></i>
                                <span className="text-primary text-sm font-medium">{data.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <i className="pi pi-map-marker pb-0.5"></i>
                                <span className="text-primary text-sm font-medium">{data.city}</span>
                            </div>
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
                {`50 ${T('talentsFound')}`}
            </span>
            <div className="grid grid-cols-1 gap-2">
            {
                Array<ProfileResponse>(50).fill(DUMMY_DATA).map((data, i) => 
                    <Panel
                        key={i}
                        headerTemplate={(opt) => template(opt, data)}
                        collapsed={true}
                        toggleable>
                        <div className="flex flex-col space-y-4 ">
                            <div className="flex flex-col space-y-1">
                                {
                                    DETAIL_FIELDS.map(field => 
                                        <div
                                            className="flex flex-col"
                                            key={field}>
                                            <span className="text-primary font-medium">{field}</span>
                                            <span className="text-gray-9 text-sm">{data[field]}</span>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="flex flex-wrap">
                                {
                                    data.skills.map(skill => 
                                        <Tag
                                            className="bg-slate-200 text-primary font-medium capitalize mr-1 mb-1"
                                            key={skill}>
                                            {skill}
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