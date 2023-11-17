// function greeting(name: string): string {
//     return "Hello " + name
// }
// greeting("")

// Write a TypeScript function called returnIdType() that takes in an argument which can be either a number or a string. The function should return a string denoting the provided argument with a prefix indicating its type: "Number: " for numbers and "String: " for strings.

// Challenge: Implement the returnIdType function using TypeScript and utilize unions to specify the argument type.

// sample:

// returnIdType(42) ==> "Number: 42"

// returnIdType("apple") => "String: apple"

function returnIdType(id: number | string): string {
    if (typeof id === "number") {
        return ("Number: " + id) // or  return "Number: " + id;
    } else {
        return ("String: " + id) // or  return "String: " + id;
    }
}
