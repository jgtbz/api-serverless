import { sendSNS } from '../../../app'

export default async () => {
  console.log('Started Schedule UsersBirthday')
  const users = ['User 1', 'User2', 'User3']
  await Promise.all(
    users.map(user => sendSNS({ topic: 'users-birthday', message: { from: 'Schedule', name: user } }))
  )
  console.log('Finished Schedule UsersBirthday')
}
