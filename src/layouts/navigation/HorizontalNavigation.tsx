import useCustomTranslation from "@/hooks/useCustomTranslation";
import clsx from "clsx";
import { Menubar } from "primereact/menubar";
import { MenuItem, MenuItemOptions } from "primereact/menuitem";
import { memo } from "react";
import { Link } from "react-router-dom";


const HorizontalNavigation = (): JSX.Element => {
    const {T} = useCustomTranslation();

    const renderLink = (item: MenuItem, opt: MenuItemOptions) => {

        return (
            <Link to={item.data ?? "#"} className={opt.className}>
                <i className={clsx(item.icon, opt.iconClassName)}></i>
                <span className={opt.labelClassName}>
                    {item.label}
                </span>
            </Link>
        )
    }

    const items: MenuItem[] = [
        {
            label: T('findTalent'),
            icon: 'pi pi-fw pi-search',
            template: renderLink,
            data: "/home",
        },
        {
            label: T('hiring'),
            icon: 'pi pi-fw pi-user-plus',
            template: renderLink,
            data: "/home",
        },
        {
            label: T('cv'),
            icon: 'pi pi-fw pi-file',
            template: renderLink,
            data: "/cv",
        },
        {
            label: T('calendar'),
            icon: 'pi pi-fw pi-calendar',
            template: renderLink,
            data: "/home",
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