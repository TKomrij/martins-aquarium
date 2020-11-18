import {useLocation} from './locationDataProvider.js'
import {Location} from './location.js'

export const locationList = () => {
  const contentElement = document.querySelector(".locations")
  const allTheLocations = useLocation()

  for (const locationObject of allTheLocations) {
    const locationHTML = Location(locationObject)
    contentElement.innerHTML += locationHTML
  }
}
