
var object = [
{
				"Ramadan": 1,
				"Days":"Sun",
				"Date": "03-Apr",
				"Sehar": "05:07 AM",
				"Iftar": "06:57 PM"
			},
			{
				"Ramadan": 2,
				"Days":"Mon",
				"Date": "04-Apr",
				"Sehar": "05:06 AM",
				"Iftar": "06:58 PM"
			},
			{
				"Ramadan": 3,
				"Days":"Tues",
				"Date": "05-Apr",
				"Sehar": "05:05 AM",
				"Iftar": "06:58 PM"
			},
			{
				"Ramadan": 4,
				"Days":"Wed",
				"Date": "06-Apr",
				"Sehar": "05:04 AM",
				"Iftar": "06:58 PM"
			},
			{
				"Ramadan": 5,
				"Days":"Thur",
				"Date": "07-Apr",
				"Sehar": "05:03 AM",
				"Iftar": "06:58 PM"
			},
			{
				"Ramadan": 6,
				"Days":"Fri",
				"Date": "08-Apr",
				"Sehar": "05:02 AM",
				"Iftar": "06:58 PM"
			},
			{
				"Ramadan": 7,
				"Days":"Sat",
				"Date": "09-Apr",
				"Sehar": "05:01 AM",
				"Iftar": "06:59 PM"
			},
			{
				"Ramadan": 8,
				"Days":"Sun",
				"Date": "10-Apr",
				"Sehar": "05:00 AM",
				"Iftar": "06:59 PM"
			},
			{
				"Ramadan": 9,
				"Days":"Mon",
				"Date": "11-Apr",
				"Sehar": "05:00 AM",
				"Iftar": "06:59 PM"
			},
			{
				"Ramadan": 10,
				"Days":"Tues",
				"Date": "12-Apr",
				"Sehar": "04:59 AM",
				"Iftar": "06:59 PM"
			},
			{
				"Ramadan": 11,
				"Days":"Wed",
				"Date": "13-Apr",
				"Sehar": "04:58 AM",
				"Iftar": "06:59 PM"
			},
			{
				"Ramadan": 12,
				"Days":"Thur",
				"Date": "14-Apr",
				"Sehar": "04:57 AM",
				"Iftar": "07:00 PM"
			},
			{

				"Ramadan": 13,
				"Days":"Fri",
				"Date": "15-Apr",
				"Sehar": "04:56 AM",
				"Iftar": "07:00 PM"
			},
			{
				"Ramadan": 14,
				"Days":"Sat",
				"Date": "16-Apr",
				"Sehar": "04:56 AM",
				"Iftar": "07:00 PM"
			},
			{
				"Ramadan": 15,
				"Days":"Sun",
				"Date": "17-Apr",
				"Sehar": "04:55 AM",
				"Iftar": "07:00 AM"
			},
			{
				"Ramadan": 16,
				"Days":"Mon",
				"Date": "18-Apr",
				"Sehar": "04:54 AM",
				"Iftar": "07:01 PM"
			},
			{
				"Ramadan": 17,
				"Days":"Tues",
				"Date": "19-Apr",
				"Sehar": "04:53 AM",
				"Iftar": "07:01 PM"
			},
			{
				"Ramadan": 18,
				"Days":"Wed",
				"Date": "20-Apr",
				"Sehar": "04:52 AM",
				"Iftar": "07:02 PM"
			},
			{
				"Ramadan": 19,
				"Days":"Thur",
				"Date": "21-Apr",
				"Sehar": "04:51 AM",
				"Iftar": "07:02 PM"
			},
			{
				"Ramadan": 20,
				"Days":"Fri",
				"Date": "22-Apr",
				"Sehar": "04:50 AM",
				"Iftar": "07:02 PM"
			},
			{
				"Ramadan": 21,
				"Days":"Sat",
				"Date": "23-Apr",
				"Sehar": "04:50 AM",
				"Iftar": "07:03 PM"
			},
			{
				"Ramadan": 22,
				"Days":"Sun",
				"Date": "24-Apr",
				"Sehar": "04:49 AM",
				"Iftar": "07:03 PM"
			},
			{
				"Ramadan": 23,
				"Days":"Mon",
				"Date": "25-Apr",
				"Sehar": "04:48 AM",
				"Iftar": "07:03 PM"
			},
			{
				"Ramadan": 24,
				"Days":"Tues",
				"Date": "26-Apr",
				"Sehar": "04:47 AM",
				"Iftar": "07:03 PM"
			},
			{
				"Ramadan": 25,
				"Days":"Wed",
				"Date": "27-Apr",
				"Sehar": "04:46 AM",
				"Iftar": "07:04 PM"
			},
			{
				"Ramadan": 26,
				"Days":"Thur",
				"Date": "28-Apr",
				"Sehar": "04:45 AM",
				"Iftar": "07:04 PM"
			},
			{
				"Ramadan": 27,
				"Days":"Fri",
				"Date": "29-Apr",
				"Sehar": "04:45 AM",
				"Iftar": "07:04 PM"
			},
			{
				"Ramadan": 28,
				"Days":"Sat",
				"Date": "30-Apr",
				"Sehar": "04:44 AM",
				"Iftar": "07:05 PM"
			},
			{
				"Ramadan": 29,
				"Days":"Sun",
				"Date": "01-May",
				"Sehar": "04:43 AM",
				"Iftar": "07:05 PM"
			},
			{
				"Ramadan": 30,
				"Days":"Mon",
				"Date": "02-May",
				"Sehar": "04:43 AM",
				"Iftar": "07:05 PM"
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
