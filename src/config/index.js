export default {
  stage: process.env.STAGE,
  aws: {
    id: process.env.AWS_ID,
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
}
