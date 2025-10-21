import { useAppSelector } from "../../lib/redux/hooks"
import { selectAllSpells } from "../../lib/redux/selectedCharacterSlice";
import type { Spell } from "../../lib/types/dm-tool-types/entities/spell";

export default function() {
    const knownSpells = useAppSelector(selectAllSpells);
    
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