let inputNumber=parseInt(prompt("nhap vao so luong so nguyen can in"));
let count=0; //đếm so lương so nguyen để so sánh
let N=1; //kiem tra so nguyen
while(count<inputNumber){
    if(checkPrime(N)){
        count++;
        document.write(+N+"</br>");
        console.log("count: "+count,"input Number: "+inputNumber,N,checkPrime(N));
    }
    N++;
}
function checkPrime(N){
    if (N===1)
    {
        return false;
    }
    else if(N === 2)
    {
        return true;
    }else
    {
        for(let x = 2; x < N; x++)
        {
            if(N % x === 0)
            {
                return false;
            }
        }
        return true;
    }
}
