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
        let days = 0; // 0 days will create a session cookie

        if ($("[name=cookieType]:checked").val() === "persistent") {
            // Set the expiration date to 7 days in the future
            days = 7;
        }

        setCookie($("#nameField").val(), $("#valueField").val(), days);
    });
});
