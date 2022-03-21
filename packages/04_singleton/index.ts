import LocalStorage from './src/localStorage'

const storage = LocalStorage.getInstance()

storage.setItem('name', 'coderwhy')

console.log(storage.getItem('name'))
