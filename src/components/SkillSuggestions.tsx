import useCustomTranslation from "@/hooks/useCustomTranslation";
import useMainStore from "@/zustand/main.slice";
import { Chip } from "primereact/chip";
import { memo } from "react";

const SKILLS = ['frontend', 'backend', 'javascript', 'python'];

const SkillSuggestions = (): JSX.Element => {
    const {T} = useCustomTranslation();
    const { setQuery } = useMainStore();

    const onSelectSuggestion = (skill: string) => {
        setQuery(skill);
    }

    return (
        <div className="flex flex-col items-center space-y-2 px-5 justify-center">
            <span>{T('suggestionsForYou')}</span>
            <div className="flex flex-wrap">
                {
                    SKILLS.map(skill => 
                        <Chip
                            key={skill}
                            onClick={() => onSelectSuggestion(skill)}
                            className="cursor-pointer hover:bg-gray-5 mr-1 mb-1"
                            label={skill}/>
                    )
                }
            </div>
        </div>
    )
}

export default memo(SkillSuggestions)