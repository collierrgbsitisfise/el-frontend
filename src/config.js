const dev = {
    API_ENDPOINT: 'http://209.97.137.33:5000'
};

const prod = {
    API_ENDPOINT: 'http://209.97.137.33:5000'
};

const config = process.env.REACT_APP_STAGE === 'production' ?
    prod :
    dev;

export default {
    SEC_KEY: 'blalblalblablalblal',
    ...config
};
