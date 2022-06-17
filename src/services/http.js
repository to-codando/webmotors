import { endpoints } from './endpoints'

export const apiFactory = () => {
  const base = 'http://localhost:8080/api'

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }

  }

  const getData = async (resource) => {
    const config = { method: 'GET', ...options }
    try {
      const url = `${base}/${resource}`
      const response = await fetch(url, config)
      const { data } = await response.json()
      return data
    } catch (err) {
      console.log(err)
    }

    return []
  }

  const getMakes = async () => {
    const config = { method: 'GET', ...options }
    try {
      const url = `${base}/${endpoints.make}`
      const response = await fetch(url, config)
      const { data } = await response.json()
      return data
    } catch (err) {
      console.log(err)
    }

    return []
  }

  const getModels = async (id) => {
    const config = { method: 'GET', ...options }
    try {
      const url = `${base}/${endpoints.model}/${id}`
      const response = await fetch(url, config)
      const { data } = await response.json()
      return data
    } catch (err) {
      console.log(err)
    }

    return []
  }

  const getVersions = async (id) => {
    const config = { method: 'GET', ...options }
    try {
      const url = `${base}/${endpoints.version}/${id}`
      const response = await fetch(url, config)
      const { data } = await response.json()
      return data
    } catch (err) {
      console.log(err)
    }

    return []
  }

  return { getMakes, getModels, getVersions, getData }
}
