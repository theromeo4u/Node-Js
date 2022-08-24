function Counter(fromNumber) {
    console.log(fromNumber)
    let a = fromNumber - 1

    if (a > 0) {
        Counter(a)
    }
    
}
Counter(10)