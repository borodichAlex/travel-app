const basePath = "https://images.unsplash.com/";
const defaultParams = {
  "ixid": "MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D",
  "ixlib": "rb-1.2.1",
  "auto": "format",
  "fit": "crop",
  "q": "80",
}

export const getResizeImageUnsplash = (imgId, width) => {
  let params = '';

  for (let param in defaultParams) {
    params += '&' + param + '=' + defaultParams[param];
  }

  return basePath + imgId + '?' + params + '&w=' + width;
}