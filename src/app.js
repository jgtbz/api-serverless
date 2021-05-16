import AWS from 'aws-sdk'
import config from './config'

const sendSNS = async ({ topic, message }) => {
  const Message = typeof(message) === 'string'
    ? message
    : JSON.stringify(message)
  const TopicArn =  `arn:aws:sns:us-east-1:371039528457:basic-${topic}-${config.stage}`

  const params = {
    Message,
    TopicArn
  }

  console.log({
    config,
    params
  })

  const data = await new AWS.SNS().publish(params).promise()
  console.log(data)
}

export {
  sendSNS
}
