import React, { useState } from "react";
import CharacterClass from "../components/CreateCharacterPage/CharacterClass";
import CharacterBackground from "../components/CreateCharacterPage/CharacterBackground";
import CharacterSpecies from "../components/CreateCharacterPage/CharacterSpecies";
import CharacterAlignment from "../components/CreateCharacterPage/CharacterAlignment";
import CharacterDescription from "../components/CreateCharacterPage/CharacterDescription";
import CharacterFinalization from "../components/CreateCharacterPage/CharacterSheet";
import CharacterAbilityScores from "../components/CreateCharacterPage/CharacterAbilityScores";

const StartSection = () => {
    return (
        <div>
            <h2>Create a new Player Character</h2>
        </div>
    )
}

type Components = {
    [key: string]: React.FC;
} 

const components: Components = {
    "Start": StartSection,
    "Classes": CharacterClass,
    "Backgrounds": CharacterBackground,
    "Species": CharacterSpecies,
    "Ability Scores": CharacterAbilityScores,
    "Alignments": CharacterAlignment,
    "Descriptions": CharacterDescription,
    "Finish": CharacterFinalization
}

export default function() {
    // Available sections: class, background, species, scores, alignment, description, summary
    const navText = ["Start", "Classes", "Backgrounds", "Species", "Ability Scores", "Alignments", "Descriptions", "Finish"]
    const [section, setSection] = useState(0);
    const ActiveSection = components[navText[section]];
    
    return (
        <div>
            {<ActiveSection />}
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

