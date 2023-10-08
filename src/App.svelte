<script>
    import Header from "./lib/Header.svelte";
    import Map from "./lib/maps/Map.svelte";
    import MapMarker from "./lib/maps/MapMarker.svelte";
</script>
<Header />
<Map lat={35} lon={-84} zoom={9}>
    <MapMarker lat={37.3361} lon={-121.8100} label="Lake Cunningham" />
</Map>