import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";
export declare class UsersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(user: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
    getById(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User, never>;
}
