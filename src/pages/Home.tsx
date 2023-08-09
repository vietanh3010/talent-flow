import CvContainer from "@/components/CvContainer"
import MainSearch from "@/components/MainSearch"
import SkillSuggestions from "@/components/SkillSuggestions"
import Path from "@/utils/Path"
import useMainStore from "@/zustand/main.slice"
import clsx from "clsx"
import { memo } from "react"


const Home = (): JSX.Element => {
    const { query } = useMainStore();

    return (
        <div className="w-full h-full flex flex-col space-y-5">
            <div 
                className={clsx("p-5 rounded-none lg:rounded-md bg-gradient-to-br from-primary/30 to-gray-2 relative overflow-hidden border-none border lg:border-solid border-gray-4 flex items-center justify-center transition-all",
                    // Boolean(query) ? "grow-0" : "grow"
                    !Boolean(query) ? "h-[calc(100vh-108px)]" : "h-[300px]"
                )}>
                <img 
                    className="absolute grayscale inset-0 z-0 w-full h-full invisible lg:visible select-none object-cover"
                    src={Path.get("../../images/bg.jpg")}/>
                <div className="z-10 absolute inset-0 bg-slate-300/20"></div>
                <div  className="flex flex-col space-y-8 items-center justify-center z-20 relative">
                    <MainSearch/>
                    <SkillSuggestions/>
                </div>
            </div>
            {
                Boolean(query) &&
                <div className={clsx("grow w-full pb-5")}>
                    <CvContainer/>
                </div>
            }
        </div>
    )
}

export default memo(Home)