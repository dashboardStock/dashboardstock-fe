import createCache from "@emotion/cache";
const styleCache = createCache({ key: "css", prepend: true });

export default styleCache;
