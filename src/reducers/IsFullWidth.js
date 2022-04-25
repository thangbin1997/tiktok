export const isFullWidth =(state = false, action)=>{
    switch (action.type){
        case  "FULLWIDTH":
            return state = true;
        case "NOTFULLWIDTH":
            return state = false;
        default:
            return state;
    }
}

export default isFullWidth