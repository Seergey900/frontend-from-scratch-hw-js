const game = {
  resources: {
    gold: 250,
    lumber: 100,
  },
  addResource(resource, amount) {
    if (this.resources.hasOwnProperty(resource)) {
      this.resources[resource] += amount
    } else {
      console.log("Invalid resource")
    }
  },
}
