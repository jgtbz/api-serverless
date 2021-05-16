import AWS from 'aws-sdk'
import config from './config'

const sendSNS = async ({ topic, message }) => {
  const Message = typeof(message) === 'string'
    ? message
    : JSON.stringify(message)
  const TopicArn =  `arn:aws:sns:us-east-1:${process.env.AWS_ID}:basic-${topic}-${config.stage}`

  const params = {
    Message,
    TopicArn
  }

  const data = await new AWS.SNS().publish(params).promise()

  return data?.MessageId
}

export {
  sendSNS
}
