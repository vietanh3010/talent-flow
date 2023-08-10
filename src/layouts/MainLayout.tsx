import { memo } from "react";
import { useOutlet } from "react-router-dom";
import Header from "./Header";

const MainLayout = (): JSX.Element => {
    const outlet = useOutlet();

    return (
        <>
            {/* <GradientBackground/> */}
            <section className="z-10 h-full w-full flex flex-col">
                <Header/>
                <div className="w-full grow p-0 lg:p-5">
                    {outlet}
                </div>
            </section>
        </>
    )
}

export default memo(MainLayout)