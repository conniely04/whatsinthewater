//function for getting data from click

export function handleMapClick() {
  const wqpAPIEndpoint = "https://www.waterqualitydata.us/data/Result/search";

  const latitude = encodeURIComponent("37.4125265");
  const longitude = encodeURIComponent("-122.0557291");
  const parameterCd = encodeURIComponent("79729");

  const params = {
    latitude: latitude,
    longitude: longitude,
    parameterCd: parameterCd,
    format: "json,",
  };

  const apiUrl = `${wqpAPIEndpoint}?${new URLSearchParams(params).toString()}`;

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
      displayToxicityData(data);
    })
    .catch((error) => {
      console.error(error);
      // Handle errors and display an error message to the user
    });
}

export function displayToxicityData(data) {
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
