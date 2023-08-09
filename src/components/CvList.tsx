import useCustomTranslation from "@/hooks/useCustomTranslation";
import Path from "@/utils/Path";
import clsx from "clsx";
import { Button } from "primereact/button";
import { Panel, PanelHeaderTemplateOptions } from "primereact/panel";
import { Tag } from "primereact/tag";
import { memo, useState } from "react";
import CvPreviewDialog from "./CvPreviewDialog";

type DummyDataType = {
    full_name: string,
    score: string,
    skills: string[],
    location: string,
    title: string,
    contact: string,
    description: string,
    cv_link: string,
}
const DUMMY_DATA: DummyDataType = {
    full_name: "John Doe",
    score: "4.2",
    skills: ['backend', 'frontend', 'javascript', 'softskills', 'python', 'fullstack', 'good looking'],
    location: "Hanoi",
    title: "Fullstack developer",
    contact: "0123456789",
    description: "Yêu tổ quốc yêu đồng bào, học tập tốt lao động tốt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    cv_link: Path.get('../../pdf/cv_test.pdf')
    
}

const CvList = (): JSX.Element => {
    const {T} = useCustomTranslation();
    const [previewPdfLink, setPreviewPdfLink] = useState<string>("");

    const handleViewCV = (data: DummyDataType) => {
        setPreviewPdfLink(data.cv_link)
    }

    const handleDownloadCV = (data: DummyDataType) => {
        console.log('download', data)
    }

    const template = (options: PanelHeaderTemplateOptions, data: DummyDataType) => {
    
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
                                    {data.full_name}
                                </span>
                                <div className="flex justify-end items-center space-x-1">
                                    <span className="text-secondary text-base font-medium">
                                        {data.score}
                                    </span>
                                    <i className="pi pi-star-fill pb-0.5 text-sm text-warning-7"></i>
                                </div>
                            </div>
                            <span className="text-secondary/80 font-medium text-sm">{data.title}</span>
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
                                <span className="text-primary text-sm font-medium">{data.contact}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <i className="pi pi-map-marker pb-0.5"></i>
                                <span className="text-primary text-sm font-medium">{data.location}</span>
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
                            <Button
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
                                />
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
                Array<DummyDataType>(50).fill(DUMMY_DATA).map((data, i) => 
                    <Panel
                        key={i}
                        headerTemplate={(opt) => template(opt, data)}
                        collapsed={true}
                        toggleable>
                        <div>
                            <span>{data.description}</span>
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