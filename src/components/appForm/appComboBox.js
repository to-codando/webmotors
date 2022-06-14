import { observerFactory } from 'lemejs'
import { repeat } from '../../helpers'

import { appComboItem } from './appComboItem'
import { formEventBus } from './eventDrive'

export const appComboBox = ({ props }) => {
  const state = observerFactory({
    title: '',
    id: null
  })

  const children = () => ({
    appComboItem
  })

  const hooks = () => ({
    beforeOnInit,
    afterOnRender
  })

  const beforeOnInit = () => {
    formEventBus.on('on-select-combo-item', (data) => {
      const dataItem = props.data.find(item => item.id === data.id)
      state.set({ ...dataItem })
    })
  }

  const afterOnRender = (dom) => {
    onToggle(dom)
  }

  const onToggle = ({ on, queryOnce }) => {
    const ul = queryOnce('ul')
    const span = queryOnce('span')
    on('click', [ul, span], ({ target }) => {
      ul.classList.toggle('active')
    })
  }

  return { template, styles, hooks, state, children }
}

const template = ({ state, props, toProp, html }) => html`
  <label class="ctx-label">

    <span class="ctx-title">
      ${props.label}: <input type="text" class="ctx-input" value=${state.title}>
    </span>

    <ul class="ctx-combo">
      ${
        repeat(props.data, (item) => html`
          <li>
            <app-combo-item ${toProp('id', +item.id)}>
              ${item.title}
            </app-combo-item>
          </li>
        `)
      }
    </ul>

    <span class="material-symbols-rounded ctx-icon">
      expand_more
    </span>
  </label>
`
const styles = ({ ctx, css }) => css`
${ctx} {
  display:flex;
  flex-wrap:wrap;
  width:100%;
  position: relative;
  border: 1px #ebebeb solid;  
  border-radius: 5px
}

.ctx-label {
  display: flex;
  align-items:center;
  width:100%; 
}

.ctx-input {
  display:flex;
  width:100%;
  height:30px;
  padding:0 .5rem;
  margin:3px 0 3px 5px;
  border-radius:3px;
  border:0; 
  border-left:0;
  outline:none;
  background: #f9f9f9
}

.ctx-combo {
  display:flex;
  flex-wrap: wrap;
  width:100%;
  height:0;
  opacity:0;
  max-height: 220px;
  border:1px #ebebeb solid;
  border-top:0;
  background: #fff;
  overflow: hidden;
  overflow-y: scroll;
  position:absolute;
  top:100%;
  z-index:1000;
  box-shadow: 0 5px 5px rgba(0, 0, 0, .3  )
}

.ctx-combo.active {
  height:auto;
  opacity:1
}

.ctx-combo li {
  display:flex;
  flex-wrap: wrap;
  width:100%;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: #fff;
  font-size: .875rem
}

.ctx-combo li + li {
  border-top: 1px #ebebeb solid
}

.ctx-icon {

}

.ctx-icon:hover {
  cursor: pointer;
}

.ctx-title {
  display: flex;
  align-items: center;
  width:100%;
  padding:0 0 0 .7rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  position:relative;
  font-size: .875rem;
  color: #666;
  font-weight:600
}
`
