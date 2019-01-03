const HOST = 'http://192.168.1.3:7272'

export function GET(endpoint, callback) {
  fetch(HOST + '/' + endpoint, {
    method: 'get',
  })
  .then((res) => res.json())
  .then((state) => { callback(state) })
  .catch((err) => {
    console.log('Error on GET pi/' + endpoint + ': ' + err)
  })
}

export function POST(endpoint, callback, data = []) {
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

