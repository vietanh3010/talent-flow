import useMainStore from "@/zustand/main.slice";
import { memo } from "react"
import { Link, useSearchParams } from "react-router-dom";


const LogoFull = (): JSX.Element => {
    const [searchParams, setSearchParams] = useSearchParams();
    const { setQuery } = useMainStore();
    
    const handleClick = () => {
        setQuery("")
        Array.from(searchParams.keys()).forEach(key => {
            searchParams.delete(key)
        })
        setSearchParams(searchParams);
    }

    return (
        <Link
            onClick={handleClick}
            to="/home"
            replace
            className="no-underline">
            <div className="text-gray-2 bg-primary rounded-md px-2 py-0.5 text-xl lg:text-2xl font-mono font-thin whitespace-nowrap cursor-pointer select-none ">
                Talent Flow
            </div>
        </Link>
    )
}

export default memo(LogoFull);