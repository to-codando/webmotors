export const appTab = ({ props }) => {
  return {
    template,
    styles
  }
}

const template = ({ html }) => {
  return html`
		<slot></slot>
	`
}

const styles = ({ ctx, css }) => css`
	${ctx} {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		height: 235px;
		background: #f1f1f1;
		position: relative;
	}

	.ctx-content {
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
		height: 170px;
		padding: 1rem;
		background: #fff;
		position: relative;
	}
`
