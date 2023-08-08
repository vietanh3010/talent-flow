import { memo } from "react"


const LogoFull = (): JSX.Element => {

    return (
        <div className="text-gray-2 bg-primary rounded-md px-2 py-0.5 text-xl lg:text-2xl font-mono font-thin whitespace-nowrap cursor-pointer select-none">
            Talent Flow
        </div>
    )
}

export default memo(LogoFull);