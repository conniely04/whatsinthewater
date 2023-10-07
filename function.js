//function for getting data from click

function handleMapClick(latLng) {
  const wqpAPIEndpoint = "https://www.waterqualitydata.us/data/Result/search";

  const latitude = latLng.lat();
  const longitude = latLng.lng();

  const params = {
    latitude: latitude,
    longitude: longitude,
    parameterCd: "79729",
    format: "json,",
  };

  const apiUrl = `${wqpApiEndpoint}?${new URLSearchParams(params).toString()}`;

  fetch(apiUrl)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Error fetching data from the WQP API");
      }
    })
    .then((data) => {
      // Process and display the retrieved toxicity data
      displayToxicityalData(data);
    })
    .catch((error) => {
      console.error(error);
      // Handle errors and display an error message to the user
    });
}

function displayToxcityData(data) {
  let html = "<h2>Toxicity Data</h2>";
  html += "<ul>";
  data.value.forEach((item) => {
    html += `<li>${item.parameter.name}: ${item.result.value} ${item.result.unit}</li>`;
  });
  html += "</ul>";

  // Display the formatted data in the dataDisplay div
  const dataDisplay = document.getElementById("dataDisplay");
  dataDisplay.innerHTML = html;
}
