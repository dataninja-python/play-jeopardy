// MASTER NOTE 1: to help me understand jquery ajax better I spent some time on my favorite site: https://www.w3schools.com/jquery/ajax_ajax.asp
// MASTER NOTE 2: to help me Jerrica was kind enough to provide a jeopardy API: https://jservice.io/


let numOfCategories = 24;

$(() => {

    $.ajax({
        url: `https://jservice.io/api/categories?count=${numOfCategories}`,
    }).then((data) => {
            console.log(data);
        });
});