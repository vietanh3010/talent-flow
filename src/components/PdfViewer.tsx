import { memo } from "react";
// try {
//     pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
// }
// catch(e) {
//     console.warn(e)
// }

type PdfViewerProps = {
    url: string,
}
const PdfViewer = ({
    url
}: PdfViewerProps): JSX.Element => {
    // const [numPages, setNumPages] = useState<number>(0);

    // const onPdfLoadSuccess = (pdfObject: PDFDocumentProxy) => {
    //     if(!pdfObject) return;
    //     setNumPages(pdfObject.numPages)
    // }
    

    return (
        <div className="w-full h-full relative">
            {
                url && 
                <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`${url}#toolbar=0&navpanes=0&scrollbar=0&zoom=95`}>
                </iframe>
            }
            {/* <Document
                file={url}
                options={{
                    disableAutoFetch: true,
                    disableStream: true
                }}
                className={"flex flex-col space-y-4 items-center"}
                onLoadSuccess={onPdfLoadSuccess}
                loading={<></>}
                noData={<></>}
                onLoadError={console.warn}>
                {
                    Array(numPages)
                        .fill(0)
                        .map((_,i) => 
                        <Page
                            className="h-fit w-fit shadow-lg"
                            renderAnnotationLayer={false}
                            renderTextLayer={false}
                            pageNumber={i+1}
                        />
                    )
                }
            </Document> */}
        </div>
    )
}

export default memo(PdfViewer)