import useCustomTranslation from "@/hooks/useCustomTranslation";
import { Menubar } from "primereact/menubar";
import { memo } from "react";


const HorizontalNavigation = (): JSX.Element => {
    const {T} = useCustomTranslation();

    const items = [
        {
            label: T('findTalent'),
            icon: 'pi pi-fw pi-home',
            command: () => console.log('home')
        },
        {
            label: T('hiring'),
            icon: 'pi pi-fw pi-user-plus'
        },
        {
            label: T('calendar'),
            icon: 'pi pi-fw pi-calendar'
        },
    ]
    return (
        <div className="animate-faderight">
            <Menubar 
                model={items}
                pt={{
                    root: {
                        className: "bg-transparent border-none"
                    },
                    menu: {
                        className: "min-w-[240px]"
                    }
                }}/>
        </div>
    )
}

export default memo(HorizontalNavigation)