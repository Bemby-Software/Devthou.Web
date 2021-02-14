export class AccountCreatedDto {
    FirstName : string;
    LastName : string;
    Email : string;

    constructor(firstName : string, lastName : string, email : string) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.Email = email;
    }
}