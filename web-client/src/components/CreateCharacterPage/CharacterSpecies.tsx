import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import { setLineageBase, setSpeciesBase } from "../../lib/redux/selectedCharacterSlice";

export default function({className = ""}: {className?: string}) {
    const allSpecies = useAppSelector((state) => state.dmTools.species);
    const allLineages = useAppSelector((state) => state.dmTools.lineages);
    const selectedSpeciesBase = useAppSelector((state) => state.selectedCharacter.species.base);
    const selectedLineageBase = useAppSelector((state) => state.selectedCharacter.species.lineage.base);
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        if (allSpecies.length < 1) {
            // TODO: Error handling
        }

        if (allLineages.length < 1) {
            // TODO: Error handling
        }
        
        if (selectedSpeciesBase == null || selectedSpeciesBase.id == "default") {
            dispatch(setSpeciesBase(allSpecies[0]));
        }

        if (selectedLineageBase == null || selectedLineageBase.id == "default") {
            dispatch(setLineageBase(selectedSpeciesBase ? selectedSpeciesBase.lineages[0] : allSpecies[0].lineages[0]));
        }
    });

    const handleSpeciesChange = (speciesId: string) => {
        const newSpecies = allSpecies.find((speciesSingular) => speciesSingular.id === speciesId);

        if (newSpecies == undefined) {
            // TODO: Error handling ;)
        }

        // setSpeciesBase automatically handles the lineage
        dispatch(setSpeciesBase(newSpecies!));
    }  

    return (
        <div className={className}>
            <h2>Species</h2>    
            <label htmlFor="species-selector">Select a species</label>
            <select id="species-selector" value={selectedSpeciesBase ? selectedSpeciesBase.id : ""} onChange={(e) => handleSpeciesChange(e.target.value)}>
                {allSpecies.map((species) => {
                    return (
                        <option key={`species-${species.id}`} value={species.id}>{species.name}</option>
                    )
                })}
            </select>
            <label htmlFor="lineage-selector">Select a lineage</label>
            <select id="lineage-selector">
                {allLineages.filter(lineage => lineage.speciesId == selectedSpeciesBase.id).map((lineage) => {
                    return (
                        <option key={`lineage-${lineage.id}`} value={lineage.id}>{lineage.name}</option>
                    )
                })}
            </select>
            {(selectedSpeciesBase && selectedLineageBase) &&
                <div id="species-display">
                    <h3>{selectedSpeciesBase.name}</h3>
                    <h4>{selectedLineageBase.name}</h4>
                    <p>{selectedSpeciesBase.description}</p>
                </div>
            }
            
        </div>
    )
}