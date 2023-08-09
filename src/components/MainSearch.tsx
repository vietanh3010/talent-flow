import useCustomTranslation from "@/hooks/useCustomTranslation"
import useMainStore from "@/zustand/main.slice"
import clsx from "clsx"
import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { memo, useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { useSearchParams } from "react-router-dom"

const QUERY_STRING = "query"
type SearchForm = {
    query: string
}

const MainSearch = (): JSX.Element => {
    const {T} = useCustomTranslation();
    const { query, setQuery } = useMainStore();
    const { handleSubmit, control, watch, setValue } = useForm<SearchForm>();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        setValue(QUERY_STRING, query);
        if(query) {
            searchParams.set(QUERY_STRING, query);
        }
        else {
            searchParams.delete(QUERY_STRING);
        }
        setSearchParams(searchParams);
    }, [query])

    const onSubmit = (formValues: SearchForm) => {
        const { query } = formValues;
        setQuery(query);
    }

    const handleClear = () => {
        // setQuery("");
        setValue('query', "")
    }

    return (
        <div className="flex flex-col items-center space-y-4">
            <span className="text-secondary text-3xl font-bold text-center tracking-wide animate-fadeup select-none">
                {T('findTalent')}
            </span>
            <form 
                className="flex items-center space-x-0 lg:space-x-2 space-y-2 lg:space-y-0 flex-col lg:flex-row"
                onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name={QUERY_STRING}
                    control={control}
                    render={({ field }) => (
                        <span className={clsx(
                                "p-input-icon-left [&_.p-inputtext]:pl-14 [&_::placeholder]:!text-gray-400 animate-faderight",
                                watch('query') && " p-input-icon-right"
                            )}>
                            <i className="pi pi-search px-3" />
                            <InputText 
                                {...field}
                                autoComplete="off"
                                placeholder={T('enterKeywordOrSkill')}
                                spellCheck={false}
                                className="text-[16px] lg:text-[20px] px-5 lg:px-[1.5625rem] py-3 lg:py-[.9375rem] rounded-xl border-none shadow lg:min-w-[500px] min-w-0"/>
                            {
                                watch(QUERY_STRING) && 
                                <i 
                                    onClick={() => handleClear()}
                                    className="pi pi-times px-3 cursor-pointer" />
                            }
                        </span>
                    )}
                    />

                <div>
                    <Button
                        disabled={!Boolean(watch(QUERY_STRING))}
                        className="rounded-xl animate-fadeleft text-[16px] lg:text-[20px] px-5 lg:px-[1.5625rem] py-3 lg:py-[.9375rem]">
                        {T('search')}
                    </Button>
                    
                </div>
            </form>
        </div>  
    )
}

export default memo(MainSearch)