import {createStore} from 'redux'
import reduser from './CombineReduser'
const store = createStore(
    reduser
)

export default store