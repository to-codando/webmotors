import template from './template'
import styles from './styles'

import { appHeader } from '../appHeader'

export const appMain = () => {
  const children = () => ({
    appHeader
  })
  return { template, styles, children }
}
