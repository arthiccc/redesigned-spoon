// ==UserScript==
// @name         Gunadarma Schedule Time Helper (White Text Header)
// @namespace    http://tampermonkey.net/
// @version      2.3
// @description  Adds a native-looking time reference table to Gunadarma's schedule page with white header text
// @match        https://baak.gunadarma.ac.id/jadwal/cariJadKul*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const timeSlots = [
        "07.30 - 08.30", "08.30 - 09.30", "09.30 - 10.30", "10.30 - 11.30",
        "11.30 - 12.30", "12.30 - 13.30", "13.30 - 14.30", "14.30 - 15.30",
        "15.30 - 16.30", "16.30 - 17.30", "17.30 - 18.30", "18.30 - 19.30",
        "19.30 - 20.30", "20.30 - 21.30"
    ];

    let tableHTML = `
    <table class="table table-custom table-primary table-fixed bordered-table stacktable large-only" style="margin-top: 20px;">
        <thead>
            <tr style="background-color: #b80924; color: #ffffff; font-weight: bold;">
                <th style="width: 50%; text-align: center;">JAM KE</th>
                <th style="width: 50%; text-align: center;">PUKUL</th>
            </tr>
        </thead>
        <tbody>`;

    timeSlots.forEach((time, index) => {
        tableHTML += `
            <tr>
                <td style="text-align: center;">${index + 1}</td>
                <td style="text-align: center;">${time}</td>
            </tr>`;
    });

    tableHTML += `
        </tbody>
    </table>`;

    const scheduleHeader = document.querySelector("h5");
    if (scheduleHeader) {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = tableHTML;
        wrapper.style.marginBottom = "20px";
        scheduleHeader.parentNode.insertBefore(wrapper, scheduleHeader);
    }
})();
