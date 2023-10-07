<script>
    let num = 0
    function click() {
        num += 1;
    }

</script>

<div class="main">
    <div class="nasa-header">
        Nasa Hackathon
    </div>
    <button on:click={click}>Counts: {num}</button>
</div>



<style>
    .main {
        border: 2px;
    }
    .nasa-header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 150px;
        font-size: 2.5em;
        font-weight: 700;
        letter-spacing: 1.5px;
        text-transform: uppercase;
    }
</style>



