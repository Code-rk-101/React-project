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
    
    return value;
}

export function GameStoreContext ({children})
{
    const initialSelectVal = [];
    const [selectVal,dispatchSelectVal] = useReducer(selectReducer,initialSelectVal);
    const [isAnyButtonSelected,setIsAnyButtonSelected] = useState(false);
    

    const handleOnButtonSelection =(val)=>
    {
        setIsAnyButtonSelected(!isAnyButtonSelected);   
        const selVal = 
        {
            type: "BUTTON_SELECTED",
            payload:
            {
                val,
            },
        }
        dispatchSelectVal(selVal);
    }

    // const buttonStatus = ()=>
    // {

    // }
    
    return <GameStore.Provider
        value={
            {
                handleOnButtonSelection,
                selectVal
            }
        }>
            
            {children}
        </GameStore.Provider>
} ;