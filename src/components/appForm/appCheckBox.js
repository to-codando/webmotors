export const appCheckBox = () => {
  return { template, styles }
}

const template = ({ props, html }) => {
  return html`
    <label>
      <input type="checkbox" name="${props.name}" value="${props.value}"> 
      <slot></slot>
    </label>
  `
}

const styles = ({ ctx, css }) => css``
