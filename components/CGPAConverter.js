import { Departments, Department_ug_credits } from "./departments";


export default function Convert(sgpa,dept){

    let result, numerator = 0 , denominator = 0 ;
    sgpa.length >0 && sgpa.forEach((val,index) => {
      
        numerator += val*Department_ug_credits[Departments[dept]][index];
        denominator += Department_ug_credits[Departments[dept]][index];
    });

    result = (numerator/denominator).toPrecision(3);

    return result;

}