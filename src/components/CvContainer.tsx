import { memo } from "react";
import CvList from "./CvList";
import FilterSection from "./FilterSection";

const CvContainer = (): JSX.Element => {
    
    return (
        <div className="grid grid-cols-4 gap-5">
            <FilterSection/>
            <div className="col-span-3">
                <CvList/>
            </div>
        </div>
    )
}

export default memo(CvContainer)