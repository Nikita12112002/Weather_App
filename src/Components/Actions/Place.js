const UpdatePlace=(place)=>
{
    return{
        type :"Update_Place",
        payload:place,
    }
};

const UpdatePlaceData=(place)=>
{
    return(dispatch)=>
    {
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=ef024b5896ab4160913141404211008&q=${place}`)
        .then(res => res.json())
        .then(data =>
          {
              dispatch({
                  type: "Update_Place_Data",
                  payload:data,
              })
          });
    }
}

const ToogleTheme = ()=>
{
    return{
         type: "Toogle_Theme",
    }
}

export {UpdatePlace , UpdatePlaceData , ToogleTheme};