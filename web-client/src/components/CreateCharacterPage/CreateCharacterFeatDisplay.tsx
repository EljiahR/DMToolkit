import type { FeatDefinition } from "../../lib/types/dm-tool-types/definitions/featDefinition";

interface FeatDisplayProps {
    feat: FeatDefinition;
}

const CreateCharacterFeatDisplay = ({feat}: FeatDisplayProps) => {
    return (
        <div id="background-feat">
            <p className="font-bold">{feat.name}</p>
            <p>{feat.description}</p>
            {feat.availableEffectTables.map((table) => {
                return (
                    <p><span className="font-semibold">{table.effects[0].title}:</span> {table.effects[0].description}</p> 
                )
            })}
        </div>
    )
};

export default CreateCharacterFeatDisplay;