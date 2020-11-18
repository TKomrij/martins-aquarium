const quoteCollection = [
{
  text: "Just Keep Swimming!",
  author: "Dory"
},

{
  text: "Give me a fish and I eat for a day. Teach me to fish and I eat for a lifetime.",
  author: "Chinese Proverb"
},

{
  text: "No good fish goes anywhere without a porpoise.",
  author: "Lewis Carroll"
}
]

export const useQuote = () => {
  return quoteCollection.slice()
}
