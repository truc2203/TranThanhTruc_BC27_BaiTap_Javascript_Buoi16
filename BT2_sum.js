function sum()
{
    var x = +document.getElementById("x").value 
    var n = +document.getElementById("n").value
    var sum = document.getElementById("sum")

    //Biến cộng dồn tổng
    var total = 0

    // Vòng lăp chạy từ 1 --> n
    for(var i = 1; i<=n;i++)
    {
        total += x**i
        console.log(total)
    }
    sum.innerHTML = `Tổng : ${total}`
}