import { Client } from '../../../../index'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.quotes
    expect(client.hasOwnProperty('basicApi')).toBeTruthy()
    expect(client.hasOwnProperty('batchApi')).toBeTruthy()
    expect(client.hasOwnProperty('publicObjectApi')).toBeTruthy()
    expect(client.hasOwnProperty('searchApi')).toBeTruthy()
  })
})
