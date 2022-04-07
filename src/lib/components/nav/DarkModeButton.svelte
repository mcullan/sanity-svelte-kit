<script>
	let active = true;
</script>

<div on:click={() => (active = !active)} class="btn-container {active === true ? 'active' : ''} ">
	<i class="fas active0" />
</div>

<style>
	.btn-container,
	.fas {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-style: normal;
	}

	.btn-container {
		margin: auto 0px;
		margin-bottom: 2px;
		margin-left: 20px;
		margin-right: 2px;
		width: 50px;
		height: 20px;
		display: flex;
		border: 1px solid gray;
		position: relative;
		border-radius: 4px;
		background-color: rgb(245, 245, 245);
		transition: all 200ms ease;
	}

	i {
		color: #111;
		font-size: 14px;
		transition: all 400ms ease;
		overflow: visible;
	}

	.fas {
		padding-left: 4px;
	}

	.active .fas {
		transform: translateX(29px);
		color: #fff;
		overflow: visible;
	}

	.fas::after {
		padding: 2px 4px 0px 1px;
		margin: 0px -4px;
		border-radius: 2px;
	}

	:not(.active) .fas::after {
		content: '🌞';
		background-color: rgb(222, 211, 211);
		border-color: rgba(48, 51, 87, 0.7);
	}

	.active .fas::after {
		content: '🌙';
		background-color: rgb(24, 19, 70);
		border-color: rgba(48, 51, 87, 0.7);
	}

	.active {
		background-color: rgba(48, 51, 87, 0.7);
		border-color: rgb(64, 66, 91, 0.7);
		box-shadow: -1px 4px 10px 5px rgba(107, 89, 89, 0.2);
	}

	div:not(.active) {
		background-color: rgba(233, 233, 237, 0.7);
		box-shadow: -1px 4px 10px 5px rgba(107, 89, 89, 0.2);
	}
</style>
