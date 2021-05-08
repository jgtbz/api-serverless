import { sendSNS } from '../../../app'

export default async ({ value }) => {
  await sendSNS({ topic: '"basic-functions-hello', message: { from: 'Endpoint' } })
  return {
    status: 200,
    message: `Hello Endpoint: ${value}`
  }
}
