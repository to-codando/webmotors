export const appTabBody = () => {
  return { template, styles }
}

const template = ({ html }) => html`
  <slot></slot>
`

const styles = ({ ctx, css }) => css`
  ${ctx} { 
    display:flex;
    justify-content: flex-start;
    align-items:flex-start;
    flex-wrap: wrap;
    width:100%;
    height:calc(100vh - 75px);
    overflow-y: visible;
    padding:.5rem;
    background:#fff;
    border: 1px #f51344 solid
  }  
`
