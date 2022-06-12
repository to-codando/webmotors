import { observerFactory } from 'lemejs'
import { repeat } from '../../helpers'
import { tabEventBus } from './eventEmitter'

import { appTabHead, appTabItem, appTabBody, appTabContent } from './'

export const appTab = ({ props }) => {
  const state = observerFactory({ ...props })

  const children = () => ({
    appTab,
    appTabHead,
    appTabItem,
    appTabBody,
    appTabContent
  })

  const hooks = () => ({
    beforeOnInit
  })

  const beforeOnInit = () => {
    tabEventBus.on('on-set-tab', toggleTabs)
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
    hooks,
    children,
    state
  }
}

const template = ({ state, props, toProp, html }) => {
  console.log(state)
  return html`
		<app-tab-head>
			${repeat(
				state.tabs,
				(tab) => html` 
				<app-tab-item ${toProp('tab', tab)}>
					${tab.title}
				</app-tab-item>`
			)}
		</app-tab-head>
		<app-tab-body>
			${repeat(state.tabs, (tab) =>
				tab.show
					? html`
							<app-tab-content data-tab-id=${tab.id}>
								<div class="ctx-pin-link">
									<app-link 
										${toProp('theme', tab.link.theme)}
									>
										<a href="${props.to}" class="ctx-link">
											${tab.link.title}
										</a>
									</app-link>
								</div>
								${tab.content}
							</app-tab-content>
					  `
					: ''
			)}
		</app-tab-body>
	`
}

const styles = ({ ctx, css }) => css`
	${ctx} {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		height: 222px;
		background: #f1f1f1;
		position:relative;
	}

  .ctx-pin-link {
    display: flex;
    position:absolute;
    top:0;
    right:0;
  }
	
	.ctx-pin-link a {
    display:flex;
    width:100%;
    padding:1rem;
    border-radius:5px;
    border: 1px #f00 solid;
    background:#fff;
    color: #f00
  }
`
