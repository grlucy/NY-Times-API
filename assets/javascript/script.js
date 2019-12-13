$(document).ready(function() {
  // Declare variables
  var searchTermEl = $("#search-term");
  var numberRecordsEl = $("#number-records");
  var startYearEl = $("#start-year");
  var endYearEl = $("#end-year");

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
  });
  // Create click event for Clear button
  var clearBtn = $("clearBtn");
  clearBtn.on("click", function() {
    event.preventDefault();
  });
});
