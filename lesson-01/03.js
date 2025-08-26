const INITIAL_ENERGY = 10
const MIN_ENERGY = 0
const LOW_ENERGY_THRESHOLD = 3

let energy = INITIAL_ENERGY
while (energy >= MIN_ENERGY) {
    console.log(`Текущий уровень энергии: ${energy}`)

    if (energy === MIN_ENERGY) {
        console.log('Робот грустит... 😢 Нужно подзарядить!')
    } else if (energy <= LOW_ENERGY_THRESHOLD) {
        console.log('Робот начинает чувствовать усталость... 🥱')
    } else {
        console.log('Робот счастлив и бодрствует! 😊')
    }

    energy--
}

console.log('Программа завершена. Робот отдыхает.')