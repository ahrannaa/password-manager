import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt'

@Injectable()
export class BcryptService {

  private SALT = 10

  hash(password: string):string {
    return bcrypt.hashSync(password, this.SALT)
  }

  compare(encryptedPsw: string, password: string):boolean{
    return bcrypt.compareSync(password, encryptedPsw)
  }
}
