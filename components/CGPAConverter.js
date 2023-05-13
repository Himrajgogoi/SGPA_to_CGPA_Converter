import { Departments, Department_ug_credits, Department_ug_credits_2021_25 } from "./departments";


export default function Convert(sgpa,dept, sem3){

    let result, numerator = 0 , denominator = 0 ;
    if (sem3===false){
        sgpa.forEach((val,index) => {
        
            numerator += val*Department_ug_credits[Departments[dept]][index];
            denominator += Department_ug_credits[Departments[dept]][index];
        });

        result = (numerator/denominator).toPrecision(3);

        return result;
    }

    else {
        sgpa.forEach((val,index) => {
        
            numerator += val*Department_ug_credits_2021_25[Departments[dept]][index];
            denominator += Department_ug_credits_2021_25[Departments[dept]][index];
        });

        result = (numerator/denominator).toPrecision(3);

        return result;
    }

}