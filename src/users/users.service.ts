import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersRepository } from "./users.repository";
import { BcryptService } from "./encryption/bcrypt.service";

@Injectable()
export class UsersService {

  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly bcryptService: BcryptService,
  ) { }

  async create(userDto: CreateUserDto) {
    const savedUser = await this.usersRepository.findUserByEmail(userDto.email)

    if (savedUser) {
      throw new ConflictException('User already exists')
    }

    const encryptedPsw = this.bcryptService.hash(userDto.password)

    const user = {
      ...userDto,
      password: encryptedPsw
    }

    return await this.usersRepository.create(user)
  }

  async login(userDto: CreateUserDto) {
    const user = await this.usersRepository.findUserByEmail(userDto.email)
   
    if(!user){
      throw new NotFoundException()
    }
  
    const IsIgual= this.bcryptService.compare(user.password, userDto.password)
    console.log(IsIgual)

    if(!IsIgual) {
      throw new NotFoundException()
    }

    return user; 
  }

  async get(id: number) {
    return await this.usersRepository.getById(id)
  }

}