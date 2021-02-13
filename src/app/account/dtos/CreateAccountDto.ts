export class CreateAccountDto {
    Email : string;
    MobileNumber : string;
    Password : string;

    constructor(email : string, mobileNumber : string, password : string) {
        this.Email = email;
        this.MobileNumber = mobileNumber;
        this.Password = password;
    }
}