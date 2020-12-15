import axios from 'axios'

const AXIOS = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset = utf-8'
  },
  timeout: 1000
})
