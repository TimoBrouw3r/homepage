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

currentDate();
currentTime();
