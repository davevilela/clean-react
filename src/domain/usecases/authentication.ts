import { AccountModel } from '../models/account-model'

/*
  Type alias recebido pela autenticação.
*/

type AuthenticationParams = {
  email: string
  password: string
}

/*
  Abstração de uma classe de autenticação:
  Quem implementa, sempre terá um método auth que recebe parametros do type
  AuthenticationParams e retorna um AccountModel para inserir no banco.
*/

export interface Authentication {
  auth(params: AuthenticationParams): Promise<AccountModel>
}
