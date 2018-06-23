const dev = {
    API_ENDPOINT: 'http://localhost:5000'
};

const prod = {
    API_ENDPOINT: 'https://elshare.co'
};

const config = process.env.REACT_APP_STAGE === 'production' ?
    prod :
    dev;

export default {
    production: process.env.REACT_APP_STAGE === 'production',
    SEC_KEY: 'blalblalblablalblal',
    ...config
};
