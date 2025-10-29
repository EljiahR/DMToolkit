import CharacterClass from "../components/CreateCharacterPage/CharacterClass";
import CharacterBackground from "../components/CreateCharacterPage/CharacterBackground";
import CharacterSpecies from "../components/CreateCharacterPage/CharacterSpecies";
import CharacterAlignment from "../components/CreateCharacterPage/CharacterAlignment";
import CharacterDescription from "../components/CreateCharacterPage/CharacterDescription";
import CharacterAbilityScores from "../components/CreateCharacterPage/CharacterAbilityScores";
import CreateCharacterNavigation from "../components/CreateCharacterPage/CreateCharacterNavigation";
import { useAppSelector } from "../lib/redux/hooks";
import { selectCharacterCreationIndex } from "../lib/redux/uiSlice";

const StartSection = ({className = ""}: {className?: string}) => {
    return (
        <div className={className}>
            <h2>Create a new Player Character</h2>
            <p>This is filler text until I decide on what to actually put here.</p>
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

    return (
        <div id="create-player-character-page" className="h-full flex flex-col">
            {<ActiveSection className="flex flex-col text-center align-middle justify-between flex-grow" />}
            <CreateCharacterNavigation className="w-full row-start-2 " />
        </div>
    )
};

export default CreatePlayerCharacterPage;
