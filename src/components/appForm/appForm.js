import { appCheckBox, appAutoComplete, appComboBox, appButton } from './'
import { appIcon } from '../appIcon'

export const appForm = ({ props }) => {
  const children = () => ({
    appCheckBox,
    appAutoComplete,
    appComboBox,
    appIcon,
    appButton
  })

  return {
    template,
    styles,
    children
  }
}

const template = ({ html, props, toProp }) => {
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

    <div class="ctx-grid ctx-col-50 ctx-gap">

      <div class="ctx-grid ctx-col-65-35 ctx-gap">
        <app-auto-complete 
          ${toProp('label', 'Onde')}
          ${toProp('icon-start', 'pin_drop')}
          ${toProp('icon-end', 'cancel')}
          ${toProp('grouped', true)}
        >
        </app-auto-complete>

        <app-combo-box 
          ${toProp('label', 'Raio')}
          ${toProp('data', props.brands)}
          ${toProp('key', ['ID', 'Name'])}
          ${toProp('event', { listen: 'on-change-radio' })}
        ></app-combo-box>

      </div>

      <div class="ctx-grid ctx-col-50 ctx-gap">
        <app-combo-box 
          ${toProp('label', 'Marca')}
          ${toProp('data', props.brands)}
          ${toProp('key', ['ID', 'Name'])}
          ${toProp('event', { listen: 'on-change-make' })}
        ></app-combo-box>
        <app-combo-box 
          ${toProp('label', 'Modelo')}
          ${toProp('data', props.models)}
          ${toProp('key', ['ID', 'Name'])}
          ${toProp('event', { listen: 'on-change-model' })}
        ></app-combo-box>
      </div>

    </div>

    <div class="ctx-grid ctx-col-50 ctx-gap ctx-space-top">
      <div class="ctx-grid ctx-col-50 ctx-gap">
        <app-combo-box 
          ${toProp('label', 'Ano')}
          ${toProp('data', props.brands)}
          ${toProp('key', ['ID', 'Name'])}
          ${toProp('event', { listen: 'on-change-year' })}
        ></app-combo-box>
        <app-combo-box 
          ${toProp('label', 'Preço')}
          ${toProp('data', props.brands)}
          ${toProp('key', ['ID', 'Name'])}
          ${toProp('event', { listen: 'on-change-price' })}
        ></app-combo-box>      
      </div>

      <div class="ctx-grid ctx-col-100">
        <app-combo-box 
          ${toProp('label', 'Versão')}
          ${toProp('data', props.brands)}
          ${toProp('key', ['ID', 'Name'])}
          ${toProp('event', { listen: 'on-change-version' })}
        ></app-combo-box>     
      </div>
    </div> 
    <div class="ctx-grid ctx-col-25-25-50 ctx-gap ctx-space-top">
      
      <app-button
        ${toProp('styles', ['text-red', 'align-left'])}
      >
        <span class="material-symbols-rounded">
        navigate_next
        </span>
        Busca avançada
      </app-button>

      <app-button
      ${toProp('styles', ['text-grey', 'align-right'])}
      >
        <span class="material-symbols-rounded">
          backspace
        </span>
          Limpar formulário
      </app-button>

      <app-button
      ${toProp('styles', ['button-red'])}
      >
        <span class="material-symbols-rounded">
          filter_alt
        </span>
        Ver Ofertas
      </app-button>
    </div>  
  `
}

const styles = ({ ctx, css }) => css`
${ctx} {
  display:flex;
  flex-wrap:wrap;
  width:100%;
}

.ctx-check-box {
  width:100%;
  padding: 0 0 .5rem 0
}

.ctx-grid {
  display: grid;
  width:100%;
}

.ctx-space-top {
  margin-top: .5rem
}

.ctx-gap {
  gap: .5rem
}



.ctx-col-50 {
  grid-template-columns: 1fr 1fr;  
}
.ctx-col-65-35 {
  grid-template-columns: .65fr .35fr;  
}
.ctx-col-100 {
  grid-template-columns: 1fr;  
}
.ctx-col-25-25-50 {
  grid-template-columns: .25fr .25fr .5fr;  
}


`
