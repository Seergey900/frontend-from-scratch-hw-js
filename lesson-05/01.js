const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) {
    // Проверяем, есть ли такой ресурс в объекте
    if (this.resources.hasOwnProperty(resource)) {
      this.resources[resource] += amount // добавляем количество
    } else {
      console.log("Invalid resource") // если ресурса нет
    }
  },
}

// Примеры использования:
game.addResource("gold", 50)   // теперь золото 300
game.addResource("lumber", 25) // теперь древесина 125
game.addResource("stone", 10)  // "Invalid resource"
console.log(game.resources)

}
