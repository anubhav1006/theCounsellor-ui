export const constants =  {
  baseUrlInit: "http://",
  baseUrl: "localhost:8095/"
}

export const getBaseUrl = () => {
  return `${constants.baseUrlInit + constants.baseUrl }`;
}