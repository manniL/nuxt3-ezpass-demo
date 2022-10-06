import { createAuthMiddleware } from 'ezpass';

export default createAuthMiddleware({
  provider: 'basic',
  username: 'test',
  password: 'test'
})
