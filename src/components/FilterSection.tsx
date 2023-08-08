import useCustomTranslation from "@/hooks/useCustomTranslation";
import { Checkbox } from "primereact/checkbox";
import { memo } from "react";
import { Controller, useForm } from "react-hook-form";

const FILTER_DEFINE = {
    "skills": [
        "backend",
        "frontend",
        "javascript",
        "python",
    ],
    "experience": [
        "senior",
        "middle",
        "junior",
        "fresher",
        "intern"
    ],
    "location": [
        "hanoi",
        "hochiminh"
    ]
}

const FilterSection = (): JSX.Element => {
    const {T} = useCustomTranslation();
    const { control } = useForm();

    return (
        <div className="p-5 flex flex-col space-y-2 border border-solid border-gray-4 rounded-lg !sticky !top-20">
            <span className="pb-2 text-primary font-medium text-2xl">
                {T('filters')}
            </span>
            
            <div>
                <form className="flex flex-col space-y-4 animate-faderight">
                    {
                        Object.entries(FILTER_DEFINE).map(([k,v]) => 
                            <div 
                                key={k} 
                                className="flex flex-col space-y-3">
                                <span className="text-primary font-medium text-base">
                                    {k}
                                </span>
                                
                                <div className="flex flex-col space-y-2 ml-2">
                                    {
                                        v.map(item => 
                                            <Controller
                                                control={control}
                                                key={item}
                                                name={item}
                                                render={({ field }) => 
                                                    <div className="flex align-items-center">
                                                        <Checkbox

                                                            inputId={`${k}-${item}`} 
                                                            {...field}
                                                            checked={field.value}
                                                        />
                                                        <label htmlFor={`${k}-${item}`} className="ml-2 text-secondary text-sm font-medium">
                                                            {item}
                                                        </label>
                                                    </div>
                                                }
                                            />
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </form>
            </div>
        </div>
    )
}

export default memo(FilterSection);