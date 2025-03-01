var startDate = new Date("3/02/2025");
var daysInRamadan = 30;

var object = [];


// Assuming Sehar and Iftar timings for each day
var timingsArray = [
    ["5:34 AM", "6:47 PM"],
    ["5:33 AM", "6:47 PM"],
    ["5:32 AM", "6:48 PM"],
    ["5:32 AM", "6:48 PM"],
    ["5:31 AM", "6:48 PM"],
    ["5:30 AM", "6:48 PM"],
    ["5:29 AM", "6:48 PM"],
    ["5:29 AM", "6:49 PM"],
    ["5:28 AM", "6:49 PM"],
    ["5:27 AM", "6:49 PM"],
    ["5:26 AM", "6:50 PM"],
    ["5:25 AM", "6:50 PM"],
    ["5:24 AM", "6:50 PM"],
    ["5:24 AM", "6:50 PM"],
    ["5:23 AM", "6:51 PM"],
    ["5:22 AM", "6:51 PM"],
    ["5:21 AM", "6:51 PM"],
    ["5:20 AM", "6:51 PM"],
    ["5:19 AM", "6:52 PM"],
    ["5:19 AM", "6:52 PM"],
    ["5:18 AM", "6:52 PM"],
    ["5:18 AM", "6:52 PM"],
    ["5:17 AM", "6:53 PM"],
    ["5:16 AM", "6:53 PM"],
    ["5:15 AM", "6:53 PM"],
    ["5:14 AM", "6:54 PM"],
    ["5:13 AM", "6:54 PM"],
    ["5:12 AM", "6:54 PM"],
    ["5:11 AM", "6:55 PM"],
    ["5:10 AM", "6:55 PM"]
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
