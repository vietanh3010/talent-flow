import CvContainer from "@/components/CvContainer"
import MainSearch from "@/components/MainSearch"
import SkillSuggestions from "@/components/SkillSuggestions"
import Path from "@/utils/Path"
import { memo } from "react"


const Home = (): JSX.Element => {

    return (
        <div className="w-full h-full flex flex-col space-y-5 ">
            <div className="p-5 min-h-[500px] rounded-none lg:rounded-md bg-gradient-to-br from-primary/30 to-gray-2 relative overflow-hidden border-none border lg:border-solid border-gray-4 flex items-center justify-center">
                <img 
                    className="absolute grayscale inset-0 z-0 w-full invisible lg:visible select-none"
                    src={Path.get("../../images/bg.jpg")}/>
                <div className="z-10 absolute inset-0 bg-slate-300/20"></div>
                <div  className="flex flex-col space-y-8 items-center justify-center z-20 relative">
                    <MainSearch/>
                    <SkillSuggestions/>
                </div>
            </div>
            <div className="grow w-full pb-5">
                <CvContainer/>
            </div>
        </div>
    )
}

export default memo(Home)