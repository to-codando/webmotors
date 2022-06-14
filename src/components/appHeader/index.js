import logo from '../../assets/images/webmotors.svg'

export const appHeader = () => {
  return { template, styles }
}

const template = ({ html }) => html`
    <img src="${logo}" alt="Webmotors"/>
`

const styles = ({ ctx, css }) => css`
  ${ctx} { 
    display:flex;
    width:100%;
    height:45px;
    justify-content: center;
    align-items:center;
    padding:0 0 .5rem 0;
   }
`
