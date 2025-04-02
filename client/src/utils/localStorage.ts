export function setToLocalStorage(key:any,value:any){
    localStorage.setItem(key,JSON.stringify(value));
}


export function getFromLocalStorage(key:any){
    //@ts-ignore
     const result = JSON.parse(localStorage.getItem(key));
     if(!result) return null;

     return result;
}


export function deleteFromLocalStorage(key:any){
    localStorage.removeItem(key);
}