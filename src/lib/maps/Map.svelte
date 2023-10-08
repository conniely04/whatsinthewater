<script>
    import { Map } from "mapbox-gl";

    import "../../../node_modules/mapbox-gl/dist/mapbox-gl.css"
    import { onMount, onDestroy } from "svelte";

    let map;
    let mapContainer;
    let lng, lat, zoom;

    lat = 37.3387;
    lng = -121.8853;
    zoom = 9;

    function updateData() {
        zoom = map.getZoom();
        lng = map.getCenter().lng;
        lat = map.getCenter().lat;
    }

    onMount(() => {
        const initialState = { lng: lng, lat: lat, zoom: zoom };

        map = new Map({
            container: mapContainer,
            accessToken: `pk.eyJ1IjoiY29ubmllbHkyMDA0IiwiYSI6ImNsbmdqeWVvZTB6NXoyc2xmZzRqY2RicXoifQ._nLR-VuK8TtSrRdInnWm3w`,
            style: `mapbox://styles/mapbox/outdoors-v11`,
            center: [initialState.lng, initialState.lat],
            zoom: initialState.zoom,
        });

        map.on('move', () => {
            updateData();
        })
    });

    onDestroy(() => {
        map.remove();
    });
</script>

<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/mapbox-gl/dist/mapbox-gl.css">
</svelte:head>

<div class="map-wrap">
    <div class="sidebar">
        Longitude: {lng.toFixed(4)} | Latitude: {lat.toFixed(4)} | Zoom: {zoom.toFixed(2)}
    </div>
    <div class="map" bind:this={mapContainer} />
</div>

<style>
    .map {
        position: absolute;
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





