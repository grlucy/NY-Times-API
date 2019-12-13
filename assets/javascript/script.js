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
    // Interface with API
    // queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=canada&api-key=PVhkpNf6oRHLZzBRz8qh2olTphYL39Rx";
    queryURL =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      searchTermVal +
      "&fq=pub_year:[" +
      startYear +
      "%20TO%20" +
      endYear +
      "]&api-key=PVhkpNf6oRHLZzBRz8qh2olTphYL39Rx";
    console.log(queryURL);
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(result) {
      console.log(result);
      //log title
      console.log(result.response.docs[7].headline.main);
      //log author
      console.log(result.response.docs[7].byline.original);
      //log section
      console.log(result.response.docs[7].section_name);
      //log publication date
      console.log(result.response.docs[7].pub_date);
      //log URL
      console.log(result.response.docs[7].web_url);
      for (var i = 0; i < numberRecordsVal; i++) {
        // Create a new div within articlesGoHereEl to house each article returned from API
        var newDiv = $("<div>");
        // Adding title to div
        newDiv.append(
          $("<h1>" + result.response.docs[i].headline.main + "</h1>")
        );
        articlesGoHereEl.append(newDiv);
      }
    });
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
