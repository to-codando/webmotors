export const appCheckBox = () => {
  return { template, styles }
}

const template = ({ props, html }) => {
  return html`
    <label>
      <input
        type="checkbox" 
        name="${props.name}"
        value="${props.value}"
        class="ctx-input"
       > 
      <span class="ctx-span">
        <slot></slot>
      </span>
    </label>
  `
}

const styles = ({ ctx, css }) => css`
  ${ctx}{
    display: inline-block;
    font-size: 1.2rem
  }
  .ctx-span {
    font-size: .875rem;
    position: relative;
    left: -3px;
  }
  .ctx-input {
    position: relative;
    top: 2px;
  }
`
