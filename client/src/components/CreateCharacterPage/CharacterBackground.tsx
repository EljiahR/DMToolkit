import { useMemo } from "react";
import type { BackgroundBase } from "../../lib/types/dmToolTypes"

interface Props {
    backgrounds: BackgroundBase[];
    selectedBackgroundId: string;
    setSelectedBackgroundId: (newBackground: string) => void;
}

export default function({ backgrounds, selectedBackgroundId, setSelectedBackgroundId }: Props) {
    const selectedBackground = useMemo(() => {
        return backgrounds.find(background => background.id == selectedBackgroundId) ?? null;
    }, [selectedBackgroundId])
    
    return (
        <div>
            <h2>Background</h2>
            <label htmlFor="background-selection">Choose a background</label>
            <select id="background-selection" value={selectedBackgroundId} onChange={(e) => setSelectedBackgroundId(e.target.value)}>
                {backgrounds.map((background) => {
                    return (
                        <option key={`background=${background.id}`} value={background.id}>{background.name}</option>
                    )
                })}
            </select>
            {selectedBackground &&
            <div>
                <h3>{selectedBackground.name}</h3>
                <p>{selectedBackground.description}</p>
            </div>
            }
        </div>
    )
}