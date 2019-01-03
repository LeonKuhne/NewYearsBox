const HOST = 'http://192.168.1.3:7272'

function get(endpoint, callback) {
  fetch(HOST + '/' + endpoint, {
    method: 'get',
  })
  .then((res) => res.json())
  .then((state) => { callback(state) })
  .catch((err) => {
    console.log('Error on GET pi/' + endpoint + ': ' + err)
  })
}

function post (endpoint, callback, data = []) {
  let dataStr = data.length ? data.join('-') : null
  let url = [HOST, endpoint, dataStr].join('/')
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

export default {
  get,
  post
}


