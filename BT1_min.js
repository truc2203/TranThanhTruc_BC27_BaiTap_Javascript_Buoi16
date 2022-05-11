function a()
{   
    var minNumber = document.getElementById("minNumber")
    //Biến đếm
    var i = 0

    //Biến cộng dồn tổng
    var total = 0

    // Dừng khi total > 10000
    while(total < 10000)
    {
        i++
        total += i
    }
    minNumber.innerHTML = ` Số nguyên dương nhỏ nhất : ${i}`

}
a()

function test()
{
    var input = document.getElementById("input").value

    var container = document.getElementById("container")
    for(var i = 1; i<=input; i++ )
    {
        if(i % 2 == 0)
        {

            container.innerHTML += `<div style="background : red; color:white;"> Div chẵn ${i} </div `
  
            container.style.background = "red"
        }
        else{
            container.innerHTML += `<div style="background : blue;color:white;"> Div lẻ ${i} </div `

            container.style.background = "blue"
        }
    }

}