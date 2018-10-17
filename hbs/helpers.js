const hbs = require('hbs');

//helpers
hbs.registerHelper('getAnio', () => {
  return new Date().getFullYear();
})

hbs.registerHelper('fc', () => {
  return 'https://www.facebook.com/NebulosaWebDesign/';
});

hbs.registerHelper('ins', () => {
  return 'https://www.instagram.com/nebulosaweb/';
});

hbs.registerHelper('email', () => {
  return 'nebulosawebdesign@gmail.com';
});

hbs.registerHelper('phone', () => {
  return '+584245755070';
});