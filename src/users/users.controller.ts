import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

  constructor( private userService: UsersService ) { }
  
  @Post()
   async createUser(@Body() body: CreateUserDto) {
     return await this.userService.create(body)
   }

   @Get(':id')
   async findOnde(@Param('id', ParseIntPipe) id:number) {
    return await this.userService.get(id)
   }
  }