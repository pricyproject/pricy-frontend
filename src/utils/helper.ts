import { LANG_LIST, RTL_LANGS_LIST } from "../constants/defaults";

export const getLanguageDirection = (language: string): "rtl" | "ltr" => {
    return RTL_LANGS_LIST.includes(language) ? "rtl" : "ltr";
};

export const isRtlLanguage = (language: string): boolean => {
    return RTL_LANGS_LIST.includes(language);
};

export const isLanguageSupported = (language: string): boolean => {
    return LANG_LIST.includes(language);
};

export const alertComingSoon = () => alert("coming soon...");

export const roundHalf = (num: number): number => Math.round(num * 2) / 2;

export const generateArrayByLength = (length: number): number[] =>
    Array.from({ length }, (_, index) => index);
