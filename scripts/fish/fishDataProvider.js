const fishCollection = [
  {
      name: "Tom",
      species: "Goldfish",
      length: 3,
      location: "Neighbor's backyard pond",
      food: "Cheetos",
      image: "./images/goldfish.jpg",
  },

  {
      name: "Jeff",
      species: "Shark",
      length: 10,
      location: "Huntington Beach",
      food: "Seals",
      image: "./images/shark.jpg"
  },

  {
      name: "Rodney",
      species: "Tuna",
      length: 6,
      location: "Japan",
      food: "Anchovies",
      image: "./images/tuna.jpg",
  },
]

export const useFish = () => {
  return fishCollection.slice()
}

// What does Martin want to change?
// Separate fish by type
// List the fish by those type
// 1. mostHolyFish
// 2. soldierFish
// 3. nonHolyFish

// Most Holy
export const mostHolyFish = () => {
  // 3, 6, 9, 12, etc... fish
  const allHolyFish = []
  for (const fish of fishCollection) {
    if (fish.length % 3 === 0) {
      allHolyFish.push(fish)
    }
  }
  return allHolyFish
}

// Soldier
export const soldierFish = () => {
  // 5, 10, 15, 20, 25, etc... fish
  const allSoldierFish = []
  for (const fish of fishCollection) {
    if (fish.length % 5 === 0 && fish.length % 3 != 0) {
      allSoldierFish.push(fish)
    }
  }
  return allSoldierFish
}

// Non Holy
export const nonHolyFish = () => {
  // Any fish not a multiple of 3 or 5
  const allOtherFish = []
  for (const fish of fishCollection) {
    if (fish.length % 3 != 0 && fish.length % 5 != 0) {
      allOtherFish.push(fish)
    }
  }
  return allOtherFish
}
