/* Create a function named calculateCost that takes the name of an item as a parameter inputItem. The function should return the cost of the item.

Define these two types:
    - InputItemType
    - ReturnItemType

    Annotate the calculateCost function and its parameter by utilizing the two types you've defined.

Item: Cost(in dollars)
Steak: 24
Pasta: 20
Ice Cream: 10
If the argument passed to the function is 'Ice Cream', your function should return 'Sorry! We are sold out!'. */

// Define the InputItemType type
// OR we can do type InputItemType = "Steak" | "Pasta" | "Ice Cream"; AKA Type Literals
type InputItemType = string;
// Define the ReturnItemType type
type ReturnItemType = number | string
// Create the calculateCost function
function calculateCost(item: InputItemType): ReturnItemType{
    if (item === "Ice Cream"){
        return "Sorry! We are sold out!"
    }
    if (item === "Steak") {
        return 24
    } else {
        return 20
    }
}
 // Without using if-statements here is how we can do this
//  function calculateCost(item: InputItemType): ReturnItemType{
//     const itemMap = {"Steak": 24, "Pasta": 20, "Ice Cream": "Sorry! We are sold out!"}
//     return itemMap[item];
// }
