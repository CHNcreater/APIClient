import axios from 'axios'
import { useCounterStore } from '../stores/counter'

export class HttpService {
  baseURL: string
  state = useCounterStore()

  constructor() {
    this.baseURL = 'http://localhost:3000'
  }

  async login() {
    // login logic
    return await axios.post(this.baseURL + '/login', {
      username: '',
      password: ''
    })
  }

  async checkToken() {
    //return await axios.get(this.baseURL + '/check-token');
    if (this.state.loggedIn) 
        return true
    return false
  }

  async getAssetTree() {
    return await axios.get(this.baseURL + '/asset-tree')
  }

  async getAssetPropertyByGuid(guid: string) {
    return await axios.get(this.baseURL + '/asset-property')
  }

  async getFileByGuid(guid: string) {
    return await axios.get(this.baseURL + '/file-by-guid')
  }

  async getAssetSeriesNoByGuid(guid: string) {
    return await axios.get(this.baseURL + '/asset-series-no-by-guid')
  }
}
