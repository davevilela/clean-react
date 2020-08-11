import { HttpPostClient } from '../../protocols/http/http-post-client'

/*
  RemoteAuthentication implementará o protocolo de
  Authentication

  Receberá URL e um HttpPostClient
*/

export class RemoteAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient) {}

  async auth (): Promise<void> {
    /*
      chamar o client em questão com o parâmetro recebido
    */
    await this.httpPostClient.post(this.url)
    return Promise.resolve()
  }
}
