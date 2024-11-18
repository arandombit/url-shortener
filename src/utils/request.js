import fetch from 'unfetch'

const post = data => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})

const json = res => res.ok ? res.json() : Promise.reject(new Error(res.statusText))

export default {
  post: (url, data) => fetch(url, post(data)).then(json)
}
