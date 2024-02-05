const colors = {
    reset: "\x1b[0m",
    white: "\x1b[37m",
    gray: "\x1b[90m",
    red: "\x1b[31m",
    yellow: "\x1b[33m",
    green: "\x1b[32m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
}

export const highlight = (word, color) => {
    `${colors[color]}${word}${colors.reset}`
}
