import { tabEventBus } from './eventEmitter'

export const appTabItem = ({ props }) => {
  const hooks = () => ({
    afterOnInit
  })
  const afterOnInit = (dom) => {
    onTabItemEvent(dom, props)
  }
  return { template, styles, hooks }
}

const onTabItemEvent = ({ on, appElement }, props) => {
  on('click', appElement, () => {
    tabEventBus.emit('on-set-tab', { tabId: +props.id, show: true })
  })
}

const template = ({ props, html }) => html`
  <div 
    class="ctx-wrapper ${props.show && 'ctx-active'}"
  >
    <span class="material-symbols-rounded">
      ${props.icon}
    </span>
    <slot></slot>
  </div>
`

const styles = ({ ctx, props, css }) => {
  return css`
  ${ctx},
  .ctx-wrapper { 
    display:flex;
    justify-content: center;
    align-items:center;
  }
  
  .ctx-wrapper {
    padding: .8rem;
    border-bottom: 5px #ccc solid;
    cursor: pointer;
  }
  
  .ctx-active {
    border-bottom: 5px #f00 solid;
    background:#fff
  }
  `
}
