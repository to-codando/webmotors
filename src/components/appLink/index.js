export const appLink = () => {
  return { template, styles }
}

const template = ({ html, props }) => html`
<slot></slot>
`

const styles = ({ ctx, props, css }) => css`
    ${ctx} {
      font-size: .875rem;
    }
`
