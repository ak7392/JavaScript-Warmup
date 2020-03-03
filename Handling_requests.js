function sendrequests(ordernumber) {
    console.log("This is order number 1", ordernumber);

    serve_requests(function () {
        console.log("order is delivered", ordernumber);
    });

}

function serve_requests(callback) {
    setTimeout(callback, 5000);
}

sendrequests(1);
sendrequests(2);
sendrequests(3);
sendrequests(4);