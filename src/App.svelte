
<script>
  let waterQualityData = null;

  async function fetchData() {
    try {
      const response = await fetch('https://www.waterqualitydata.us/data/summary/monitoringLocation/search?countycode=US%3A05%3A007&characteristicType=Nutrient&zip=yes&dataProfile=summaryMonitoringLocation&summaryYears=5&mimeType=geojson');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      waterQualityData = data; // Set the data to your component variable
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  fetchData(); // Call the function to fetch data when the component is loaded
</script>

<style>
  /* Add styling as needed */
</style>

<div>
  {#if waterQualityData}
    <h2>Water Quality Data</h2>
    <ul>
      {#each waterQualityData.features as feature (feature.id)}
        <li>{feature.properties.name}</li>
      {/each}
    </ul>
  {:else}
    <p>Loading data...</p>
  {/if}
</div>