import jQuery from "jquery";
import {db} from "./../backend/app_backend";



export const getWeatherForecast = () =>{
    jQuery(($)=>{
        $.noConflict();
        const $API_KEY = "5ea316137182f6af4d2953591af92be3";
        $.ajax({
            url:`https://api.openweathermap.org/data/2.5/forecast?q=Nigeria&appid=${$API_KEY}`,
            success: (result, status, xhr) =>{
                if(result.cod == 200)
                {
                   //console.log(result);
                   return result;
                }

               
            },
    

            error: (xhr, status, error) =>{
                console.log(error);
            }
        });
    
    
    })
    
}
