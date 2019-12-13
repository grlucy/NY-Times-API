$(document).ready(function() {
  // Declare variables
  var searchTermEl = $("#search-term");
  var numberRecordsEl = $("#number-records");
  var startYearEl = $("#start-year");
  var endYearEl = $("#end-year");
  var articlesGoHereEl = $("#articlesGoHere");

  // Create click event for Search button
  var searchBtn = $("#searchBtn");
  searchBtn.on("click", function() {
    event.preventDefault();
    // Get value from text inputs
    var searchTermVal = searchTermEl.val();
    var numberRecordsVal = numberRecordsEl.val();
    var startYear = startYearEl.val();
    var endYear = endYearEl.val();
    console.log(searchTermVal);
    console.log(numberRecordsVal);
    console.log(startYear);
    console.log(endYear);
    // Need for loop here
    // Create a new div within articlesGoHereEl to house each article returned from API
    var newDiv = $("<div>");
    // Do things to the div
    articlesGoHereEl.append(newDiv);
  });

  // Create click event for Clear button
  var clearBtn = $("clearBtn");
  clearBtn.on("click", function() {
    event.preventDefault();
    // Empty all text inputs
    searchTermEl.empty();
    startYearEl.empty();
    endYearEl.empty();
    // Reset number of records to 5
    numberRecordsEl.val(5);
    // Clear the articles div
    articlesGoHereEl.empty();
  });
});
