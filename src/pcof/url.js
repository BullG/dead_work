import env from '../../build/env'
const url = env === 'development' ?
  'http://127.0.0.1:3000' :
  env === 'production' ?
    'http://121.40.132.6:3000' :
    'https://debug.url.com'
export default url