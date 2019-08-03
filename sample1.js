var employees = [
    { id: 10, name: 'John', experience: 5},
    { id: 15, name: 'Mathew', experience: 7},
    { id: 20, name: 'keith', experience: 12},
    { id: 25, name: 'louis', experience: 5},
    { id: 30, name: 'mark', experience: 4},
    { id: 35, name: 'Ash', experience: 3},
    { id: 40, name: 'robert', experience: 6},
]
 

var allId=employees.map((elem) => elem.id);

var exp = employees.reduce((acc, curr) => {
    return acc+curr.experience
    },0);

var grt5 = employees.filter((elem) => {
        return elem.experience>5})

console.log("Id Array:  " + allId);
console.log("Sum of exp:  " + exp);
console.log("exp greater than 5:  " + JSON.stringify(grt5));

console.log("-----------------------------------------------------------------------------");

//-----------------------------------------------------------------------------------------

function cat () {
    this.catName = 'Kitty';
    this.sayName= () => {
        console.log(this.catName);
    }
}

let cat1 = new cat;
let sayName = cat1.sayName;
sayName();


console.log("-----------------------------------------------------------------------------");


//------------------------------------------------------------------------------------------

class user {
    constructor(name, location){
        this.name=name;
        this.location=location;
    }
    displayName() {
        return this.name + ' is in ' + this.location;
    }
}

var user1 = new user("UMD", "College Park");

console.log(user1.displayName());

console.log("-----------------------------------------------------------------------------");

//-----------------------------------------------------------------------------------------

function myName(fName, lName) {
    //console.log(`my name is ${fName} ${lName}`);

    // function fullDetails(companyName) {
    //     const value = `my name is ${fName} ${lName} and I work for ${companyName}`
    //     return value;
    // }

    var fullDetails = (companyName) => {
        const value = `my name is ${fName} ${lName} and I work for ${companyName}`
        return value;
    }

    return fullDetails;
}

var per = new myName("Sneha", "Koyande");
prntStsmt = per("UMD");
console.log(prntStsmt);

console.log("-----------------------------------------------------------------------------");

//---------------------------------------------------------------------------------------------

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you!');
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,"sushi","algo");

console.log("-----------------------------------------------------------------------------");

//---------------------------------------------------------------------------------------------

var x = "5"; 
var promise1 = new Promise(function(resolve, reject) {
    if (x  = 5) {
        let data = {
            name: 'UMD',
            address: {
                state: 'MD',
                zip: "20783"
            }
        }
        console.log(data.name);
        resolve(data.address);
    } else {
        var res = new Error('failed......');
        reject(res);
    }
});

var promise2 = function(address) {
    var msg = "address: "+ address.state + ' ' + address.zip;
    return Promise.resolve(msg)};

promise1.then(promise2).then((msg)=> console.log(msg))