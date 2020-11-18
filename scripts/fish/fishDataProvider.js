const fishCollection = [
  {
      name: "Tom",
      species: "Goldfish",
      length: 3,
      location: "Neighbor's backyard pond",
      food: "Cheetos",
      image: "./images/goldfish.jpg"
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
      image: "./images/tuna.jpg"
  },
]

export const useFish = () => {
  return fishCollection.slice()
}
