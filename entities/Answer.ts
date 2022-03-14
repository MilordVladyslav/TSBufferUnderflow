import Summary from './Summary'
import Unique, { UniqueId } from './Unique'
import User from './User'
import Question from './Question'
import getUniqueId from '../utils/getUniqueId'
import Attachment from './Attachment'

class Answer implements Unique, Summary{
  private id: UniqueId
  private author: User
  private text: string
  private question: Question
  private attachments: Attachment[]
  constructor(
    author: User,
    question: Question,
    text: string,
    attachments: Attachment[] = []
  ) {
    this.id = getUniqueId()
    this.question = question
    this.attachments = attachments
    this.text = text
    this.author = author
  }
  getId(): UniqueId {
    return this.id
  }
  getSummary(prefix: string = ''): string {
    const author = this.author.getSummary(' - ')
    const question = this.question.getSummary(' - ')
    const maxTextLegth = 40
    const textSnippet = this.text.length >= maxTextLegth
      ? `${this.text.substring(0, maxTextLegth - 3)}...`
      : this.text
    const lines = [
      `Answer: ${textSnippet}`,
      `Attachments: ${this.attachments.length}`,
      'Author: ',
      author,
      'Question: ',
      question
    ]
    return lines
      .map(line => `${prefix}${line}`)
      .join('\n')
  }
  addAttachment(attachment: Attachment) {
    this.attachments.push(attachment)
  }
  setText(text: string) {
    this.text = text
  }
}
export default Answer