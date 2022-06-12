import { observerFactory } from 'lemejs'
import { appTab } from '../appTabs'
import { appLink } from '../appLink'

export const appBuyCar = () => {
  const state = observerFactory({
    tabs: [
      {
        id: 1,
        title: 'Tab 1',
        content: 'Tab 1 content',
        icon: 'directions_car',
        show: true,
        callAction: { title: 'Vender meu carro', link: '#/sale-car' },
        link: { to: '#/address-1', title: 'Vender meu carro', theme: 'red' }
      },
      {
        id: 2,
        title: 'Tab 2',
        content: 'Tab 2 content',
        icon: 'two_wheeler',
        show: false,
        callAction: { title: 'Vender minha moto', link: '#/sale-moto' },
        link: { to: '#/address-2', title: 'Vender minha moto', theme: 'red' }
      }
    ]
  })

  const children = () => ({
    appTab,
    appLink
  })

  return {
    template,
    styles,
    children,
    state
  }
}

const template = ({ state, html, toProp }) => html`
	<app-tab ${toProp('tabs', state.tabs)}></app-tab>
`

const styles = ({ ctx, css }) => css`
	${ctx} {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
	}
`
