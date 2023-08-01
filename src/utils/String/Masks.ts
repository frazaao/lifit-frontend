import StringMask from "string-mask";
import StringUtils from "./StringUtils";

class Masks extends StringUtils {
    public static onlyNumbers(value: string) {
        return value.replaceAll(/\D/g, "");
    }

    public static withoutNumbers(value: string) {
        return value.replaceAll(/\d/g, "");
    }

    public static mask(value: string, mask: string, options: any = undefined) {
        const maskedValue = StringMask.apply(value, mask, options);

        return maskedValue;
    }

    public static validate(value: string, mask: string) {
        const maskObject = new StringMask(mask);
        const isValid = maskObject.validate(value);

        return isValid;
    }
}

export default Masks;
