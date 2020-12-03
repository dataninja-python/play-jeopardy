// MASTER NOTE 1: to help me understand jquery ajax better I spent some time on my favorite site: https://www.w3schools.com/jquery/ajax_ajax.asp



let categories = 12;

$(() => {


    $.ajax({
        url: `https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=${aBorough}&agency=NYPD`,
        type: "GET",
        data: {
            $limit: recordNumber,
            //   borough: BRONX,
            //   "$$app_token" : "YOURAPPTOKENHERE"
        }
    }).then(function (data) {

    });
});