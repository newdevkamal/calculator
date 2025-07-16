import { create } from 'zustand'

interface arithmaticValueStoreState{
    operationsArr:string[],
    addToOperationArr:(item:string)=>void,
    clearOperationsArr:()=>void,
    answer:Number,
    setAnswer:(answer:number)=>void,
    displayingAnswer:string,
    setDisplayingAnswer:(answer:string)=>void

}


export const arithmaticValueStore=create<arithmaticValueStoreState>((set)=>({
    operationsArr:[],
    addToOperationArr:(item) => set((state) => ({
        operationsArr: [...state.operationsArr,item]
    })),
    clearOperationsArr:()=>set({operationsArr:[]}),
    answer:0,
    setAnswer:(answer)=>set(()=>({answer:answer})),
    displayingAnswer:"0",
    setDisplayingAnswer:(answer)=>set(()=>({displayingAnswer:answer})),
}))