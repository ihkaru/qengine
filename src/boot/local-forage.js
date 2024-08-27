import localForage from 'localforage'

localForage.config({
  name: 'qengine',
  storeName: 'auth_store'
})

export default localForage
