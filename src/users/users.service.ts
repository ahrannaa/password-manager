import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService { 

  constructor(private readonly usersRepository: UsersRepository ){ }
 
  async create(user: CreateUserDto) {
   return await this.usersRepository.create(user)
  }

  async get(id:number){
    return await this.usersRepository.getById(id)
  }

}