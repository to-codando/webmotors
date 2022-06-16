import { observerFactory } from 'lemejs'
import { tabEventBus } from '../appTabs/eventEmitter'
import { repeat } from '../../helpers'

import {
  appTab,
  appTabHead,
  appTabBody,
  appTabContent,
  appTabItem
} from '../appTabs'

import { appLink } from '../appLink'
import { appForm } from '../appForm'

import { apiFactory } from '../../services/http'

export const appBuyCar = () => {
  const api = apiFactory()

  const state = observerFactory({
    tabs: [
      {
        id: 1,
        title: 'Carros',
        content: 'Tab 1 content',
        icon: 'directions_car',
        show: true,
        link: { to: '#/', title: 'Vender meu carro' }
      },
      {
        id: 2,
        title: 'Motos',
        content: 'Tab 2 content',
        icon: 'two_wheeler',
        show: false,
        link: { to: '#/', title: 'Vender minha moto' }
      }
    ],
    brands: [],
    models: []
  })

  const children = () => ({
    appTab,
    appTabHead,
    appTabBody,
    appTabContent,
    appTabItem,
    appLink,
    appForm
  })

  const hooks = () => ({
    beforeOnInit
  })

  const beforeOnInit = () => {
    tabEventBus.on('on-set-tab', toggleTabs)
    getMake()
  }

  const getMake = async () => {
    const { data: brands } = await api.getMakes()
    const models = await api.getModels(1)
    state.set({ ...state.get(), brands, models })
  }

  const toggleTabs = (data) => {
    const { tabs } = state.get()
    const newTabs = tabs.map((tab) =>
      tab.id === data.tabId ? { ...tab, show: true } : { ...tab, show: false }
    )
    state.set({ tabs: [...newTabs] })
  }

  return {
    template,
    styles,
    children,
    state,
    hooks
  }
}

const template = ({ state, html, toProp }) => html`
	<app-tab>
      <app-tab-head>
      ${
        repeat(state.tabs, (tab) => html`
          <app-tab-item 
            ${toProp('id', tab.id)}
            ${toProp('show', tab.show)}
            ${toProp('icon', tab.icon)}
          > 
            ${tab.title} 
          </app-tab-item>
        `)
      }
      </app-tab-head>
      <app-tab-body>
      ${
        repeat(state.tabs, (tab) =>
          tab.show
            ? html`
            <app-tab-content> 
              <app-link 
                ${toProp('to', tab.link.to)}
                ${toProp('class', 'ctx-pin-link')}
              >
                ${tab.link.title}
              </app-link>
              
              <app-form
                ${toProp('brands', state.brands)}
                ${toProp('models', state.models)}
              ></app-form>

            </app-tab-content>
            `
            : ''
        )
      }              
      </app-tab-body>
  </app-tab>
`

const styles = ({ ctx, css }) => css`
	${ctx} {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
	}

  .ctx-pin-link {
    display: flex;
    position:absolute;
    top:0;
    right:0;
    opacity:1 !important
  }
	
	.ctx-pin-link a {
    display:flex;
    width:100%;
    padding:.7rem 1rem;
		margin-top:4px;
    border-radius:5px;
    border: 1px #f51344 solid;
    background:#fff;
    color: #f51344;
  }  
`
