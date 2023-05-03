import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { UsersController } from "./users.controller";
import { UsersRepository } from "./users.repository";
import { UsersService } from "./users.service";
import { EncryptionModule } from './encryption/encryption.module';
import { BcryptService } from './encryption/bcrypt.service';

@Module({
  imports: [PrismaModule, EncryptionModule],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, BcryptService]
})

export class UsersModule { }