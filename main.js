// ==UserScript==
// @name         Gunadarma Schedule Time Helper (Fixed Side Table)
// @namespace    http://tampermonkey.net/
// @version      1.3
// @description  Adds a time reference table beside Gunadarma's schedule
// @match        https://baak.gunadarma.ac.id/jadwal/cariJadKul*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Define the time slots
    const timeSlots = [
        "07:30 - 08:30", "08:30 - 09:30", "09:30 - 10:30", "10:30 - 11:30",
        "11:30 - 12:30", "12:30 - 13:30", "13:30 - 14:30", "14:30 - 15:30",
        "15:30 - 16:30", "16:30 - 17:30", "17:30 - 18:30", "18:30 - 19:30",
        "19:30 - 20:30", "20:30 - 21:30"
    ];

    // Create the reference table
    let tableHTML = `<table style="border-collapse: collapse; background: #f9f9f9; border: 1px solid #ccc;">
                        <tr style="background: #e0e0e0; font-weight: bold;">
                            <th style="border: 1px solid #ccc; padding: 5px;">Jam ke-</th>
                            <th style="border: 1px solid #ccc; padding: 5px;">Waktu</th>
                        </tr>`;

    timeSlots.forEach((time, index) => {
        tableHTML += `<tr>
                        <td style="border: 1px solid #ccc; padding: 5px; text-align: center;">${index + 1}</td>
                        <td style="border: 1px solid #ccc; padding: 5px; text-align: center;">${time}</td>
                      </tr>`;
    });

    tableHTML += `</table>`;

    // Find the schedule table
    let scheduleTable = document.querySelector("table");
    if (scheduleTable) {
        let container = document.createElement("div");
        container.style.display = "flex";
        container.style.alignItems = "flex-start"; // Align top
        container.style.gap = "20px"; // Add spacing

        // Create a wrapper for the time reference table
        let timeTableDiv = document.createElement("div");
        timeTableDiv.innerHTML = tableHTML;
        timeTableDiv.style.flex = "0 0 auto"; // Prevents stretching

        // Insert the container
        let parent = scheduleTable.parentNode;
        parent.insertBefore(container, scheduleTable);

        // Append time reference table first (left side), then the schedule table
        container.appendChild(timeTableDiv);
        container.appendChild(scheduleTable);
    }
})();
