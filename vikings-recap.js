// Soldier
function Soldier(soldierHealth, soldierStrength) {
    this.health = soldierHealth;
    this.strength = soldierStrength;
}

Soldier.prototype.attack = function(){
    return this.strength;
}

Soldier.prototype.receiveDamage = function(theDamage){
    // return this.health -= theDamage;
    this.health -= theDamage;
}


// Viking
function Viking(theName, theHealth, theStrength) {
    this.name = theName;
    // this creates "static" copy => one time created viking will not 
    // sync in with any change made in soldier after this point 
    Soldier.call(this, theHealth, theStrength);
}

// Object.create => if the parent changes its behavior, so children must do.  
// Now we have a direct connection between our Soldier and Viking objects through the Soldier prototype, 
// so if the Soldier prototype changes, the Viking will change too. But there is still a last step we must make 
// to complete the real inheritance
Viking.prototype = Object.create(Soldier.prototype);

// If create an instance of Viking, we can see the prototype is an Soldier prototype object. 
// The problem is that, since there is no constructor for Viking objects, it will take the Soldier constructor 
// as it’s own. That's why we have to do this:

Viking.prototype.constructor = Viking;

// After this, we call Viking.prototype.constructor = Viking so the Viking objects will take the Viking's 
// constructor as default instead of Soldier's

Viking.prototype.receiveDamage = function(daDamage){
    this.health -= daDamage;
    if(this.health > 0){
        // NAME has received DAMAGE points of damage
        return `${this.name} has received ${daDamage} points of damage`;
    } else {
        return `${this.name} has died in act of combat`;
    }
}

Viking.prototype.battleCry = function(){
    return `Odin Owns You All!`;
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;


// Saxon
function Saxon(daHealth, daStrength) {
    Soldier.call(this, daHealth, daStrength);
}

Saxon.prototype.receiveDamage = function(damage){
    this.health -= damage;
    if(this.health > 0){
        return `A Saxon has received ${damage} points of damage`;
    } else {
        return `A Saxon has died in combat`;
    }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
}

War.prototype.addViking = function(someViking){
    this.vikingArmy.push(someViking);
}

War.prototype.addSaxon = function(daSaxon){
    this.saxonArmy.push(daSaxon);
}

War.prototype.vikingAttack = function(){
    const vikingInd = Math.floor(Math.random() * this.vikingArmy.length);
    const randViking = this.vikingArmy[vikingInd];
    const saxonInd = Math.floor(Math.random() * this.saxonArmy.length);
    const randSaxon = this.saxonArmy[saxonInd];

    const result = randSaxon.receiveDamage(randViking.attack());

    if(randSaxon.health <= 0){
        this.saxonArmy.splice(saxonInd, 1);
    }
    return result;
}

War.prototype.saxonAttack = function(){
    const vikingInd = Math.floor(Math.random() * this.vikingArmy.length);
    const randViking = this.vikingArmy[vikingInd];
    const saxonInd = Math.floor(Math.random() * this.saxonArmy.length);
    const randSaxon = this.saxonArmy[saxonInd];

    const result =randViking.receiveDamage(randSaxon.attack());

    if(randViking.health <= 0){
        this.vikingArmy.splice(vikingInd, 1);
    }
    return result;
}

War.prototype.showStatus = function(){
    if(this.saxonArmy.length === 0){
        return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0){
        return `Saxons have fought for their lives and survive another day...`;
    } else {
        return `Vikings and Saxons are still in the thick of battle.`;
    }
}

// testing our code:

const vik1 = new Viking("Niko", 200, 250);

const vik2 = new Viking("Sam", 120, 300);
console.log(vik1, vik2);
const sax1 = new Saxon(150, 230);
console.log(sax1);
const theWar = new War();
theWar.addSaxon(sax1);
theWar.addViking(vik2);
theWar.addViking(vik1);

theWar.vikingAttack();
console.log(theWar);
theWar.showStatus();