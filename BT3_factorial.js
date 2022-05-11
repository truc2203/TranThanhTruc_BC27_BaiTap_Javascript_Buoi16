function factorial()
{
    var n2 = +document.getElementById("n2").value
    var sum2 = document.getElementById("sum2")

    var total = 1
    for(var i = 1 ; i <= n2 ; i++)
    {
        total *= i
        console.log(total)
    }
    sum2.innerHTML = `Tổng giai thừa : ${total}`
}