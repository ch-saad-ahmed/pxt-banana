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
    //% blockId=tropic_pick block="pick a %fruit"
    export function piiiik(fruit: TropicalFruit): boolean {
        return false;
    }
    /**
     * Peel the fruit if possible
     */
    //% blockId=tropic_peel block="peel a %fruit"
    export function piiil(fruit: TropicalFruit): boolean {
        return (fruit == TropicalFruit.Banana);
    }
}