import { ProgressBar } from "primereact/progressbar";
import { useState, useEffect, memo } from "react";


const LinearLoading = (): JSX.Element =>  {
    const [progress, setProgress] = useState<number>(0);
  
   useEffect(() => {
        const timer = window.setInterval(() => {
            setProgress((oldProgress) => {
                const remain = 100 - oldProgress;
                const amount = remain / Math.max(remain/2, 30);
                return Math.min(oldProgress + amount, 100);
            });
        }, 200);
  
        return () => {
            clearInterval(timer);
        };
    }, []);
  
    return (
        <div className="w-full">
            <ProgressBar 
                value={progress}
                className="!h-2"
                displayValueTemplate={() => <></>}/>
        </div>
    );
  }

export default memo(LinearLoading)