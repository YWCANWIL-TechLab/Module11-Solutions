// * OBJECT ACCESSOR EXERCISES

/**
 * Create a Person object, that has properties for first name, last name, age,
 * and height. Then return that object.
 * 
 * @returns {Object} 
 */
function writeNormalPersonObject() {
    const person = {
        firstName : "Joel",
        lastName : "Gill",
        age : 17,
        height : "7'1"
    };
    return person
}


/**
 * Given the person object you just created, access one of its properties.
 * Return that property
 * 
 * @param {Object} person 
 * @returns
 */
function accessPersonObjectNormally(person) {
    return person.age;
}


/**
 * Create a person object again, but this time please include a "getter" method
 * for Person's full name. Return the new person object.
 * 
 * @returns {Object}
 */
function writeGetPersonObject() {
    const person = {
        firstName : "Joel",
        lastName : "Gill",
        age : 17,
        height : "7'1",
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
    };

    return person;
}


/**
 * Given the person object you created in writeGetPersonObject(), return 
 * the full name of person.
 * 
 * @param {Object} person 
 * @returns {Object}
 */
function accessGetPersonObject(person) {
    return person.fullName;     // When you use a getter method, you do not
                                               // need the parentheses
}


/**
 * Given the person object you created originally in writeNormalPersonObject(),
 * change a property value of your choice. Then, return person.
 * 
 * @param {Object} person 
 * @returns {Object}
 */
function changePropertyNormally(person) {
   person.age = 16;
   return person;
}


/**
 * Create a person object like you did before, but this time write a setter
 * method to set the person object's age. Then, return person.
 * 
 * @returns {Object}
 */
function writeSetPersonObject() {
    const person = {
        firstName : "Joel",
        lastName : "Gill",
        age : 17,
        height : "7'1",
        set setAge(newAge) {
            this.age = newAge;      // * Setter methods dont return anything
        }
    };

    return person;
}


/**
 * Given the object you just created in writeSetPersonObject(), use the 
 * setter method to change the person object's age. Then, return person.
 * 
 * @param {Object} person 
 * @returns {Object}
 */
function useSetPersonObject(person) {
    // TODO Finish the function
    person.setAge(20);
    return person; 
}
