import { createContext, useReducer, useState ,} from "react";

const GameStore = createContext(
    {
        handleOnButtonSelection:()=>{},
    }
);

export  default GameStore;

const selectReducer = (currVal,action)=>
{
    let value = currVal;
    if(action.type == "BUTTON_SELECTED")
    {
        value = action.payload.val;
    }
    else if(action.type === "REFRESH")
    {
        value = [];
    }
    return value;
}
const gameResultReducer = (currVal,action)=>
{
    let result = currVal;
    
    if(action.type === "DICE_CLICKED")
    {
        if(action.payload.diceVal == action.payload.selectVal)
        {
            result += action.payload.diceVal;
            
        }
        else 
        {
            result -= 2;
        }
    }
    else if(action.type === "REFRESH")
    {
        result = 0;
    }
    return result;
}

export function GameStoreContext ({children})
{
    const initialSelectVal = [];
    const initialscore = 0;

    const [selectVal,dispatchSelectVal] = useReducer(selectReducer,initialSelectVal);
    const [score,dispatchScore] = useReducer(gameResultReducer,initialscore);

    const [isAnyButtonSelected,setIsAnyButtonSelected] = useState(false);
    const [errorMsgStatus,setErrorMessageStatus] = useState(false);
    

    const handleOnButtonSelection =(val)=>
    {
        setIsAnyButtonSelected(true);  
        setErrorMessageStatus(false);

        const selectedVal = 
        {
            type: "BUTTON_SELECTED",
            payload:
            {
                val,
            },
        }
        dispatchSelectVal(selectedVal);
    }
    const Refesh =()=>
    {
        setIsAnyButtonSelected(false);
        const refresh = 
        {
            type:"REFRESH",
        }
        dispatchSelectVal(refresh);
    }

    const handleOnDiceClick = (val)=>
    {
        
        if(isAnyButtonSelected)
        {
            const diceClicked = 
            {
                type:"DICE_CLICKED",
                payload:
                {
                    diceVal:val,
                    selectVal:selectVal,
                }
            }
            dispatchScore(diceClicked);
            Refesh();           
        }  
        else
        {
            setErrorMessageStatus(true);
        }
    }
    const resetScore =()=>
    {
 
        setErrorMessageStatus(false);
        setIsAnyButtonSelected(false);
        const refresh = 
        {
            type:"REFRESH",
        }
        dispatchSelectVal(refresh);
        const reset = 
        {
            type:"REFRESH"
        }
        dispatchScore(reset);
    }
    
    return <GameStore.Provider
        value={
            {
                handleOnButtonSelection,
                handleOnDiceClick,
                resetScore,
                selectVal,
                score,
                isAnyButtonSelected,
                errorMsgStatus
            }
        }>
            
            {children}
        </GameStore.Provider>
} ;