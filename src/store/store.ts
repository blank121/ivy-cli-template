import ivyStore from '@ivy/fts/ivyStore'
import * as utils from '@ivy/fts/utils'
import showBindPhone from "@ivy/fts/showBindPhone"
export class Store {
  async login(force: any = false, disableOther = false) {
    return await ivyStore.login2(force, disableOther)
  }
  async bindPhone(options) {
    return await ivyStore.bindPhone(options)
  }
  async showBindPhone(redirectUrl) {
    return await showBindPhone(redirectUrl)
  }
  setAppLoginToken(token) {
    utils.cacheSet(ivyStore.getTokenKey(), token)
  }
}

export default new Store()
