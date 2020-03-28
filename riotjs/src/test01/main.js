import * as riot from '../../node_modules/riot/riot+compiler.js'
import App from './app.riot'

const mountApp = riot.component(App)

const app = mountApp(
  document.getElementById('root'),
  { message: 'Hello World' }
)

