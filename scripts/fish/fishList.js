import { mostHolyFish, soldierFish, nonHolyFish, useFish } from './fishDataProvider.js'
import {Fish} from './fish.js'



export const fishList = () => {

  // Get a reference to the `<article class="content">` element
  const contentElement = document.querySelector(".fishList")
  // const allTheFish = useFish()
  const allHolyFish = mostHolyFish()
  const allSoldierFish = soldierFish()
  const allOtherFish = nonHolyFish()


  // for (const fishObject of allTheFish) {
  //   const fishHTML = Fish(fishObject)
  // // Add to the existing HTML in the content element
  // contentElement.innerHTML += fishHTML
  // }

  // List the fish by those type
  // 1. mostHolyFish
  // 2. soldierFish
  // 3. nonHolyFish

  for (const fishObject of allHolyFish) {
    const fishHTML = Fish(fishObject)
  // Add to the existing HTML in the content element
  contentElement.innerHTML += fishHTML
  }

  for (const fishObject of allSoldierFish) {
    const fishHTML = Fish(fishObject)
  // Add to the existing HTML in the content element
  contentElement.innerHTML += fishHTML
  }

  for (const fishObject of allOtherFish) {
    const fishHTML = Fish(fishObject)
  // Add to the existing HTML in the content element
  contentElement.innerHTML += fishHTML
  }
}
