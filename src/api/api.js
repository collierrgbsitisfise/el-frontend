import link from './link.api';
import proxy from './proxy.api';

const {
  getShortLink
} = link;

const {
  getProxy
} = proxy;

const linkAPI = {
  getShortLink
}

const proxyAPI = {
  getProxy
}

export default {
  ...linkAPI,
  ...proxyAPI
};
