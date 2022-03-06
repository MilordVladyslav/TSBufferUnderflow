import Unique from './Unique'
import Summary from './Summary'
interface Attachment extends Unique, Summary {
  upload(): Promise<boolean>
}
export default Attachment