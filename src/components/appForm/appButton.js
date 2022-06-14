import { observerFactory } from 'lemejs'

export const appButton = ({ props }) => {
  const state = observerFactory({
    cssStyles: ''
  })

  const hooks = () => ({
    beforeOnInit
  })

  const beforeOnInit = () => {
    setContextClasses()
  }

  const setContextClasses = () => {
    if (!props || !props.styles) return ''
    const cssStyles = props.styles.map(css => {
      return `ctx-${css}`
    }).join(' ')
    state.set({ cssStyles })
  }

  return { template, styles, state, hooks }
}

const template = ({ state, html }) => {
  return html`
    <button 
      class="ctx-button ${state.cssStyles}"
    >
      <slot></slot>
    </button>
  `
}

const styles = ({ ctx, css }) => css`
  ${ctx},
  .ctx-button {
    display: flex;
    width:100%;
  }

  .ctx-button {
    border:0;
    border-radius:5px;
    background:#ccc;
    color:#666;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    height:45px;
    font-size: .8rem;
    font-weight:bolder
  }

  .ctx-button-red {
    background: #f51344;
    color: #fff
  }

  .ctx-text-red {
    background:none;
    color:#f51344
  }

  .ctx-text-grey {
    background:none;
    color:#666
  }

  .ctx-align-left {
    justify-content: flex-start
  }

  .ctx-align-right {
    justify-content: flex-end
  }
`
