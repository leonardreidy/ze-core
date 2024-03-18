import { singleton } from "tsyringe";
import { UserModel } from "../model/user.model";

// A post request should not contain an id.
export type UserCreationParams = Pick<UserModel, "email" | "name" | "phoneNumbers">;

@singleton()
export class UserService {
  public async getUserById(id: number, name?: string): Promise<UserModel> {
    return {
      id,
      email: "jane@doe.com",
      name: name ?? "Jane Doe",
      status: "Happy",
      phoneNumbers: [],
    };
  }

  public async createUser(userCreationParams: UserCreationParams): Promise<UserModel> {
    return {
      id: Math.floor(Math.random() * 10000), // Random
      status: "Happy",
      ...userCreationParams,
    };
  }
}