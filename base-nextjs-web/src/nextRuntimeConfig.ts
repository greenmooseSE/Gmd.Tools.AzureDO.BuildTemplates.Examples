import getConfig from 'next/config'

const config = getConfig() || {publicRuntimeConfig: {}}
const {publicRuntimeConfig} = config;
export default publicRuntimeConfig;
