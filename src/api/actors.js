import axios from 'axios'

const BASE_URL = 'https://lanciweb.github.io/demo/api'

export const fetchActors = () =>
	axios.get(`${BASE_URL}/actors/`).then((res) => res.data)

export const fetchActresses = () =>
	axios.get(`${BASE_URL}/actresses/`).then((res) => res.data)
