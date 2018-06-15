import link from './link.api';

const {
  getShortLink
} = link;

const linkAPI = {
  getShortLink
}
console.log('it is fucckiong');
console.log({
  ...linkAPI
})
export default {
  ...linkAPI
};
