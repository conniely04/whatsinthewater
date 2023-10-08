<script>
    import { Map } from "mapbox-gl";
    import { mapbox, key } from './mapbox.js'
    import "../../../node_modules/mapbox-gl/dist/mapbox-gl.css"
    import { onMount, onDestroy, setContext } from "svelte";

    setContext(key, {
        getMap: () => map
    });

    let map;
    let container;
    export let lat;
    export let lon;
    export let zoom;

    lat = 37.3387;
    lon = -121.8853;
    zoom = 9;

    function updateData() {
        zoom = map.getZoom();
        lon = map.getCenter().lng;
        lat = map.getCenter().lat;
    }

    onMount(() => {

        map = new Map({
            container,
            accessToken: `pk.eyJ1IjoiY29ubmllbHkyMDA0IiwiYSI6ImNsbmdqeWVvZTB6NXoyc2xmZzRqY2RicXoifQ._nLR-VuK8TtSrRdInnWm3w`,
            style: `mapbox://styles/mapbox/navigation-night-v1`,
            center: [lon, lat],
            zoom,
            projection: 'globe',
        });
        map.on('move', () => {
            updateData();
        })
    });

    onDestroy(() => {
        map.remove();
    });

    console.log("hello")
</script>

<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/mapbox-gl/dist/mapbox-gl.css">
</svelte:head>

<div class="map-wrap">
    <div class="sidebar">
        Longitude: {lon.toFixed(4)} | Latitude: {lat.toFixed(4)} | Zoom: {zoom.toFixed(2)}
    </div>
    <div class="map" bind:this={container}>
        {#if map}
            <slot />
        {/if}
    </div>
</div>

<style>
    .map-wrap {
        position: relative;
        width: 80%;
        height: 80vh;
        border-style: solid;
        display: flex;
        margin: auto;
        justify-content: center;
        align-items: center;
    }
    .map {
        width: 100%;
        height: 100%;
    }
    .sidebar {
        background-color: rgba(35, 55, 75, 0.9);
        color: #fff;
        padding: 6px 12px;
        font-family: monospace;
        z-index: 1;
        position: absolute;
        top: 0;
        left: 0;
        margin: 12px;
        border-radius: 4px;
    }
</style>





