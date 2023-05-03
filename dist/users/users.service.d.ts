import { CreateUserDto } from "./dto/create-user.dto";
import { UsersRepository } from "./users.repository";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    create(user: CreateUserDto): Promise<import(".prisma/client").User>;
    get(id: number): Promise<import(".prisma/client").User>;
}
