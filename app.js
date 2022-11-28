for (var i = 1; i < product.length; i++) {
  document.getElementById("select1").innerHTML += `
        <option value="${i}">${product[i].title}</option>
        `;
  document.getElementById("select2").innerHTML += `
        <option value="${i}">${product[i].title}</option>
        `;
}

function item1(a) {
  var select2 = document.getElementById("select2").value;
  if (a != select2) {
    document.getElementById("img1").src = product[a].image
    document.getElementById("price1").innerHTML = "PKR " + product[a].price
    document.getElementById("rd1").innerHTML = product[a].releasedate
    document.getElementById("brand1").src = product[a].brand
    document.getElementById("sim1").innerHTML = product[a].sim
    document.getElementById("dimension1").innerHTML = product[a].dimension
    document.getElementById("weight1").innerHTML = product[a].weight
    document.getElementById("os1").innerHTML = product[a].os
    document.getElementById("s-size1").innerHTML = product[a].screensize
    document.getElementById("s-resolution1").innerHTML = product[a].screenresolution
    document.getElementById("s-type1").innerHTML = product[a].screentype
    document.getElementById("s-protection1").innerHTML = product[a].screenprotection
    document.getElementById("memory1").innerHTML = product[a].internalmemory
    document.getElementById("ram1").innerHTML = product[a].ram
    document.getElementById("cardslot1").innerHTML = product[a].cardslot
    document.getElementById("processor1").innerHTML = product[a].processor
    document.getElementById("gpu1").innerHTML = product[a].gpu
    document.getElementById("battery1").innerHTML = product[a].type
    document.getElementById("f-camera1").innerHTML = product[a].front
    document.getElementById("b-camera1").innerHTML = product[a].back
    document.getElementById("flight1").innerHTML = product[a].frontlight
    document.getElementById("blight1").innerHTML = product[a].backlight
    document.getElementById("frecording1").innerHTML = product[a].frontrecording
    document.getElementById("brecording1").innerHTML = product[a].backrecording
    document.getElementById("bluetooth1").innerHTML = product[a].bluetooth
    document.getElementById("threeg1").innerHTML = product[a].threeg
    document.getElementById("fourg1").innerHTML = product[a].fourg
    document.getElementById("fiveg1").innerHTML = product[a].fiveg
    document.getElementById("radio1").innerHTML = product[a].radio
    document.getElementById("wifi1").innerHTML = product[a].wifi
    document.getElementById("nfc1").innerHTML = product[a].nfc

  }
  else {
    document.getElementById("select1").selectedIndex = 0;
    document.getElementById("img1").src = product[0].image
    document.getElementById("price1").innerHTML = ""
    document.getElementById("rd1").innerHTML = ""
    document.getElementById("brand1").src = product[a].brand
    document.getElementById("sim1").innerHTML = ""
    document.getElementById("dimension1").innerHTML = ""
    document.getElementById("weight1").innerHTML = ""
    document.getElementById("os1").innerHTML = ""
    document.getElementById("s-size1").innerHTML = ""
    document.getElementById("s-resolution1").innerHTML = ""
    document.getElementById("s-type1").innerHTML = ""
    document.getElementById("s-protection1").innerHTML = ""
    document.getElementById("memory1").innerHTML = ""
    document.getElementById("ram1").innerHTML = ""
    document.getElementById("cardslot1").innerHTML = ""
    document.getElementById("processor1").innerHTML = ""
    document.getElementById("gpu1").innerHTML = ""
    document.getElementById("battery1").innerHTML = ""
    document.getElementById("f-camera1").innerHTML = ""
    document.getElementById("b-camera1").innerHTML = ""
    document.getElementById("flight1").innerHTML = ""
    document.getElementById("blight1").innerHTML = ""
    document.getElementById("frecording1").innerHTML = ""
    document.getElementById("brecording1").innerHTML = ""
    document.getElementById("bluetooth1").innerHTML = ""
    document.getElementById("threeg1").innerHTML = ""
    document.getElementById("fourg1").innerHTML = ""
    document.getElementById("fiveg1").innerHTML = ""
    document.getElementById("radio1").innerHTML = ""
    document.getElementById("wifi1").innerHTML = ""
    document.getElementById("nfc1").innerHTML = ""
  }
}
function item2(a) {
  var select1 = document.getElementById("select1").value;
  if (a != select1) {
    document.getElementById("img2").src = product[a].image
    document.getElementById("price2").innerHTML = "PKR " + product[a].price
    document.getElementById("rd2").innerHTML = product[a].releasedate
    document.getElementById("brand2").src = product[a].brand
    document.getElementById("sim2").innerHTML = product[a].sim
    document.getElementById("dimension2").innerHTML = product[a].dimension
    document.getElementById("weight2").innerHTML = product[a].weight
    document.getElementById("os2").innerHTML = product[a].os
    document.getElementById("s-size2").innerHTML = product[a].screensize
    document.getElementById("s-resolution2").innerHTML = product[a].screenresolution
    document.getElementById("s-type2").innerHTML = product[a].screentype
    document.getElementById("s-protection2").innerHTML = product[a].screenprotection
    document.getElementById("memory2").innerHTML = product[a].internalmemory
    document.getElementById("ram2").innerHTML = product[a].ram
    document.getElementById("cardslot2").innerHTML = product[a].cardslot
    document.getElementById("processor2").innerHTML = product[a].processor
    document.getElementById("gpu2").innerHTML = product[a].gpu
    document.getElementById("battery2").innerHTML = product[a].type
    document.getElementById("f-camera2").innerHTML = product[a].front
    document.getElementById("b-camera2").innerHTML = product[a].back
    document.getElementById("flight2").innerHTML = product[a].frontlight
    document.getElementById("blight2").innerHTML = product[a].backlight
    document.getElementById("frecording2").innerHTML = product[a].frontrecording
    document.getElementById("brecording2").innerHTML = product[a].backrecording
    document.getElementById("bluetooth2").innerHTML = product[a].bluetooth
    document.getElementById("threeg2").innerHTML = product[a].threeg
    document.getElementById("fourg2").innerHTML = product[a].fourg
    document.getElementById("fiveg2").innerHTML = product[a].fiveg
    document.getElementById("radio2").innerHTML = product[a].radio
    document.getElementById("wifi2").innerHTML = product[a].wifi
    document.getElementById("nfc2").innerHTML = product[a].nfc
  }
  else {
    document.getElementById("select2").selectedIndex = 0;
    document.getElementById("img2").src = product[a].image
    document.getElementById("price2").innerHTML = ""
    document.getElementById("rd2").innerHTML = ""
    document.getElementById("brand2").src = product[a].brand
    document.getElementById("sim2").innerHTML = ""
    document.getElementById("dimension2").innerHTML = ""
    document.getElementById("weight2").innerHTML = ""
    document.getElementById("os2").innerHTML = ""
    document.getElementById("s-size2").innerHTML = ""
    document.getElementById("s-resolution2").innerHTML = ""
    document.getElementById("s-type2").innerHTML = ""
    document.getElementById("s-protection2").innerHTML = ""
    document.getElementById("memory2").innerHTML = ""
    document.getElementById("ram2").innerHTML = ""
    document.getElementById("cardslot2").innerHTML = ""
    document.getElementById("processor2").innerHTML = ""
    document.getElementById("gpu2").innerHTML = ""
    document.getElementById("battery2").innerHTML = ""
    document.getElementById("f-camera2").innerHTML = ""
    document.getElementById("b-camera2").innerHTML = ""
    document.getElementById("flight2").innerHTML = ""
    document.getElementById("blight2").innerHTML = ""
    document.getElementById("frecording2").innerHTML = ""
    document.getElementById("brecording2").innerHTML = ""
    document.getElementById("bluetooth2").innerHTML = ""
    document.getElementById("threeg2").innerHTML = ""
    document.getElementById("fourg2").innerHTML = ""
    document.getElementById("fiveg2").innerHTML = ""
    document.getElementById("radio2").innerHTML = ""
    document.getElementById("wifi2").innerHTML = ""
    document.getElementById("nfc2").innerHTML = ""
  }
}




$(".testmonial_slider_area").owlCarousel({
  autoplay: true,
  slideSpeed: 1000,
  items: 3,
  loop: true,
  nav: true,
  navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
  margin: 30,
  dots: true,
  responsive: {
    320: {
      items: 1
    },
    767: {
      items: 2
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }

});

function search_product() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('product-search');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }
  }
}








function huawei() {
  var modal = document.getElementById("myModal");
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function tecno() {
  var modal = document.getElementById("myModal2");
  var btn = document.getElementById("myBtn2");
  var span = document.getElementsByClassName("close2")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function infinix() {
  var modal = document.getElementById("myModal3");
  var btn = document.getElementById("myBtn3");
  var span = document.getElementsByClassName("close3")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function realme() {
  var modal = document.getElementById("myModal4");
  var btn = document.getElementById("myBtn4");
  var span = document.getElementsByClassName("close4")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function apple() {
  var modal = document.getElementById("myModal5");
  var btn = document.getElementById("myBtn5");
  var span = document.getElementsByClassName("close5")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function samsung() {
  var modal = document.getElementById("myModal6");
  var btn = document.getElementById("myBtn6");
  var span = document.getElementsByClassName("close6")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function oppo() {
  var modal = document.getElementById("myModal7");
  var btn = document.getElementById("myBtn7");
  var span = document.getElementsByClassName("close7")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}


function vivo() {
  var modal = document.getElementById("myModal8");
  var btn = document.getElementById("myBtn8");
  var span = document.getElementsByClassName("close8")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  }
  span.onclick = function () {
    modal.style.display = "none";
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}






function tentotwenty() {
  // var one = document.getElementById("ten-twenty");
  // var two = document.getElementById("ten-twenty");
  var three = document.getElementById("ten-twenty");
  var four = document.getElementById("twenty-thirty");
  var five = document.getElementById("thirty-fourty");
  var six = document.getElementById("fourty-fifty");
  var seven = document.getElementById("fifty-seventy");
  var eight = document.getElementById("seventy-ninety");
  // two.style.display = "none";
  three.style.display = "none";
  four.style.display = "none";
  five.style.display = "none";
  six.style.display = "none";
  seven.style.display = "none";
  eight.style.display = "none";
}
