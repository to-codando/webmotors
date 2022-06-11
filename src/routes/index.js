import { routerFactory } from 'lemejs'

import { appNotFound } from '../components/appNotFound'
import { appBuyCar } from '../components/appBuyCar'

const router = routerFactory()

router.add({
  hash: '/',
  validator: /^#\/$/,
  component: appBuyCar,
  isInitial: true
})

router.add({
  hash: 'not-found',
  validator: /^#\/not-found$/,
  component: appNotFound,
  isDefault: true
})

export { router }
