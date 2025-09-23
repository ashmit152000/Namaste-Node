// By default the modules are protected from the outside world so that the variables and functions don't leak. To access the variables and functions outside the module, we need to export them using the "export" keyword.

// The module export import used from this file comes under commonJS
export const calculateSum = (a,b) => {
    console.log(a + b);
}

let a = 10;
let b = 20;

export const varsInSum = {a,b};