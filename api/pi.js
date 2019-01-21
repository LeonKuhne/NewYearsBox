const HOST = 'http://192.168.0.5:7272'

function GET(endpoint, callback = ()=>{}) {
  fetch(HOST + '/' + endpoint)
  .then((res) => res.json())
  .then((state) => { callback(state) })
  .catch((err) => {
    console.log('Error on GET pi/' + endpoint + ': ' + err)
  })
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
