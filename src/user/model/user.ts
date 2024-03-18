import { UserModel } from "./user.model";

export class User implements UserModel {
  id: number;
  email: string;
  name: string;
  status?: "Happy" | "Sad";
  phoneNumbers: string[];

  constructor(user: UserModel) {
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.status = user.status;
    this.phoneNumbers = user.phoneNumbers;
  }
}