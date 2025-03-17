// data
import { langBtn } from "../data/langBtn";

export const getLangName = (code: string) => {
    const lang = langBtn.find(lang => lang.code === code);
    return lang ? lang.title : "English";
}