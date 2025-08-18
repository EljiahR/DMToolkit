import { useMemo } from "react"
import { useAppSelector } from "../../lib/redux/hooks"
import { selectAllFeatures } from "../../lib/redux/selectedCharacterSlice"
import type { Feature } from "../../lib/types/dm-tool-types/character";

export default function() {
    const allFeatures = useAppSelector(selectAllFeatures);


    const filteredFeatures = useMemo(() => {
        return allFeatures;
    }, [allFeatures])
    return (
        <div id="features">
            <div id="feat-filters"></div>
            <div id="feature-list">
                {filteredFeatures.map((feat) => {
                    return (
                        <FeatureDisplay feat={feat} />
                    )
                })}
            </div>
        </div>
    )
}

interface FeatureDisplayProps {
    feat: Feature
}

const FeatureDisplay = ({ feat }: FeatureDisplayProps) => {
    return (
        <div id={`feat-${feat.id}`}>
            <h3>{feat.base.name}</h3>
        </div>
    )
}