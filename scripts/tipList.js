import {useTip} from './tipDataProvider.js'
import {Tip} from './tip.js'

export const tipList = () => {
  const contentElement = document.querySelector(".tankTips")
  const allTheTips = useTip()

  for (const tipObject of allTheTips) {
    const tipHTML = Tip(tipObject)
    contentElement.innerHTML += tipHTML
  }
}