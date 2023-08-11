import useCustomTranslation from "@/hooks/useCustomTranslation"
import { ProfileResponse } from "@/types/response.type"
import { Dialog } from "primereact/dialog"
import { memo, useState } from "react"

type CvViewMoreProps = {
    data: ProfileResponse,
}

const CvViewMore = ({
    data
}: CvViewMoreProps) => {
    const {T} = useCustomTranslation();
    const [visible, setVisible] = useState<boolean>(false);
    
    return (
        <>
            <div
                onClick={() => setVisible(true)}
                className="w-full flex justify-start space-x-1 text-blue-5 hover:text-blue-7 cursor-pointer">
                <span className="text-sm">{T("viewMore")}</span>
                <span className="text-sm">
                    <i className="pi pi-chevron-down text-sm"></i>
                </span>
            </div>
            <Dialog
                header={T('data')}
                visible={visible} 
                className="w-[90vw] lg:w-[50vw]"
                draggable={false}
                dismissableMask
                onHide={() => setVisible(false)}>
                {
                    Object.entries(data).map(([k,v]) => 
                        <div key={k} className="grid grid-cols-5 border border-gray-4 border-solid p-3">
                            <div className="col-span-2 text-primary text-sm font-medium">
                                {k}
                            </div>
                            <div className="col-span-3 text-gray-9 text-sm" style={{wordBreak: "break-word"}}>
                                <span className="">{v || "-"}</span>
                            </div>
                        </div>
                    )
                }
            </Dialog>
        </>
    )
}

export default memo(CvViewMore)