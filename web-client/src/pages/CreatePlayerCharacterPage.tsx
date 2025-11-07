import CharacterClass from "../components/CreateCharacterPage/CharacterClass";
import CharacterBackground from "../components/CreateCharacterPage/CharacterBackground";
import CharacterSpecies from "../components/CreateCharacterPage/CharacterSpecies";
import CharacterAlignment from "../components/CreateCharacterPage/CharacterAlignment";
import CharacterDescription from "../components/CreateCharacterPage/CharacterDescription";
import CharacterAbilityScores from "../components/CreateCharacterPage/CharacterAbilityScores";
import CreateCharacterNavigation from "../components/CreateCharacterPage/CreateCharacterNavigation";
import { useAppDispatch, useAppSelector } from "../lib/redux/hooks";
import { selectCharacterCreationIndex } from "../lib/redux/uiSlice";
import { useLayoutEffect } from "react";
import { setNewCharacter } from "../lib/redux/selectedCharacterSlice";
import { selectAllBackgroundDefinitions, selectAllCharacterClassDefinitions, selectAllScoreDefinitions, selectAllSpeciesDefinitions } from "../lib/redux/dmToolsSlice";

const StartSection = ({className = ""}: {className?: string}) => {
    return (
        <div id="start-section" className={className}>
            <div className="section-header">
                <h2>Create a new Player Character</h2>
                <p>This is filler text until I decide on what to actually put here.</p>
            </div> 
        </div>
    )
}

const EmptySection = () => <></>;

const components = [
    StartSection,
    CharacterClass,
    CharacterBackground,
    CharacterSpecies,
    CharacterAbilityScores,
    CharacterAlignment,
    CharacterDescription,
]

const CreatePlayerCharacterPage = () => {
    // Available sections: class, background, species, scores, alignment, description
    const sectionIndex = useAppSelector(selectCharacterCreationIndex)
    const ActiveSection = sectionIndex < 7 ? components[sectionIndex] : EmptySection;
    const scoreDefinitions = useAppSelector(selectAllScoreDefinitions);
    const backgroundDefinitions = useAppSelector(selectAllBackgroundDefinitions);
    const characterClassDefinitions = useAppSelector(selectAllCharacterClassDefinitions)
    const speciesDefinitions = useAppSelector(selectAllSpeciesDefinitions);
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        dispatch(setNewCharacter({ defaultScores: scoreDefinitions, defaultBackground: backgroundDefinitions[0], defaultClass: characterClassDefinitions[0], defaultSpecies: speciesDefinitions[0] }));
    }, []);

    return (
        <div id="create-player-character-page" className="h-full flex flex-col gap-1">
            {<ActiveSection className="flex flex-col text-center items-center justify-between flex-grow gap-2" />}
            <CreateCharacterNavigation className="w-full row-start-2 " />
        </div>
    )
};

export default CreatePlayerCharacterPage;
