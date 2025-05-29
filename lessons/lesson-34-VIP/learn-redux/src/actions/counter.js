export const up = (number) => {
    return {
        type: "UP",
        number: number
    }
}
export const down = (number) => {
    return {
        type: "DOWN",
        number: number
    }
}
export const reset = (number) => {
    return {
        type: "RESET",
        number: number
    }
}