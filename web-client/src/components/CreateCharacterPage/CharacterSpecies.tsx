import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/redux/hooks"
import { setLineageDefinition, setSpeciesDefinition } from "../../lib/redux/selectedCharacterSlice";
import CreateCharacterFeatDisplay from "./CreateCharacterFeatDisplay";

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
            dispatch(setSpeciesDefinition(allSpecies[0]));
        }
    });

    const handleSpeciesChange = (speciesId: string) => {
        const newSpecies = allSpecies.find((speciesSingular) => speciesSingular.id === speciesId);

        if (newSpecies) {
            // setSpeciesBase automatically handles the lineage
            dispatch(setSpeciesDefinition(newSpecies));
        }

        
    }  

    const handleLineageChange = (lineageId: string) => {
        if (selectedSpeciesDefinition) {
            const newLineage = selectedSpeciesDefinition.lineageDefinitions.find((lineage) => lineage.id == lineageId);

            if (newLineage) {
                dispatch(setLineageDefinition(newLineage))
            }
        }
    }

    return (
        <div id="species-page" className={className + " gap-1"}>
            <div id="species-div" className="flex flex-col gap-2 items-center">
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
                </div>
                {selectedSpeciesDefinition &&
                    <div id="species-display" className="section-display">
                        <h2>{selectedSpeciesDefinition.name}</h2>
                        <p>{selectedSpeciesDefinition.description}</p>
                        <hr />
                        <div id="species-feats">
                            {selectedSpeciesDefinition.featDefinitions.map((feat) => {
                                return <CreateCharacterFeatDisplay feat={feat} />
                            })}
                        </div>
                        <hr />
                        <div id="lineage-div" className="flex flex-col gap-2 items-center">
                            <div id="lineage-selection" className="section-selection">
                                <label htmlFor="lineage-selector">Select a lineage</label>
                                <select id="lineage-selector" value={selectedLineageDefinition ? selectedLineageDefinition.id : ""} onChange={(e) => handleLineageChange(e.target.value)}>
                                    {selectedSpeciesDefinition?.lineageDefinitions.map((lineage) => {
                                        return (
                                            <option key={`lineage-${lineage.id}`} value={lineage.id}>{lineage.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            {selectedLineageDefinition &&
                                <div id="lineage-display" className="flex flex-col gap-3">
                                    <h2>{selectedLineageDefinition.name}</h2>
                                    <p>{selectedLineageDefinition.description}</p>
                                    <hr />
                                    <div id="lineage-feats">
                                        {selectedLineageDefinition.featDefinitions.map((feat) => {
                                            return <CreateCharacterFeatDisplay feat={feat} />
                                        })}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
            
            
        </div>
    )
}

export default CharacterSpecies;
