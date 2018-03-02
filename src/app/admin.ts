export class Admin{
    
    admin_username:string;
    admin_psw:string;
    

    constructor(admin_username:string = "Pluto", admin_ps:string = "Pluto")
    {
        this.admin_username = admin_username;
        this.admin_psw = admin_ps;
    }
    
}