import { useMemo } from "react";
import type { LineageBase, SpeciesBase } from "../../lib/types/dmToolTypes"

interface Props {
    allSpecies: SpeciesBase[];
    allLineages: LineageBase[];
    selectedSpeciesId: string;
    setSelectedSpeciesId: (newSpecies: string) => void;
    selectedLineageId: string;
    setSelectedLineageId: (newLineage: string) => void;
}

export default function({...props}: Props) {
    const selectedSpecies = useMemo(() => {
        return props.allSpecies.find(species => species.id == props.selectedSpeciesId) ?? null;
    }, [props.selectedSpeciesId]);
    
    return (
        <div>
            <h2>Species</h2>    
            <label htmlFor="species-selector">Select a species</label>
            <select id="species-selector" value={props.selectedSpeciesId} onChange={(e) => props.setSelectedSpeciesId(e.target.value)}>
                {props.allSpecies.map((species) => {
                    return (
                        <option key={`species-${species.id}`} value={species.id}>{species.name}</option>
                    )
                })}
            </select>
            <label htmlFor="lineage-selector">Select a lineage</label>
            <select id="lineage-selector">
                {props.allLineages.filter(lineage => lineage.speciesId == props.selectedSpeciesId).map((lineage) => {
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