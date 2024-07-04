import getConfig from 'next/config'

const config = getConfig() || {publicRuntimeConfig: {}}
const {publicRuntimeConfig} = config;
console.log(`Environment is: ${config.publicRuntimeConfig.environment}`)
export default publicRuntimeConfig;
