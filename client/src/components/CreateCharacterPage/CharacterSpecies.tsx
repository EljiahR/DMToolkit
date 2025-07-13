import { useLayoutEffect } from "react";
import { useAppSelector } from "../../lib/redux/hooks"

export default function() {
    const allSpecies = useAppSelector((state) => state.dmTools.species);
    const allLineages = useAppSelector((state) => state.dmTools.lineages);
    const selectedSpecies = useAppSelector((state) => state.newCharacter.speciesBase);
    const selectedLineage = useAppSelector((state) => state.newCharacter.lineageBase);
    
    useLayoutEffect(() => {
        if (allSpecies.length < 1) {
            // TODO: Error handling
        }

        if (allLineages.length < 1) {
            // TODO: Error handling
        }
        
        if (selectedSpecies == null) {

        }
    })

    return (
        <div>
            <h2>Species</h2>    
            <label htmlFor="species-selector">Select a species</label>
            <select id="species-selector" value={selectedSpecies ? selectedSpecies.id : ""} onChange={(e) => props.setSelectedSpeciesId(e.target.value)}>
                {allSpecies.map((species) => {
                    return (
                        <option key={`species-${species.id}`} value={species.id}>{species.name}</option>
                    )
                })}
            </select>
            <label htmlFor="lineage-selector">Select a lineage</label>
            <select id="lineage-selector">
                {allLineages.filter(lineage => lineage.speciesId == selectedSpecies?.id).map((lineage) => {
                    return (
                        <option key={`lineage-${lineage.id}`} value={lineage.id}>{lineage.name}</option>
                    )
                })}
            </select>
            {selectedSpecies &&
                <div id="species-display">
                    <h3>{selectedSpecies.name}</h3>
                    <p>{selectedSpecies.description}</p>
                </div>
            }
            
        </div>
    )
}