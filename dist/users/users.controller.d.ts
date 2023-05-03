import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    createUser(body: CreateUserDto): Promise<import(".prisma/client").User>;
    findOnde(id: number): Promise<import(".prisma/client").User>;
}
