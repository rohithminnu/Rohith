import { LightningElement } from 'lwc';
import LoginUser from '@salesforce/apex/LoginUser.login'

export default class Rohith extends LightningElement {

    email;
    password;

    handleUsername(event){
        this.email=event.target.value;

    }

    handlePasswordChange(event){
        this.password= event.target.value;

    }

    handleLogin(){
        console.log("Inside Login")
        console.log("Email value:",this.email)
        console.log('Password ',this.password)
    }
}