export const appTabHead = () => {
  return { template, styles }
}

const template = ({ html }) => html`
  <div class="ctx-head">
    <slot></slot>
  </div>
`

const styles = ({ ctx, css }) => css`
${ctx},
.ctx-head { 
  display:flex;
  justify-content: flex-start;
  align-items:flex-start;
  width:100%;
  background: #ebebeb
}  
`
