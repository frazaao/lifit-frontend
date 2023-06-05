export default interface IngredientDomain {
    amount: number;
    unitType: "Kg" | "g" | "L" | "ml" | "Un";
    ingredient: string;
}
