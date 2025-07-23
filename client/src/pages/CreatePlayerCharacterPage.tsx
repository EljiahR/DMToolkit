import { useState } from "react";
import CharacterClass from "../components/CreateCharacterPage/CharacterClass";
import CharacterBackground from "../components/CreateCharacterPage/CharacterBackground";
import CharacterSpecies from "../components/CreateCharacterPage/CharacterSpecies";
import CharacterAlignment from "../components/CreateCharacterPage/CharacterAlignment";
import CharacterDescription from "../components/CreateCharacterPage/CharacterDescription";
import CharacterFinalization from "../components/CreateCharacterPage/CharacterFinalization";
import CharacterAbilityScores from "../components/CreateCharacterPage/CharacterAbilityScores";

export default function() {
    // Available sections: class, background, species, scores, alignment, description, summary
    const navText = ["Start", "Classes", "Backgrounds", "Species", "Ability Scores", "Alignments", "Descriptions", "Summary"]
    const [section, setSection] = useState(0);
    return (
        <div>
            {section == 1 ? 
                <CharacterClass /> :
            section == 2 ?
                <CharacterBackground /> :
            section == 3 ? 
                <CharacterSpecies /> :
            section == 4 ? 
                <CharacterAbilityScores /> :
            section == 5 ?
                <CharacterAlignment /> :
            section == 6 ?
                <CharacterDescription /> :
            section == 7 ? 
                <CharacterFinalization /> :
                <StartSection />}
            <div id="section-nav">
                {section > 0 && 
                    <button onClick={() => setSection(section - 1)}>&lt; {navText[section - 1]}</button>
                }
                {(section < 7 && section > 0) &&
                    <button onClick={() => setSection(section + 1)}>{navText[section + 1]} &gt;</button>
                }
                {section == 0 &&
                    <button onClick={() => setSection(1)}>Start</button>
                }
            </div>
        </div>
    )
};

const StartSection = () => {
    return (
        <div>
            <h2>Create a new Player Character</h2>
        </div>
    )
}