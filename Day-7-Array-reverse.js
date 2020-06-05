function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    var result = "";
    
    for (var i = n - 1; i > -1; i--)
        {
            result = result + arr[i] + " ";
        }
    console.log(result);
}