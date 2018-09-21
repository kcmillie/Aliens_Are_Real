// from data.js
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var dateElement = d3.select("#datetime");
  var cityElement = d3.select("#city");
  var stateElement = d3.select("#state");
  var countryElement = d3.select("#country");
  var shapeElement = d3.select("#shape");

  // Get the value property of the input element
  var dateValue = dateElement.property("value");
  var cityValue = cityElement.property("value").toLowerCase();
  var stateValue = stateElement.property("value").toLowerCase();
  var countryValue = countryElement.property("value").toLowerCase();
  var shapeValue = shapeElement.property("value").toLowerCase();

  var filteredData = tableData.map(function(tableData) {
    return tableData;
  })
  if(dateValue){
    console.log("date entered: " + dateValue);
    filteredData = filteredData.filter(d => d.datetime === dateValue);
  }
  if(cityValue){
    console.log("city entered: " + cityValue);
    filteredData = filteredData.filter(d => d.city === cityValue);
  }
  if(stateValue){
    console.log("state entered: " + stateValue);
    filteredData = filteredData.filter(d => d.state === stateValue);
  }
  if(countryValue){
    console.log("country entered: " + countryValue);
    filteredData = filteredData.filter(d => d.country === countryValue);
  }
  if(shapeValue){
    console.log("shape entered: " + shapeValue);
    filteredData = filteredData.filter(d => d.shape === shapeValue);
  }

  // //select table
  var table = d3.select("table");
  // //Select table body
  var tbody = d3.select("tbody");

  filteredData.forEach((d) => {
    var row = tbody.append("tr");
    Object.entries(d).forEach(([k, v]) => {
      var cell = tbody.append("td");
      cell.text(v);
    });
  });
});