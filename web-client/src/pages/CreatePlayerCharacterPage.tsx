import CharacterClass from "../components/CreateCharacterPage/CharacterClass";
import CharacterBackground from "../components/CreateCharacterPage/CharacterBackground";
import CharacterSpecies from "../components/CreateCharacterPage/CharacterSpecies";
import CharacterAlignment from "../components/CreateCharacterPage/CharacterAlignment";
import CharacterDescription from "../components/CreateCharacterPage/CharacterDescription";
import CharacterAbilityScores from "../components/CreateCharacterPage/CharacterAbilityScores";
import CreateCharacterNavigation from "../components/CreateCharacterPage/CreateCharacterNavigation";
import { useAppSelector } from "../lib/redux/hooks";
import { selectCharacterCreationIndex } from "../lib/redux/uiSlice";

const StartSection = () => {
    return (
        <div>
            <h2>Create a new Player Character</h2>
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

export default function() {
    // Available sections: class, background, species, scores, alignment, description
    const sectionIndex = useAppSelector(selectCharacterCreationIndex)
    const ActiveSection = sectionIndex < 7 ? components[sectionIndex] : EmptySection;

    return (
        <div>
            {<ActiveSection />}
            <CreateCharacterNavigation className="w-screen" />
        </div>
    )
};

