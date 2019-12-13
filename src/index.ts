import Example from './services/someService.service';
import container from "./config/ioc.config";
import TYPES, { Warrior } from './config/ioc-example/example';

const a:string = "31";
console.log("some logged message: " + a);

const example: Example = new Example(); 
example.shouter();

const ninja = container.get<Warrior>(TYPES.Warrior);

console.log(ninja.fight());
console.log(ninja.sneak());