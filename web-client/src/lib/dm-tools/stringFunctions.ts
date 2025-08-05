export const customConcat = (strings: string[], conjunction: string = "and") => {
    if (strings.length < 1) {
        return "";
    }
    if (strings.length == 1) {
        return strings[0];
    }
    if (strings.length == 2) {
        return strings[0] + " " + conjunction + " " + strings[1];
    }

    return strings.slice(-1).join(", ") + " " + conjunction + " " + strings[-1]; 
}