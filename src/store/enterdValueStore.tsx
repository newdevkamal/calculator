import { create } from 'zustand'

interface enteredValueStoreState{
    value:string;
    addEnterdValueToStore:(value:string)=>void;
    clearLastEnter:()=>void;
    clearNumber:()=>void;
    
}


export const enterdValueStore=create<enteredValueStoreState>((set)=>({
    value:"",
    addEnterdValueToStore:(number)=>set((state)=>({value:state.value+number})),
    clearLastEnter:()=>set((state)=>({value:state.value.slice(0,-1)})),
    clearNumber:()=> set({value:""})
}))