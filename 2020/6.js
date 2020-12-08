const inputParser = (input) => JSON.parse(`[${input.replace(/\n/g, '@').split('@@').join(`"},{"`).split('@').join(`","`).split(' ').join(`","`).split(':').join(`":"`).slice(3, -3)}]`)
