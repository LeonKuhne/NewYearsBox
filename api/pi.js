const HOST = 'http://192.168.1.3:7272'

function GET(endpoint = '', callback = null) {
  let url = HOST + '/' + endpoint
  try {
    let res = await fetch(url)
    let state = await res.json()

    callback ? callback(state) : return state
  catch(err) {
    console.log('Error on GET pi/' + endpoint + ': ' + err)
  }
}

function POST(endpoint, callback, data = []) {
  let url = HOST + '/' + endpoint
  
  if(data.length) {
    url += '/' + data.join('-')
  }

  fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: ''
  })
  .then((res) => res.json())
  .then((state) => { callback(state)} )
  .catch((err) => {
    console.log('Error on POST pi/' + endpoint + ': ' + err)
  })
}

export default { GET, POST }
