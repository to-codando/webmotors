
export const appTabContent = () => {
  return { template, styles }
}

const template = ({ html }) => html`
<div class="ctx-content">
  <slot></slot>
</div>
`

const styles = ({ ctx, css }) => css`
${ctx},
.ctx-content { 
  display:flex;
  justify-content: flex-start;
  align-items:flex-start;
  width:100%;
  height:140px;
}  
`
