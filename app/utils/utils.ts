export function classNameGenerator(...styleClasses: Array<string>): string {
    let finalString: string = "";
    styleClasses.forEach((styleClass: string): void => {finalString += `${styleClass} `;} );

    return finalString;
}