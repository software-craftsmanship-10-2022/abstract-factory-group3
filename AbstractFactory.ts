interface CommandCenterFactory{
    createDiferencial(): Diferencial;
    createSensor(): Sensor;
}

interface Sensor {
    print:()=>void;
}

interface Diferencial {
    print:()=>void;
}

class CitiluxFactory implements CommandCenterFactory {
    createDiferencial(): Diferencial {
        return new RCDS();
    }
    createSensor(): Sensor {
        return new WireStealSensor();
    }
}

class SmartFactory implements CommandCenterFactory {
    createDiferencial(): Diferencial {
        return new DiffSensor();
    }
    createSensor(): Sensor {
        return new NoWireSensor();
    }
}

class WireStealSensor implements Sensor{
    print(){
        console.log('Soy un WireStealSensor');
    }
}

class NoWireSensor implements Sensor{
    print(){
        console.log('Soy un NoWireSensor');
    }
}

class RCDS implements Diferencial {
    print(){
        console.log('Soy un RCDS');
    }
}

class DiffSensor implements Diferencial {
    print(){
        console.log('Soy un DiffSensor');
    }
}

class LEDLights{
    constructor(private commandCenterFactory: CommandCenterFactory){}

    build() {
        this.commandCenterFactory.createDiferencial().print();
        this.commandCenterFactory.createSensor().print();
    }
}


const smartFactory = new SmartFactory();
const citiluxFactory = new CitiluxFactory();


const smartDiferencial = smartFactory.createDiferencial();
const smartSensor = smartFactory.createSensor();
const citiluxDiferencial = citiluxFactory.createDiferencial();
const citiluxSensor = citiluxFactory.createSensor();

console.log(smartDiferencial.print());
console.log(smartSensor.print());
console.log(citiluxDiferencial.print());
console.log(citiluxSensor.print());