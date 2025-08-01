export interface IUserDTO {
    _id?: string;
    name: string;
    lastName: string;
    email: string;
    password: string;
}

export class UserDTO implements IUserDTO {
    _id?: string;
    name: string;
    lastName: string;
    email: string;
    password: string;

    constructor(data: IUserDTO) {
        this._id = data._id;
        this.name = data.name;
        this.lastName = data.lastName;
        this.email = data.email;
        this.password = data.password;
    }
}