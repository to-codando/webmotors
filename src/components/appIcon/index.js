export const appIcon = () => {
  return { template, styles }
}

const template = ({ props, html }) => html`
  <span class="material-symbols-rounded ctx-font-light ctx-icon">
   <slot></slot>
  </span>
`

const styles = ({ ctx, css }) => css`
  .ctx-font-light {
    font-weight: lighter;
    font-size: 1.3rem;
  }
  
  .ctx-icon {
    cursor: pointer;
  }

`
