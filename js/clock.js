function askName() {
  var name = prompt("Adınız nedir?");
  document.getElementById("myName").innerText = name;
}

function monthDiff() {
  var d1 = prompt("Doğum tarihin?");
  var d1 = new Date(d1);
  var d2 = new Date();
  var months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  document.getElementById("mydate").innerText = months;
}

function showTime() {
 var date = new Date();
 var h = date.getHours();
 var m = date.getMinutes();
 var s = date.getSeconds();
 var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
 var cday = days[date.getDay()];

 h = h < 10 ? "0" + h : h;
 m = m < 10 ? "0" + m : m;
 s = s < 10 ? "0" + s : s;

 var time = h + ":" + m + ":" + s + " " + cday;

 document.getElementById("myClock").innerText = time;
 document.getElementById("myClock").textContent = time;

 setTimeout(showTime, 1000);
}


askName();
monthDiff();
showTime();
