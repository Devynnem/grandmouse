const acquireInfo = () => {
return fetch(`https://api.disneyapi.dev/character?page=3&pageSize=50`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status}`)
    } else {
      return response.json();
    }
  })
}

export default acquireInfo;
