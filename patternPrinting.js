// PATTERN 1: ROW OF STARS
let output = '';
for (let i = 0; i < 5; i++) {
    output = output + '*';
}
console.log(output); 

// Output: *****



// PATTERN 2: CONCATENATED NUMBERS
let output1 = "";
for (let i = 0; i < 5; i++) {
    output1 = output1 + i;
}
console.log(output1); 

// Output: 01234



// PATTERN 3: SQUARE OF STARS
console.log("PATTERN 3:");
for (let i = 0; i < 5; i++) {
    let output = "";
    for (let j = 0; j < 5; j++) {
        output = output + "*";
    }
    console.log(output);
}

/* Output:
*****
*****
*****
*****
*****
*/



// PATTERN 4: COUNTING NUMBERS
console.log("PATTERN 4:");
for (let i = 0; i < 5; i++) {
    let output = "";
    for (let j = 0; j < 5; j++) {
        output = output + j;
    }
    console.log(output);
}


/* Output:
01234
01234
01234
01234
01234
*/



// PATTERN 5: TRIANGULAR NUMBERS
console.log("PATTERN 5:");
for (let i = 0; i < 5; i++) {
    let output = "";
    for (let j = 0; j <= 4; j++) {
        if (j <= i) {
            output = output + j;
        } else {
            output = output + " ";
        }
    }
    console.log(output);
}

/* Output:
0    
01   
012  
0123 
01234
*/




// PATTERN 6: TRIANGULAR STARS
console.log("PATTERN 6:");
for (let i = 0; i < 5; i++) {
    let output = "";
    for (let j = 0; j <= i; j++) {
        output = output + "*";
    }
    console.log(output);
}
for (let i = 5; i >= 1; i--) {
    let output = "";
    for (let j = 0; j < i; j++) {
        output = output + "*";
    }
    console.log(output);
}
/* Output:
*
**
***
****
*****
****
***
**
*
*/

for (let i = 0; i <5; i++) {
    let output = "";
    for (let j = 0; j < 5; j++) {
        if (j >= i) {
            output = output + "*";
        } else {
            console.log(" ");
        }
    }
            console.log(output);

}

/*
    *
   **
  ***
 ****
*****
 ****
  ***
   **
    *
*/

// Diamond Pattern
console.log("Diamond Pattern:");
const n = 5;
for (let i = 1; i <= n; i++) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
}
for (let i = n - 1; i >= 1; i--) {
    let spaces = " ".repeat(n - i);
    let stars = "*".repeat(2 * i - 1);
    console.log(spaces + stars);
}

/* Output:
Diamond Pattern:
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/

// Hollow Square Pattern
console.log("\nHollow Square Pattern:");
const size = 5;
for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
        if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
            row += "* ";
        } else {
            row += "  ";
        }
    }
    console.log(row);
}

/* Output:
Hollow Square Pattern:
* * * * * 
*       * 
*       * 
*       * 
* * * * * 
*/

// Number Triangle Pattern
console.log("\nNumber Triangle Pattern:");
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}

/* Output:
Number Triangle Pattern:
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
*/




