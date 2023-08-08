import LangSection from "@/components/LangSection"
import { memo } from "react"
import LogoFull from "./LogoFull"
import HorizontalNavigation from "./navigation/HorizontalNavigation"


const Header = (): JSX.Element => {

    return (
        <header className="pr-5 pl-0 lg:pl-5 pt-3 pb-3 lg:pb-0 z-50 !sticky !top-0 bg-white w-full flex items-center justify-between">
            <div className="flex items-center">
                <div className="order-2 lg:order-1">
                    <LogoFull/>
                </div>
                <div className="order-1 lg:order-2">
                    <HorizontalNavigation/>
                </div>
            </div>
            <LangSection/>
        </header>
    )
}

export default memo(Header)