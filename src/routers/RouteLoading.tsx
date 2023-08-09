import LinearLoading from "@/components/LinearLoading"
import LogoFull from "@/layouts/LogoFull"
import { memo } from "react"


const RouteLoading = (): JSX.Element => {

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gradient-to-b from-primary/30 to-secondary/30">
            <div className="h-fit w-fit relative flex flex-col space-y-2 justify-center items-center pb-20">
                <LogoFull/>
                <LinearLoading/>
            </div>
        </div>
    )
}

export default memo(RouteLoading)