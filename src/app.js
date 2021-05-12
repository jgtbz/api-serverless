import AWS from 'aws-sdk'
import config from './config'

const sendSNS = async ({ topic, message }) => {
  AWS.config.update({
    region: config.aws.region,
    accessKeyId: config.aws.accessKey,
    secretAccessKey: config.aws.secretAccessKey
  })

  const Message = typeof(message) === 'string'
    ? message
    : JSON.stringify(message)
  const TopicArn =  `arn:aws:sns:${config.aws.region}:${config.aws.id}:${topic}-${config.stage}`

  const params = {
    Message,
    TopicArn
  }

  console.log({
    config,
    params
  })

  await new AWS.SNS().publish(params).promise()
}

export {
  sendSNS
}
