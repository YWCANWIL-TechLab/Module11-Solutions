// * OBJECT METHOD EXERCISES

/**
 * Given a Pug Object, add a method to it. Then, return that object.
 * The method may be anything that describes something about Pugs, or dogs
 * in general. For example, you may want to add a method "speak()" that would
 * return "woof!". However, what method you add is up to you.
 * 
 * @param {Pug} pugObject
 * @returns {Pug}
 */
function addMethod(pugObject) {
    // Creates a Method called speak
    // (Methods: Functions held by properties)
    pugObject.speak = function() {  
        return "Woof!";
    }
    return pugObject;
}


/**
 * Given a Pug object, add a method that returns a list of its properties
 * in String form.
 * 
 * 
 * @param {Pug} pugObject 
 * @returns {Pug} pugObject
 */
function listOutProperties(pugObject) {
    pugObject.listProperties = function() {     // Created method
        let result = "";    // Same function as the 1st question of ex1-properties.js
        for(let prop in pugObject) {
            result += (" " + prop); 
        }
        return result;
    }
    return pugObject
}

/**
 * Given a Pug object, add a method to it that finds its age in dog years.
 * Your dog's age in Dog Years is 7 times its age in regular years.
 * Return the object when you are done.
 * 
 * @param {Pug} pugObject 
 * @returns {Pug}
 */
function addFindDogYears(pugObject) {
    pugObject.findDogYears = function() {   // Creates method
        return this.age * 7;
         /** 
          * When used inside a function, this refers to the object its inside of
          * In this situation, this refers to pugObject, so this.age means
          * pugObject's age.
          */
    }
    return pugObject;
}


/**
 * Given a Pug object, convert its values into an array
 * 
 * @param {Pug} pugObject 
 * @returns {String[]}
 */
function tryObjectValues(pugObject) {
    return Object.values(pugObject);
}

/**
 * Given a Pug object, convert one of its methods to a string,
 * then return that string.
 * 
 * @param {Pug} pugObject 
 * @returns {String}
 */
function functionToString(pugObject) {
    return pugObject.breathHeavy().toString();
}


