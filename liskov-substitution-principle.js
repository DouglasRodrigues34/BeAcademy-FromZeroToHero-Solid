// Liskov Substitution Principle
/* A ideia principal do principio de substitução de Liskov é que qualquer função/módulo que interaja com uma classe também deve ser capaz de interagir com todas as subclasses dessa classe. Isso significa que uma classe é intercambiavél com suas subclasses. */

class FlyingBirds {
    fly() {
        console.log('Posso voar');
    }
}

class SwimminBird {
    swin() {
        console.log('Posso nadar');
    }
}

class Penguin extends SwimminBird {}
class Duck extends FlyingBirds {}

function makeFlyingBirdFly (bird) {
    bird.fly()
}

function makeSwimmingBird (bird) {
    bird.swin()
}

const pato = new Duck;
const pinguim = new Penguin;

makeFlyingBirdFly(pato);
makeSwimmingBird(pinguim);