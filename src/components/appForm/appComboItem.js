import { formEventBus } from './eventDrive'

export const appComboItem = ({ props }) => {
  const hooks = () => ({
    afterOnRender
  })

  const afterOnRender = (dom) => {
    onSelect(dom)
  }

  const onSelect = ({ on, appElement }) => {
    on('click', appElement, () => {
      formEventBus.emit('on-select-combo-item', { ...props })
    })
  }

  return { template, styles, hooks }
}

const template = ({ state, html }) => {
  return html`
    <slot></slot>
  `
}

const styles = ({ ctx, css }) => css``
