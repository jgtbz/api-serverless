// import { sendSNS } from '../../../app'
import config from '../../../config'

export default (ctx) => {
  console.log(config)
  console.log(ctx)
  // await sendSNS({ topic: 'hello', message: { from: 'Schedule' } })
  console.log(`Hello Schedule`)
}
