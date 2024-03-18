import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Query,
  Route,
  Response,
  SuccessResponse,
  ValidateError,
} from "tsoa";
import { UserModel } from "../model/user.model";
import { UserService, UserCreationParams } from "../service/user.service";
import { injectable } from "tsyringe";

export interface UserIDValidationError extends ValidateError {
  message: "Validation failed: User ID must be a number";
  details: { [key: string]: unknown }
}

@injectable()
@Route("users")
export class UserController extends Controller {

  constructor(private userService: UserService) {
    super();
  }

  @Response<UserIDValidationError>(422, "Validation Failed") // Custom error response
  @Get("{userId}")
  public async getUser(
    @Path() userId: number,
    @Query() name?: string
  ): Promise<UserModel> {
    return this.userService.getUserById(userId, name);
  }

  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams
  ): Promise<void> {
    this.setStatus(201); // set return status 201
    await this.userService.createUser(requestBody);
    return;
  }
}