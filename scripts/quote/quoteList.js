import {useQuote} from './quoteDataProvider.js'
import {Quote} from './quote.js'

export const quoteList = () => {
  const contentElement = document.querySelector(".quotes")
  const allTheQuotes = useQuote()

  for (const quoteObject of allTheQuotes) {
    const quoteHTML = Quote(quoteObject)
    contentElement.innerHTML += quoteHTML
  }
}