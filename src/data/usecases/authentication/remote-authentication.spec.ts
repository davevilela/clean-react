/*
  Teste de implementação dos casos de uso que criei
  de forma abstrata (interfaces)

  --interface segregation principle--
*/

import { RemoteAuthentication } from './remote-authentication'
import { HttpPostClientSpy } from '../../test/mock-http-client'

type SutTypes = {
  sut: RemoteAuthentication
  httpPostClientSpy: HttpPostClientSpy
}

const makeSut = (url: string = 'any_url'): SutTypes => {
  /*
      Deve ser criada uma classe spy, para
      mockar uma dependencia do SUT
    */
  const httpPostClientSpy = new HttpPostClientSpy()

  /*
   A url tem que ser injetada no construtor,
   pois é específico apenas para a autenticação HTTP.
   */
  const sut = new RemoteAuthentication(url, httpPostClientSpy)

  return {
    sut,
    httpPostClientSpy
  }
}

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', async () => {
    const url = 'other_url'
    const { sut, httpPostClientSpy } = makeSut(url)

    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
