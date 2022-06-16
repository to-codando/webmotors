import { createApp } from 'lemejs'
import { router } from './routes'
import { appMain } from './components/appMain'
import { startMockAPI } from './mock/server'

const selector = '#app'

const app = createApp(
  selector,
  appMain,
  router
)

startMockAPI()
app.init()
