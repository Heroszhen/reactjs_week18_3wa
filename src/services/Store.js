export default class Store{

    getHeaders(){
        let user = JSON.parse(this.getStorage("user"));
        let headers = {
            "Content-Type" : "application/json",
            "Authorization": "Bearer " + user["token"]
        }
        return headers;
    }
    
    //localstorage
    setStorage(key,value){
        localStorage.setItem(key,value);
    }

    getStorage(key){
        return localStorage.getItem(key);
    }

    removeStorage(key){
        localStorage.removeItem(key);
    }
    
}