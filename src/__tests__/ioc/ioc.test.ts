import container from "../../config/ioc.config";
import TYPES, { Warrior } from "../../config/ioc-example/example";

describe('ioc should use container or work at all in jest', () => {
    it('should work', () => {

        const ninja = container.get<Warrior>(TYPES.Warrior);
        const ninja_fightResult = ninja.fight();
        expect(ninja_fightResult).toBe("cut!");

        console.log(ninja.fight());
        console.log(ninja.sneak());

    });

});