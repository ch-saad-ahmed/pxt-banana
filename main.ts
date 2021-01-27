/**
 * Types of tropical fruit
 */
enum TropicalFruit {
    Banana = 0,
    Pinapple = 1,
    Coconut = 2
}

/**
 * Pick some fruit and peel it.
 */
//% weight=70 icon="\uf185" color=#EC7505
namespace tropic {
    /**
     * Pick a fruit
     */
    //% blockId=tropic_pick block="pick %fruit"
    export function pick(fruit: TropicalFruit): boolean {
        return false;
    }
    /**
     * Peel the fruit if possible
     */
    //% blockId=tropic_peel block="peel %fruit"
    export function pee(fruit: TropicalFruit): boolean {
        return (fruit == TropicalFruit.Banana);
    }
}