// * OBJECT PROPERTIES

/**
 * Given an object, add each of its properties to a string using a for/in loop,
 * then return the String.
 * 
 * Remember: You'll be using a variable, and objects have a special syntax for
 * that.
 * 
 * @param {Object} object 
 * @returns {String}
 */
function loopThroughProperties(object) {

    let answer = "";    // An empty string to hold the object's properties
    for(let property in object) {   // Loop through each property
        answer = answer + property; // Adds the property to the answer string
        // answer += property       Different way to write the line above
    }
    return answer;
}


/**
 * Given an object, add 3 properties to it. After you have added them to 
 * the object, return that object.
 * 
 * @param {Object} object 
 * @returns {Object}
 */
function addProperties(object) {
    object.property1 = 1;   // Creates a new property and gives it a value of 1
    object.property2 = 2;   // Creates a new property and gives it a value of 2
    object.property3 = 3;   // Creates a new property and gives it a value of 3
    return object;
}


/**
 * Given a Pug object, remove a property of your choice.
 * Once you have removed a property, return that object.
 * 
 * @param {Pug} Pug - A Pug Object with a few properties. You can find out more about this object in pug.js
 * @returns {Pug}
 */
function removeProperties(pug) {
    // Check the pug.js for information about the properties of pug
    delete pug.age; // Removes the age property and its value from pug
    return pug;
}


/**
 * Given a Pug object, return the attributes it has attached.
 * 
 * @param {Pug} Pug 
 * @returns {Pug}
 */
function getAttributes(object) {
    return Object.getOwnPropertyDescriptors(object);
}

// * EXAMPLES FROM LECTURE

const fruit1 = {
    name : "Banana",
    color : "Yellow",
    datePurchased : new Date()  // The date/time this is run
};

const alsoFruit1 = fruit1;  // ! SAME OBJECT AS FRUIT1

console.log(`Fruit1 : ${fruit1.name} & ${fruit1.color}`);
console.log(`AlsoFruit1 : ${alsoFruit1.name} & ${alsoFruit1.color}`);

fruit1.name = "Apple";
fruit1.color = "Red";

console.log(`Fruit1 : ${fruit1.name} & ${fruit1.color}`);
console.log(`AlsoFruit1 : ${alsoFruit1.name} & ${alsoFruit1.color}`);










