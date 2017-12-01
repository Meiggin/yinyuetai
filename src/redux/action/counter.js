export const increase = ()=>{
    return {
        type: "INCREASE"
    }
}

export const decrease = ()=>{
    return {
        type: "DECREASE"
    }
}

export const getListDate = (data)=>{
    return {
        type:"GETLISTS",
        data
    }
}