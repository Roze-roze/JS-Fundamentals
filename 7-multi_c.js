const arg = process.argv[2];
const times = parseInt(arg, 10);

if (!arg || isNaN(times) || times <= 0) {
    console.log("Missing number of occurrences");
} else {
    for (let i = 0; i < times; i++) {
    console.log("C is fun");
    }
}