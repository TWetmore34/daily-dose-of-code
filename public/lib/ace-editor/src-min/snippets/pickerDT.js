var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'datasoft123',
  database : challenge_db          /* database? */
});

connection.connect();

// Date object
  var today = new Date();
// Current Date
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// Current Time
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// Current Date and Time
  var dateTime = date+' '+time;

connection.query('SET @DT = dateTime', function(err, rows)     /* dateTime is the column in the table */
{
  if (err) throw err;

  console.log(rows[0]);
});


/* starting_date is the column name contents of Challenge table.  contents of DT  is inserted */
connection.query('UPDATE Challenge SET starting_date = DT', function(err) 
  {
    if (err) throw err
    
    console.log(rows[0]);
   })

connection.query('SELECT * FROM Challenge', function(err, rows)     /* Challenge is the table */
{
  if (err) throw err;

  console.log(rows[0]);
});