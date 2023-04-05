"use strict";

/*
    File:   cookies_practice.js
    Author: Michael Grzesina (cst000)
    Course: CWEB 190
    Date:   4/5/2019
    Purpose: Create and display cookies on a web page
*/

$(document).ready(function() {
    $("#displayButton").on("click", function() {
        $("#cookieValues").text(document.cookie);
    });


    $("#setButton").on("click", function() {
        let cookieName = $("#nameField").val();
        let cookieValue = $("#valueField").val();
        let cookieString = encodeURIComponent(cookieName) + "=" + encodeURIComponent(cookieValue);

        if ($("[name=cookieType]:checked").val() === "persistent") {
            //let dateString = "Sun, 30 Jun 2019 12:00:00 GMT";
            let expiryDate = new Date();
            expiryDate.setDate(expiryDate.getDate() + 7);
            let dateString = expiryDate.toUTCString();
            cookieString += "; expires=" + dateString;
        }

        document.cookie = cookieString;
    });
});
