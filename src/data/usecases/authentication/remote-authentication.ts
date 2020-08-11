import { HttpPostClient } from '@/data/protocols/http/http-post-client'
import { AuthenticationParams } from '@/domain/usecases/authentication'

/*
  RemoteAuthentication implementará o protocolo de
  Authentication

  Receberá URL e um HttpPostClient
*/

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient) {}

  async auth (params: AuthenticationParams): Promise<void> {
    /*
      chamar o client em questão com o parâmetro recebido
    */
    await this.httpPostClient.post({ url: this.url, body: params })
    return Promise.resolve()
  }
}
