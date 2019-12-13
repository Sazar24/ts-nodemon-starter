import "reflect-metadata";
import TYPES, { Warrior, Weapon, ThrowableWeapon, Ninja, Katana, Shuriken } from "./ioc-example/example";
import { Container } from 'inversify';

const container = new Container();
try {
    container.bind<Warrior>(TYPES.Warrior).to(Ninja);
    container.bind<Weapon>(TYPES.Weapon).to(Katana);
    container.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

}
catch (ex) {
    console.log('IoC exception:', ex);
}

export default container;