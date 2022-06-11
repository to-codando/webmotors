import { observerFactory } from 'lemejs'
import { appTab } from '../appTabs'

export const appBuyCar = () => {
  const state = observerFactory({
    tabs: [
      { id: 1, title: 'Tab 1', content: 'Tab 1 content', show: true },
      { id: 2, title: 'Tab 2', content: 'Tab 2 content', show: false }
    ]
  })

  const children = () => ({
    appTab
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
