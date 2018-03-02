export class User{
    
    username:string;
    psw:string;


    constructor(username:string = "user", psw:string = "user")
    {
        this.username = username;
        this.psw = psw;
    }
    

    isEquals(item: User){
        return this.username == item.username && this.psw == item.psw;
    }
}