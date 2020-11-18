export const Location = (location) => {
  return `
    <section class="location">
      <div><img class="location__image" src="${location.image}" alt=""></div>
      <div class="location__info">
        <div class="location__name">${location.name}</div>
        <div class="location__padding location__url"><a href="${location.url}">${location.urlTitle}</a></div>
        <div class="location__padding location__desc">${location.desc}</div>
      </div>
    </section>
  `
}