
var object = [
{
				"Ramadan": 1,
				"Days":"Fri",
				"Date": "24-Mar",
				"Sehar": "05:17 AM",
				"Iftar": "06:55 PM"
			},
			{
				"Ramadan": 2,
				"Days":"Sat",
				"Date": "25-Mar",
				"Sehar": "05:16 AM",
				"Iftar": "06:55 PM"
			},
			{
				"Ramadan": 3,
				"Days":"Sun",
				"Date": "26-Mar",
				"Sehar": "05:15 AM",
				"Iftar": "06:55 PM"
			},
			{
				"Ramadan": 4,
				"Days":"Mon",
				"Date": "27-Mar",
				"Sehar": "05:14 AM",
				"Iftar": "06:56 PM"
			},
			{
				"Ramadan": 5,
				"Days":"Tues",
				"Date": "28-Mar",
				"Sehar": "05:13 AM",
				"Iftar": "06:56 PM"
			},
			{
				"Ramadan": 6,
				"Days":"Wed",
				"Date": "29-Mar",
				"Sehar": "05:12 AM",
				"Iftar": "06:56 PM"
			},
			{
				"Ramadan": 7,
				"Days":"Thurs",
				"Date": "30-Mar",
				"Sehar": "05:11 AM",
				"Iftar": "06:57 PM"
			},
			{
				"Ramadan": 8,
				"Days":"Fri",
				"Date": "31-Mar",
				"Sehar": "05:10 AM",
				"Iftar": "06:57 PM"
			},
			{
				"Ramadan": 9,
				"Days":"Sat",
				"Date": "01-Apr",
				"Sehar": "05:09 AM",
				"Iftar": "06:57 PM"
			},
			{
				"Ramadan": 10,
				"Days":"Sun",
				"Date": "02-Apr",
				"Sehar": "05:08 AM",
				"Iftar": "06:59 PM"
			},
			{
				"Ramadan": 11,
				"Days":"Mon",
				"Date": "03-Apr",
				"Sehar": "05:07 AM",
				"Iftar": "06:57 PM"
			},
			{
				"Ramadan": 12,
				"Days":"Tues",
				"Date": "04-Apr",
				"Sehar": "05:06 AM",
				"Iftar": "06:58 PM"
			},
			{

				"Ramadan": 13,
				"Days":"Wed",
				"Date": "05-Apr",
				"Sehar": "05:05 AM",
				"Iftar": "06:58 PM"
			},
			{
				"Ramadan": 14,
				"Days":"Thurs",
				"Date": "06-Apr",
				"Sehar": "05:04 AM",
				"Iftar": "06:58 PM"
			},
			{
				"Ramadan": 15,
				"Days":"Fri",
				"Date": "07-Apr",
				"Sehar": "05:03 AM",
				"Iftar": "06:58 AM"
			},
			{
				"Ramadan": 16,
				"Days":"Sat",
				"Date": "08-Apr",
				"Sehar": "05:02 AM",
				"Iftar": "06:58 PM"
			},
			{
				"Ramadan": 17,
				"Days":"Sun",
				"Date": "09-Apr",
				"Sehar": "05:01 AM",
				"Iftar": "06:59 PM"
			},
			{
				"Ramadan": 18,
				"Days":"Mon",
				"Date": "10-Apr",
				"Sehar": "05:00 AM",
				"Iftar": "06:59 PM"
			},
			{
				"Ramadan": 19,
				"Days":"Tues",
				"Date": "11-Apr",
				"Sehar": "05:00 AM",
				"Iftar": "06:59 PM"
			},
			{
				"Ramadan": 20,
				"Days":"Wed",
				"Date": "12-Apr",
				"Sehar": "04:59 AM",
				"Iftar": "06:59 PM"
			},
			{
				"Ramadan": 21,
				"Days":"Thurs",
				"Date": "13-Apr",
				"Sehar": "04:58 AM",
				"Iftar": "07:00 PM"
			},
			{
				"Ramadan": 22,
				"Days":"Fri",
				"Date": "14-Apr",
				"Sehar": "04:57 AM",
				"Iftar": "07:00 PM"
			},
			{
				"Ramadan": 23,
				"Days":"Sat",
				"Date": "15-Apr",
				"Sehar": "04:56 AM",
				"Iftar": "07:00 PM"
			},
			{
				"Ramadan": 24,
				"Days":"Sun",
				"Date": "16-Apr",
				"Sehar": "04:56 AM",
				"Iftar": "07:00 PM"
			},
			{
				"Ramadan": 25,
				"Days":"Mon",
				"Date": "17-Apr",
				"Sehar": "04:55 AM",
				"Iftar": "07:00 PM"
			},
			{
				"Ramadan": 26,
				"Days":"Tues",
				"Date": "18-Apr",
				"Sehar": "04:54 AM",
				"Iftar": "07:01 PM"
			},
			{
				"Ramadan": 27,
				"Days":"Wed",
				"Date": "19-Apr",
				"Sehar": "04:53 AM",
				"Iftar": "07:01 PM"
			},
			{
				"Ramadan": 28,
				"Days":"Thurs",
				"Date": "20-Apr",
				"Sehar": "04:52 AM",
				"Iftar": "07:02 PM"
			},
			{
				"Ramadan": 29,
				"Days":"Fri",
				"Date": "21-Apr",
				"Sehar": "05:51 AM",
				"Iftar": "07:02 PM"
			},
			{
				"Ramadan": 30,
				"Days":"Sat",
				"Date": "22-Apr",
				"Sehar": "05:51 AM",
				"Iftar": "07:02 PM"
			}
];

function createTable(){
	$('#content').append('<table id="jsonTable" class="inner_table"><thead class="wraps"><tr></tr></thead><tbody></tbody></table>');
	
  $.each(Object.keys(object[0]), function(index, key){
    $('#jsonTable thead tr').append('<th>' + key + '</th>');
  });	
  $.each(object, function(index, jsonObject){     
    if(Object.keys(jsonObject).length > 0){
      var tableRow = '<tr>';
      $.each(Object.keys(jsonObject), function(i, key){
         tableRow += '<td>' + jsonObject[key] + '</td>';
      });
      tableRow += "</tr>";
      $('#jsonTable tbody').append(tableRow);
    }
	});
}

$(document).ready(function(){
  createTable();
});
