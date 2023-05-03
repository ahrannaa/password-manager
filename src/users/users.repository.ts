import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersRepository { 
 
  constructor(private readonly prisma: PrismaService) { }
  
  create(user: CreateUserDto) {
   return this.prisma.user.create({
    data: user
   });
  }

  findUserByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: { email }
    })
  }

  getById(id:number){
    return this.prisma.user.findFirst({
      where: { id }
    })
  }

}