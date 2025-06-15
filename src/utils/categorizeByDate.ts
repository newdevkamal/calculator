import { GroupedTodos, todos } from "./types";


export default function categorizeByDate(data:todos[]){
    //const today=new Date().toISOString().split('T')[0];
    const grouped = data.reduce((accumulator:GroupedTodos, item) => {
        if (false){
          return accumulator
        }else{
        // Check if the date already exists as a key in the accumulator
          if (!accumulator[item.date]) {
          // Create a new array if the key doesn't exist  
            accumulator[item.date] = [];  
          }
        // Add the current item to the array for that date
          accumulator[item.date].push({todoName:item.name,id:item._id}); 
        // Return the updated accumulator to be used in the next iteration 
        return accumulator;
      }  
      }, {});
   
    return grouped
}
