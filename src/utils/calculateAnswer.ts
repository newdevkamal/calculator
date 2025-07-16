import { arithmaticValueStore } from "@/store/arithmaticValueStore";

export function calculateAnwer(){ 
    const arr= arithmaticValueStore.getState().operationsArr;
    
    let iterateThisMany

    if (!(arr.length % 2)) {
        iterateThisMany = arr.length - 1;
    }
    else {
        iterateThisMany = arr.length;
    }

    let result=Number(arr[0])

    for(let i =1;i<iterateThisMany;i+=2){
        if(arr[i]=="/"){         
            result=result/Number(arr[i+1])     
        }

        else if(arr[i]=="*"){
            result=result*Number(arr[i+1])
        }

        else if(arr[i]=="+"){
            result=result+Number(arr[i+1])
        }
         else if(arr[i]=="-"){
            result=result-Number(arr[i+1])
        }
   
   
}
      return result
   
  
}