import { ProfileResponse } from "@/types/response.type"
import clsx from "clsx"
import { Dialog } from "primereact/dialog"
import { memo } from "react"
import CvComments from "./CvComments"

type CvPreviewDialogProps = {
    profile: ProfileResponse | undefined,
    onHide: () => void,
}
const CvPreviewDialog = ({
    profile,
    onHide,
}: CvPreviewDialogProps): JSX.Element => {

    
    return (
        <Dialog 
            header="CV" 
            visible={!!profile?.url} 
            className={clsx("h-[90vh] w-[90vw]")}
            contentClassName="!p-0"
            dismissableMask
            draggable={false}
            onHide={onHide}>
            <div className="h-[calc(90vh-100px)] grid grid-cols-4">
                <div className="w-full h-full col-span-3">
                    {
                        profile?.url && 
                        <embed 
                            src={`${profile.url}#toolbar=0&navpanes=0&scrollbar=0&zoom=95`}
                            className="h-full w-full"
                            type="application/pdf"/>
                    }
                </div>
                <div>
                    {
                        profile?.id && 
                        <CvComments id={profile?.id}/>
                    }
                </div>
            </div>
        </Dialog>
    )
}

export default memo(CvPreviewDialog);