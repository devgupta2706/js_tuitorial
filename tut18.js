const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Javascript date and time</title>
  </head>
  <style>
  .container{
      padding: 34px;
      margin: 100px;
      background-color: blanchedalmond;
      text-align: center;
      color: rgb(4, 12, 9);
      border: 4 px  solid black;
      text-decoration-color: black;
      font-size: 20px;
      border-radius: 18px;
  }
  #time{
       font-weight: bolder;
  
  }
  </style>
  <body>
      <div class="container">
          This is the clock
          <span id="time">
  
          </span>
      </div>
      <script>
          let now=new Date();
          console.log(now)
          // function display()
          // {let now=new Date();
          //    document.getElementById("time").innerHTML=now
          // }
          // setInterval(display,1000)
          let newDate=new Date("2055-09-26")
          console.log(newDate)
          let againdate=new Date(2025,05,27,14,45,00)
          console.log(againdate)
          // function display()
          // {let now=new Date();
          //    document.getElementById("time").innerHTML=now.getFullYear()
          //    document.getElementById("time").innerHTML=now.getMonth()
          //    document.getElementById("time").innerHTML=now.getDate()
          //    document.getElementById("time").innerHTML=now.getHours()
          //    document.getElementById("time").innerHTML=now.getMinutes()
          //    document.getElementById("time").innerHTML=now.getSeconds()
          // }
          // setInterval(display,1000)
          console.log(newDate.getFullYear())
          console.log(newDate.getMilliseconds())
          newDate.setDate(15)
          console.log(newDate)
          function displaytime()
          {
              document.getElementById("time").innerHTML=new Date();
          }
          setInterval(displaytime,1000)
      </script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});