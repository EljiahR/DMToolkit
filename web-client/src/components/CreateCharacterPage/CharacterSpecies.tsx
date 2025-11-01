import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import { setSpeciesBase } from "../../lib/redux/selectedCharacterSlice";

const CharacterSpecies = ({className = ""}: {className?: string}) => {
    const allSpecies = useAppSelector((state) => state.dmTools.speciesDefinitions);
    const selectedSpeciesDefinition = useAppSelector((state) => state.selectedCharacter.speciesInstance?.definition);
    const selectedLineageDefinition = useAppSelector((state) => state.selectedCharacter.speciesInstance?.lineageInstance?.definition);
    const dispatch = useAppDispatch();

    useLayoutEffect(() => {
        if (allSpecies.length < 1) {
            // TODO: Error handling
        }
        if (allSpecies.length > 0 && (selectedSpeciesDefinition == null || selectedSpeciesDefinition.id == "default")) {
            dispatch(setSpeciesBase(allSpecies[0]));
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
        <div id="species-page" className={className}>
            <div className="section-header">
                <h2>Species</h2>    
                <div id="species-selection" className="section-selection">
                    <label htmlFor="species-selector">Select a species</label>
                    <select id="species-selector" value={selectedSpeciesDefinition ? selectedSpeciesDefinition.id : ""} onChange={(e) => handleSpeciesChange(e.target.value)}>
                        {allSpecies.map((species) => {
                            return (
                                <option key={`species-${species.id}`} value={species.id}>{species.name}</option>
                            )
                        })}
                    </select>
                </div>
                <div id="lineage-seelction" className="section-selection">
                    <label htmlFor="lineage-selector">Select a lineage</label>
                    <select id="lineage-selector">
                        {selectedSpeciesDefinition?.lineageDefinitions.map((lineage) => {
                            return (
                                <option key={`lineage-${lineage.id}`} value={lineage.id}>{lineage.name}</option>
                            )
                        })}
                    </select>
                </div>
                
                
            </div>
            
            {(selectedSpeciesDefinition && selectedLineageDefinition) &&
                <div id="species-display" className="section-display">
                    <h3>{selectedSpeciesDefinition.name}</h3>
                    <h4>{selectedLineageDefinition.name}</h4>
                    <p>{selectedSpeciesDefinition.description}</p>
                </div>
            }
            
        </div>
    )
}

export default CharacterSpecies;
