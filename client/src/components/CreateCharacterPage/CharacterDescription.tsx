import { useAppSelector } from "../../lib/redux/hooks"

export default function() {
    const physicalDescription = useAppSelector((state) => state.newCharacter.physicalDescription);
    const personality = useAppSelector((state) => state.newCharacter.personality);
    const ideals = useAppSelector((state) => state.newCharacter.ideals);
    const bonds = useAppSelector((state) => state.newCharacter.bonds);
    const flaws = useAppSelector((state) => state.newCharacter.flaws);
    

    return (
        <div>
            <h2>Description</h2>
        </div>
    )
}