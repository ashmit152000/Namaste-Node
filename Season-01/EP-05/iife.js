// When you require a module inside another module, the former is passed inside an iide (Immediately Invoked Function Expression) to avoid polluting the global scope.

// This iife has "module" and "require" as it's parameters. That's why you are able to use require and module.exports. 

(function(module, require) { // module and require are passed as it's parameters

    // Code of the module goes here.
})(); // This is called an iife

// IIFE is the reason all the variables and the functions in a module are private.

// There are also other parameteres in this IIFE