function currentTime() {
  var date = new Date();
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("Clock").innerText = hour + " : " + min + " : " + sec;
    var t = setTimeout(function(){ currentTime() }, 1000);
}

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

function currentDate() {
  var date = new Date();
  var months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  var monthTemp = date.getMonth();
  var month = months[monthTemp];
  var day = date.getDate();
  document.getElementById("date").innerText = month + " " + day;
  var t = setTimeout(function(){ currentDate() }, 1000);
}

function currentDayPiece() {
  var date = new Date();
  var hour = date.getHours();
  var string = checkDayPiece(hour)
  document.getElementById("greeting").innerText =  string + " Grey";
  var t = setTimeout(function(){currentDayPiece()}, 1000);
}

function checkDayPiece(hour) {
  if (parseInt(hour) < 6){
      return "Go sleep";
    } else if (parseInt(hour) < 12) {
      return "Good Morning";
    } else if (parseInt(hour) < 18) {
      return "Good Afternoon";
    } else if (parseInt(hour) < 24) {
      return "Good Evening";
    } else {
      return "UNDEFINED";
  }

  }

currentDate();
currentTime();
currentDayPiece();
