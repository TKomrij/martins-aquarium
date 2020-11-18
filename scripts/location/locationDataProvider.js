const locationCollection = [
  {
    image: "./images/barrierReef.jpg",
    name: "Great Barrier Reef",
    url: "https://www.australia.com/en-us/places/cairns-and-surrounds/guide-to-the-great-barrier-reef.html",
    urlTitle: "Australian Guide Great Barrier Reef",
    desc: "Home to diverse marine life of the most vivid colours, the Great Barrier Reef offers the opportunity for great adventure, both in luxury and on a budget. Whether you explore the stunning Whitsunday Islands, trek the ancient Daintree Rainforest or relax on luxurious tropical islands such as Hayman and Lizard, a day on the reef is all about the unforgettable nature that surrounds you."
  },

  {
    image: "./images/galápagos.jpg",
    name: "Galápagos Islands",
    url: "https://www.worldwildlife.org/places/the-galapagos",
    urlTitle: "The Galápagos Islands",
    desc: "Six hundred miles off the coast of Ecuador lie the volcanic islands of the Galápagos, famous for a wealth of unique plants and animals found nowhere else in the world. The Galápagos Islands were the source of Darwin’s theory of evolution and remain a priceless living laboratory for scientists today."
  }
]

export const useLocation = () => {
  return locationCollection.slice()
}