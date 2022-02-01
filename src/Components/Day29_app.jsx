import React from "react";
import { useSelector } from "react-redux";
import Day29_Form from "./Day29_Form";
import Day29_WheatherCard from "./Day29_WheatherCard";
import Theme from "./Day29_Theme";


const Day29App=()=>
{
    const theme = useSelector((state)=> state.theme);
    return(
        <>
        
        <div className={theme ? "App_dark" : "App_light"}>
        <Theme/>
        <Day29_Form/>
        <Day29_WheatherCard/>
        </div>
        
        </>
    );
}
export default Day29App;