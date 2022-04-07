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
        margin:auto 0px;
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
	}

    .fas {
        padding-left: 4px;
    }

	.active .fas {
		transform: translateX(26px);
		color: #fff;
	}

	:not(.active) .fas::after {
		content: '🌞';
	}

	.active .fas::after {
		content: '🌙';
	}

	.active {
		background-color: rgb(64, 66, 91, 0.7);
		border-color: rgb(64, 66, 91, 0.7);
		box-shadow: -1px 2px 10px 0px rgba(255, 255, 255, 0.2);
	}
</style>
