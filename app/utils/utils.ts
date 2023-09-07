import {Theme} from "@/app/utils/types";

export function classNameGenerator(...styleClasses: Array<string>): string {
    let finalString: string = "";
    styleClasses.forEach((styleClass: string): void => {finalString += `${styleClass} `;} );

    return finalString;
}

export function isVisible(zValue: number, zSpacing: number): boolean {
    return zValue < Math.abs(zSpacing) / 1.3;
}

export function setThemeInLocalStorage(theme: Theme): void {
    localStorage.setItem('theme', theme);
}
export function getThemeFromLocalStorage(): Theme {
    const fromLocalStorage: string | null = localStorage.getItem('theme');
    return fromLocalStorage ? <Theme>fromLocalStorage : "dark";
}