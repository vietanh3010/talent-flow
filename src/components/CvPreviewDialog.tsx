import clsx from "clsx"
import { Dialog } from "primereact/dialog"
import { memo } from "react"

type CvPreviewDialogProps = {
    link: string,
    onHide: () => void,
}
const CvPreviewDialog = ({
    link,
    onHide,
}: CvPreviewDialogProps): JSX.Element => {


    return (
        <Dialog 
            header="CV" 
            visible={!!link} 
            className={clsx("h-[90vh] w-[90vw] lg:w-[70vw]")}
            contentClassName="!p-0"
            dismissableMask
            draggable={false}
            onHide={onHide}>
            <div className="h-[calc(90vh-100px)]">
                {
                    link && 
                    <embed 
                        src={`${link}#toolbar=0&navpanes=0&scrollbar=0&zoom=95`}
                        className="h-full w-full"
                        type="application/pdf"/>
                }
            </div>
        </Dialog>
    )
}

export default memo(CvPreviewDialog)