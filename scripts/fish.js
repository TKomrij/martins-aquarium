export const Fish = (fish) => {
  return `
      <section class="fish card">
          <div class="card__image_center"><img  class="fish__image image--card" src="${fish.image}" /></div>
          <div class="fish__content_padding fish__name">${fish.name}</div>
          <div class="fish__content_padding fish__species">${fish.species}</div>
          <div class="fish__content_padding fish__length">${fish.length}</div>
          <div class="fish__content_padding fish__location">${fish.location}</div>
          <div class="fish__content_padding fish__diet">${fish.food}</div>
      </section>
  `
}