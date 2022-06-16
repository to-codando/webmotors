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
      const emitEvent = props && props.event && props.event.emit
        ? props.event.emit
        : 'ON-UNDEFINED-EVENT'
      formEventBus.emit(emitEvent, { ...props.data })
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
