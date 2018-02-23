export class User{
    username:string;
    psw:string;

    constructor(username:string = "Pippo", psw:string = "Pippo")
    {
        this.username = username;
        this.psw = psw;
    }
    
}