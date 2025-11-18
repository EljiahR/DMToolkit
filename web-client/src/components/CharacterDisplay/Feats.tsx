import { useMemo } from "react"
import { useAppSelector } from "../../lib/redux/hooks"
import { selectAllFeats } from "../../lib/redux/selectedCharacterSlice";
import type { FeatInstance } from "../../lib/types/dm-tool-types/instances/featInstance";

const Feats = () => {
    const allFeats = useAppSelector(selectAllFeats);


    const filteredFeats = useMemo(() => {
        return allFeats;
    }, [allFeats]);

    return (
        <div id="feats-page" className="flex flex-col">
            <div id="feat-filters" className="card">
                <input type="text" placeholder="Search by feat name..." disabled />
            </div>
            <div id="feature-list" className="card flex flex-col">
                {filteredFeats.map((feat) => {
                    return (
                        <FeatDisplay feat={feat} />
                    )
                })}
            </div>
        </div>
    )
}

interface FeatDisplayProps {
    feat: FeatInstance
}

const FeatDisplay = ({ feat }: FeatDisplayProps) => {
    return (
        <div id={`feat-${feat.id}`}>
            <h3>{feat.definition.name}</h3>
        </div>
    )
}

export default Feats;
