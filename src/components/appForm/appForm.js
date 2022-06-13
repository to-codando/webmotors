import { appCheckBox } from './'

export const appForm = () => {
  const children = () => ({
    appCheckBox
  })
  return { template, styles, children }
}

const template = ({ html, toProp }) => {
  return html`
    <div class="ctx-check-box">
      <app-check-box 
        ${toProp('value', 1)} 
        ${toProp('name', 'new')}
      >
      Novos
      </app-check-box>

      <app-check-box 
        ${toProp('value', 2)}
        ${toProp('name', 'used')}
      >
      Usados
      </app-check-box>
    </div>
  `
}

const styles = ({ ctx, css }) => css``
