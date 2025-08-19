import { useAppSelector } from "../../lib/redux/hooks"
import { selectKnownSpells } from "../../lib/redux/selectedCharacterSlice"
import type { Spell } from "../../lib/types/dm-tool-types/spell"

export default function() {
    const knownSpells = useAppSelector(selectKnownSpells);
    
    return (
        <div id="spell-section">
            {knownSpells.map((spell) => {
                return (
                    <SpellDisplay spell={spell} />
                )
            })}
        </div>
    )
};

interface SpellDisplayProps {
    spell: Spell
};

const SpellDisplay = ({spell}: SpellDisplayProps) => {
    return (
        <div className="displayed-spell">
            <p>{spell.name}</p>
            <p>{spell.description}</p>
        </div>
    )
}