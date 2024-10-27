let x = parseInt(prompt("Enter the number of rows for the pyramid of odd numbers: "));
let pyramid = "";
    for (let i = 1; i <= x; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += (2 * j + 1) + " ";
        }
        pyramid += row.trim() + "\n";
    }
    console.log(pyramid);
