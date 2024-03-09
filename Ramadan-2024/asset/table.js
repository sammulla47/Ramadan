var startDate = new Date("3/12/2024");
var daysInRamadan = 30;

var object = [];

// Assuming Sehar and Iftar timings for each day
var timingsArray = [
    
  ["05:26 AM", "06:50 PM"],
    ["05:25 AM", "06:50 PM"],
    ["05:24 AM", "06:50 PM"],
    ["05:24 AM", "06:50 PM"],
    ["05:23 AM", "06:51 PM"],
    ["05:22 AM", "06:51 PM"],
    ["05:21 AM", "06:51 PM"],
    ["05:20 AM", "06:51 PM"],
    ["05:19 AM", "06:52 PM"],
    ["05:19 AM", "06:52 PM"],
 ["05:18 AM", "06:52 PM"],
    ["05:18 AM", "06:52 PM"],
    ["05:17 AM", "06:53 PM"],
    ["05:16 AM", "06:53 PM"],
    ["05:15 AM", "06:53 PM"],
    ["05:14 AM", "06:54 PM"],
    ["05:13 AM", "06:54 PM"],
    ["05:12 AM", "06:54 PM"],
    ["05:11 AM", "06:55 PM"],
    ["05:10 AM", "06:55 PM"],
 ["05:09 AM", "06:55 PM"],
    ["05:08 AM", "06:55 PM"],
    ["05:07 AM", "06:55 PM"],
    ["05:06 AM", "06:56 PM"],
    ["05:05 AM", "06:56 PM"],
    ["05:04 AM", "06:56 PM"],
    ["05:03 AM", "06:56 PM"],
    ["05:02 AM", "06:56 PM"],
    ["05:01 AM", "06:57 PM"],
    ["05:00 AM", "06:57 PM"],
];

for (var i = 0; i < daysInRamadan; i++) {
    var currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    // Format the date as "dd-MMM-yyyy"
    var dateString = currentDate.getDate() + '-' + getMonthAbbreviation(currentDate.getMonth()) + '-' + currentDate.getFullYear();

    var dayName = getDayName(currentDate.getDay());

    // Get Sehar and Iftar timings from the array
    var seharTime = timingsArray[i][0];
    var iftarTime = timingsArray[i][1];

    var schedule = {
        "Ramadan": i + 1,
        "Days": dayName,
        "Date": dateString,
        "Sehar": seharTime,
        "Iftar": iftarTime
    };

    object.push(schedule);
}

function getDayName(dayIndex) {
    var daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return daysOfWeek[dayIndex];
}

function getMonthAbbreviation(monthIndex) {
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[monthIndex];
}

function createTable() {
    $('#content').append('<table id="jsonTable" class="inner_table"><thead class="wraps"><tr></tr></thead><tbody></tbody></table>');

    $.each(Object.keys(object[0]), function (index, key) {
        $('#jsonTable thead tr').append('<th>' + key + '</th>');
    });
    $.each(object, function (index, jsonObject) {
        if (Object.keys(jsonObject).length > 0) {
            var tableRow = '<tr>';
            $.each(Object.keys(jsonObject), function (i, key) {
                tableRow += '<td>' + jsonObject[key] + '</td>';
            });
            tableRow += "</tr>";
            $('#jsonTable tbody').append(tableRow);
        }
    });
}

$(document).ready(function () {
    createTable();

var now = new Date();
    var today = now.getDate() + '-' + getMonthAbbreviation(now.getMonth()) + '-' + now.getFullYear();

    var todaySchedule = object.find(schedule => schedule.Date === today);
    
    if (todaySchedule) {
        $('#Ramadan').text(todaySchedule.Ramadan);
        $('#date').text(todaySchedule.Date);
        $('#days').text(todaySchedule.Days);
        $('#sehri-time').text(todaySchedule.Sehar);
        $('#Ifter-time').text(todaySchedule.Iftar);
    } else {
        console.log('No schedule found for today.');
    }
});
