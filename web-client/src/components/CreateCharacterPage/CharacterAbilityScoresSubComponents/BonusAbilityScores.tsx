import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../lib/redux/hooks"
import { setBackgroundBase, setBackgroundScores } from "../../../lib/redux/selectedCharacterSlice";

export default function() {
    const dispatch = useAppDispatch();
    const allBackgrounds = useAppSelector((state) => state.dmTools.backgrounds);
    const backgroundBase = useAppSelector((state) => state.selectedCharacter.background.base);
    const playerScores = useAppSelector((state) => state.selectedCharacter.scores);
    const instanceBonuses = useAppSelector((state) => state.selectedCharacter.background.abilityScores);

    useLayoutEffect(() => {
        if (backgroundBase == null) {
            dispatch(setBackgroundBase(allBackgrounds[0]));
        }
    }, []);

    const handleBonusChange = (scoreId: string, index: number) => {
        if (instanceBonuses && instanceBonuses[0] != scoreId && instanceBonuses[1] != scoreId) {
            dispatch(setBackgroundScores({scoreId, index}));
        }
    }
    
    return (
        <div>
            <label htmlFor="plusTwo">+2</label>
            <select id="plusTwo" value={instanceBonuses ? instanceBonuses[0] : ""} onChange={(e) => handleBonusChange(e.target.value, 0)}>
                <option value=""></option>
                {Object.keys(playerScores).map((scoreId) => {
                    return (
                        <option key={`bonus-${scoreId}-2`} value={scoreId}>{playerScores[scoreId].name}</option>
                    )
                })}
            </select>
            <label htmlFor="plusOne">+1</label>
            <select id="plusOne" value={instanceBonuses ? instanceBonuses[1] : ""} onChange={(e) => handleBonusChange(e.target.value, 1)}>
                <option value=""></option>
                {Object.keys(playerScores).map((scoreId) => {
                    return (
                        <option key={`bonus-${scoreId}-1`} value={scoreId}>{playerScores[scoreId].name}</option>
                    )
                })}
            </select>
        </div>
    )
}