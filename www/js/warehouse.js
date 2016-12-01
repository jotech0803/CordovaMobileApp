
/* creating multi-dimensional array 
 order number
 aisle
 shelf
 geo location
 status*/


 
var warehouse = [["12348", "4", "2", "Leeds", "toDespatch"], ["12349", "4", "2", "Oxford", "toPick"], ["12350", "4", "2", "Hull", "toPick"], ["12355", "3", "7", "Sheffield", "toPick"], ["12389", "3", "1", "Leeds", "toPick"],["12387", "4", "2", "Leeds", "toDespatch"],["12378", "4", "2", "Wakefield", "toDespatch"] ];



localStorage.warehouse = JSON.stringify(warehouse); /* turning the data from the warehouse array into a string*/


console.log(warehouse[0][4]); /* asking the console to print the first array, item 2 */

