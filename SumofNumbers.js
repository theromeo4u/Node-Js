function SumOfNumbers(n){
    return(n*(n+1)/2)
    
}
console.log(SumOfNumbers(10))

function sum(n) {
    if(n<=1){
        return n;
    }
       

    return n + sum((n-4))
}

console.log(sum(10))