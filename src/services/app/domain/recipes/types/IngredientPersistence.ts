export default interface IngredientPersistence {
    amount: number;
    unit_type: "Kg" | "g" | "L" | "ml" | "Un";
    ingredient: string;
}
