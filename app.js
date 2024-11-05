// for 1
function for1(k, n) {
    for (let i = 0; i < n; i++) {
        console.log(k);
    }
}
for1(5, 3); // Misol: 5 sonini 3 marta chiqarish
// for 2
function for2(a, b) {
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
}
for2(2, 5); // Misol: 2 dan 5 gacha bo'lgan sonlarni chiqarish
// for 3
function for3(a, b) {
    for (let i = b; i >= a; i--) {
        console.log(i);
    }
}
for3(2, 5); // Misol: 5 dan 2 gacha kamayish tartibida sonlarni chiqarish
// for 4
function for4(pricePerKg) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} kg uchun: ${i * pricePerKg}`);
    }
}
for4(3000); // Misol: 1 kg konfet narxi 3000
// for 5
function for5(pricePerKg) {
    for (let i = 0.1; i <= 1.0; i += 0.1) {
        console.log(`${i.toFixed(1)} kg uchun: ${(i * pricePerKg).toFixed(2)}`);
    }
}
for5(3000); // Misol: 1 kg konfet narxi 3000
// for 6
function for6(pricePerKg) {
    for (let i = 1.2; i <= 2.0; i += 0.2) {
        console.log(`${i.toFixed(1)} kg uchun: ${(i * pricePerKg).toFixed(2)}`);
    }
}
for6(3000); // Misol: 1 kg konfet narxi 3000
// for 7
function for7(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    console.log("Yig'indisi:", sum);
}
for7(2, 5); // Misol: 2 dan 5 gacha bo'lgan sonlar yig'indisi
// for 8
function for8(a, b) {
    let product = 1;
    for (let i = a; i <= b; i++) {
        product *= i;
    }
    console.log("Ko'paytmasi:", product);
}
for8(2, 5); // Misol: 2 dan 5 gacha bo'lgan sonlar ko'paytmasi
// for 9
function for9(a, b) {
    let sumOfSquares = 0;
    for (let i = a; i <= b; i++) {
        sumOfSquares += i * i;
    }
    console.log("Kvadratlar yig'indisi:", sumOfSquares);
}
for9(2, 5); // Misol: 2 dan 5 gacha bo'lgan sonlar kvadratlari yig'indisi

// for 10 ga tushunmadim