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
  var cityValue = cityElement.property("value");
  var stateValue = stateElement.property("value");
  var countryValue = countryElement.property("value");
  var shapeValue = shapeElement.property("value");

  console.log("date entered: " + dateValue);
  console.log("city entered: " + cityValue);
  console.log("state entered: " + stateValue);
  console.log("country entered: " + countryValue);
  console.log("shape entered: " + shapeValue);

  // var filteredData = tableData.filter(d => d.datetime === inputValue);

  // //select table
  // var table = d3.select("table");
  // //Select table body
  // var tbody = d3.select("tbody");

  // for (var i in filteredData){
  //     var row = tbody.append("tr");
  //     var dictionary = filteredData[i];
  //     for (var key in dictionary){
  //         row.append("td").text(dictionary[key]);
  //     }
  // }

});
