export class CreateAccountDto {
    FirstName : string;
    LastName : string;
    Email : string;
    MobileNumber : string;
    Password : string;

    constructor(firstName : string, lastName : string, email : string, mobileNumber : string, password : string) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Email = email;
        this.MobileNumber = mobileNumber;
        this.Password = password;
    }
}