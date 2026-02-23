import { createContext, useEffect, useState } from "react";

const FoodDataStore = createContext(
    {
        handleOnClick:()=>{},
    }
)
export default FoodDataStore;

export function FoodDataStoreContext ({children})
{
    const [foodData,setFoodData] = useState([]);
    const [allData,setAllData] = useState([])
    const dataFetching =()=>
    {
        fetch("http://localhost:9000/")
        .then(res =>res.json())
        .then(data => 
            {
                setFoodData(data); 
                setAllData(data);   
            }
        ); 
    }
    useEffect(dataFetching,[]);

    const filterFood =(type)=>
    {
        if(type==="breakfast")
        {
            setFoodData(allData.filter((food)=>food.type === type));
        }
        else if(type === "lunch")
        {   
            setFoodData(allData.filter((food)=>food.type === type));
        }
        else if(type === "dinner")
        {
            setFoodData(allData.filter((food)=>food.type === type));
        }
        else if(type === "dessert")
        {
            setFoodData(allData.filter((food)=>food.type === type));
        }
        else if(type === "all")
        {
            setFoodData(allData);
        }

    }
    
    
    return <FoodDataStore.Provider
    value={
        {
            foodData,
            filterFood,
        }
    }>
        {children}
    </FoodDataStore.Provider>
};