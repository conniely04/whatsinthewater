<script>
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
    zoom = 5;

    function updateData() {
        zoom = map.getZoom();
        lon = map.getCenter().lng;
        lat = map.getCenter().lat;
    }

    function goTo() {
        if ("geolocation" in navigator) {
            // Request the user's current location
            navigator.geolocation.getCurrentPosition((position) => {
                lat = position.coords.latitude;
                lon = position.coords.longitude;
                console.log(lat)
                console.log(lon)
                // Create a marker at the user's location
                const marker = new mapbox.Marker()
                    .setLngLat([lon, lat])
                    .addTo(map);
                // Zoom the map to the user's location
                map.flyTo({
                    center: [lon, lat],
                    zoom: 12, // Adjust the zoom level as needed
                    essential: true // This animation is considered essential with regards to prefers-reduced-motion media query
                });
            }, (error) => {
                console.error("Error getting location:", error);
            });
        } else {
            alert("Geolocation is not supported by your browser.");
        }
    }

    function load() {
        map = new mapbox.Map({
            container,
            style: 'mapbox://styles/mapbox/satellite-streets-v11',
            center: [lon, lat],
            zoom,
            projection: 'globe'
        });
        map.on('load', () => {
            map.setFog({});
        });
    }
    onDestroy(() => {
        map.remove();
    });
</script>

<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/mapbox-gl/dist/mapbox-gl.css" on:load={load} />
</svelte:head>

<div class="map-wrap">
    <div class="sidebar">
        Longitude: {lon.toFixed(4)} | Latitude: {lat.toFixed(4)} | Zoom: {zoom.toFixed(2)}
    </div>
    <button class="locate-button" on:click={goTo}>Use My Location</button>
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
    button {
        position: absolute;
        z-index: 2;
    }
    .locate-button {
        position: absolute;
        right: 15px;
        top: 15px;
        background-color: white;
        border: black;
        border-radius: 30px;
        color: black;
        padding: 6px 12px;
        text-align: center;
        font-size: 16px;
        z-index: 1;
        cursor: pointer;
        transition: all 0.3s ease 0s;
    }

    .locate-button:active {
        background-color: black;
        color: white;
    }
</style>





