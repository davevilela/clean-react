/*
  Teste de implementação dos casos de uso que criei
  de forma abstrata (interfaces)

  --interface segregation principle--
*/

import { HttpPostClient } from '../../protocols/http/http-post-client'
import { RemoteAuthentication } from './remote-authentication'

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    /*
      Deve ser criada uma classe spy, para
      mockar uma dependencia do SUT
    */
    class HttpPostClientSpy implements HttpPostClient {
      url?: string
      async post (url: string): Promise<void> {
        this.url = url
        return Promise.resolve()
      }
    }

    /*
    A url tem que ser injetada no construtor,
    pois é específico apenas para a autenticação HTTP.
    */

    const url = 'any_url'
    const httpClient = new HttpPostClientSpy()
    const sut = new RemoteAuthentication(url, httpClient)
    await sut.auth()
    expect(httpClient.url).toBe(url)
  })
})
