import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import { setLineageBase, setSpeciesBase } from "../../lib/redux/selectedCharacterSlice";

export default function() {
    const allSpecies = useAppSelector((state) => state.dmTools.species);
    const allLineages = useAppSelector((state) => state.dmTools.lineages);
    const selectedSpecies = useAppSelector((state) => state.selectedCharacter.speciesBase);
    const selectedLineage = useAppSelector((state) => state.selectedCharacter.lineageBase);
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        if (allSpecies.length < 1) {
            // TODO: Error handling
        }

        if (allLineages.length < 1) {
            // TODO: Error handling
        }
        
        if (selectedSpecies == null) {
            dispatch(setSpeciesBase(allSpecies[0]));
        }

        if (selectedLineage == null) {
            dispatch(setLineageBase(selectedSpecies ? selectedSpecies.lineages[0] : allSpecies[0].lineages[0]));
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
        <div>
            <h2>Species</h2>    
            <label htmlFor="species-selector">Select a species</label>
            <select id="species-selector" value={selectedSpecies ? selectedSpecies.id : ""} onChange={(e) => handleSpeciesChange(e.target.value)}>
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
            {(selectedSpecies && selectedLineage) &&
                <div id="species-display">
                    <h3>{selectedSpecies.name}</h3>
                    <h4>{selectedLineage.name}</h4>
                    <p>{selectedSpecies.description}</p>
                </div>
            }
            
        </div>
    )
}