export const appLink = ({ props }) => {
  const hooks = () => ({
    afterOnRender
  })

  const afterOnRender = ({ appElement }) => {
    appElement.classList.add(props.class)
  }

  return { template, styles, hooks }
}

const template = ({ html, props }) => html`
  <a href="${props.to}"><slot></slot></a>
`

const styles = ({ ctx, props, css }) => css`
    ${ctx} {
      font-size: .875rem;
      opacity:0
    }
`
