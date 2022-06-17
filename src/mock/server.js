import { createServer } from 'miragejs'
import { db } from './db'

export const startMockAPI = () => {
  createServer({
    routes () {
      this.get('/api/make', () => ({
        data: db.makes.data
      }))
      this.get('/api/model/:id', (schema, request) => ({
        data: db.models.data.filter(model => model.MakeID === +request.params.id)
      })),
      this.get('/api/version/:id', (schema, request) => ({
        data: db.versions.data.filter(version => version.ModelID === +request.params.id)
      })),
      this.get('/api/fabrication', (schema, request) => ({
        data: db.fabrication.data
      })),
      this.get('/api/range', (schema, request) => ({
        data: db.range.data
      })),
      this.get('/api/prices', (schema, request) => ({
        data: db.prices.data
      })),
      this.get('/api/vehicle/:page', (schema, request) => {
        const responseSize = 10
        const totalVehicles = db.vehicles.data.length
        const totalPages = Math.ceil(totalVehicles / responseSize)
        const pageNumber = +request.params.page
        const vehicles = db.vehicles.data

        if (pageNumber > totalPages) return ({ data: [] })
        const startInTerval = (pageNumber - 1) * responseSize
        const endInterval = pageNumber * responseSize
        const data = vehicles.slice(startInTerval, endInterval)
        return ({ data })
      })
    }
  })
}
