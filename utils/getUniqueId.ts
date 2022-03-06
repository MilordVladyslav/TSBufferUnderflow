import {UniqueId} from '../entities/Unique'

function getUniqueId(): UniqueId {
  return String(Math.random()).substr(2, 7)
}

export default getUniqueId