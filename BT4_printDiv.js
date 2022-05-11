function printDiv() {
  var print = document.getElementById("print");
  for (var i = 1; i <= 10; i++) {
    // Nếu là số chẵn thì đổi bg màu đỏ
    if (i % 2 == 0) {
      //Tạo thẻ div bằng innerHTML
      print.innerHTML += `<div style="background : red; color:white; height:30px"> Div chẵn ${i} </div `;
    }
    // Ngược lại thì bg màu xanh
    else {
      //Tạo thẻ div bằng innerHTML
      print.innerHTML += `<div style="background : blue;color:white; height:30px"> Div lẻ ${i} </div `;
    }
  }
}
