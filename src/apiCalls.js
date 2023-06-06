const acquireInfo = () => {
return fetch(`https://api.disneyapi.dev/character?page=6&pageSize=50`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`${response.status}`)
    } else {
      return response.json();
    }
  })
}

export default acquireInfo;


// https://api.disneyapi.dev/character?page=3&pageSize=50`
// https://api.disneyapi.dev/character?page=6&pageSize=50
// https://api.disneyapi.dev/character?page=60&pageSize=50`