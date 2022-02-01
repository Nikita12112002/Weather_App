import { useSelector , useDispatch } from "react-redux";
import {ToogleTheme} from "./Actions/Place";

const Theme=()=>{

    const theme = useSelector((state)=> state.theme);
    const dispatch = useDispatch();
    return( 
    <div className="">
      <button className={theme ? "btn btn-light theme_btn" : "btn btn-dark theme_btn"} onClick={()=>{

dispatch(ToogleTheme());
}}>{theme ? "Dark Mode" : "Light Mode"}</button>
    </div>
    );
}

export default Theme;