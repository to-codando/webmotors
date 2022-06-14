import { appIcon } from '../appIcon'

export const appAutoComplete = () => {
  const children = () => ({
    appIcon
  })
  return { template, styles, children }
}

const template = ({ props, html }) => html`
	<label class="ctx-label">
		<input type="text" class="ctx-input" />

		<div class="ctx-icon-start">
			<app-icon>${props.iconStart}</app-icon>
		</div>
		<div class="ctx-icon-end">
			<app-icon>${props.iconEnd}</app-icon>
		</div>

		<span>${props.label}</span>
	</label>
`

const styles = ({ ctx, props, css }) => {
  return css`
		${ctx} {
			display: flex;
			width: 100%;
		}

    ${ctx}::before  {
      content:'';
      height:5px;
      width:calc(100% - 2.1rem);
      position:absolute;
      z-index:100;
    }
		.ctx-label {
			width: 100%;
			height: 36px;
			position: relative;
		}

		.ctx-label > span {
			font-size: 1rem;
			position: absolute;
			top: 50%;
			left: 35px;
			transform: translateY(-50%);
			font-size: .875rem;
			color: #666;
			font-weight:600
		}

		.ctx-icon-start {
			position: absolute;
			top: 50%;
			left: 5px;
			transform: translateY(-50%);
		}
		
		.ctx-icon-end {
			position: absolute;
			top: 50%;
			right: 0.5rem;
			transform: translateY(-50%);
			border-radius: 100%;
			transition: all 0.2s ease-in;
			color: #ccc;
		}
		.ctx-icon-end:hover {
			color: #f00;
		}

		.ctx-input {
			display: flex;
			font-size: 1rem;
			font-weight: bold;
			color: #666;
			height: 36px;
			width: 100%;
			padding: 0 30px 0 80px;
			border-radius: 5px;
			border: 1px #ebebeb solid;
			outline-color: #ccc;
		}
	`
}
