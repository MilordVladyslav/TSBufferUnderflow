import Question from './Question'
import Answer from './Answer'
import getUniqueId from '../utils/getUniqueId'
import Unique, { UniqueId } from './Unique'
import Summary from './Summary'

enum Permission {
  Normal,
  Admin
}

class User implements Unique, Summary {
  private id: string
  private name: string
  private questions: Question[]
  private answers: Answer[]
  private permission: Permission
  static readonly Permission = Permission
  constructor(
    name: string,
    permission: Permission = Permission.Normal
  ) {
    this.name = name
    this.permission = permission
    this.questions = []
    this.answers = []
    this.id = getUniqueId()
  }
  getId(): string {
    return this.id
  }
  getSummary(prefix: string = ''): string {
    const qs = this.questions.length
    const ans = this.answers.length
    return `${prefix}${this.name} (${this.id}) [${qs} qs, ${ans} ans]`
  }
  addQuestion(question: Question): void {
    this.questions.push(question)
  }
  addAnswer(answer: Answer): void {
    this.answers.push(answer)
  }
  canAnswerQuestionOpenedBy(user: User): boolean {
    return (
      this.permission === Permission.Admin
      || user.getId() === this.getId()
    );
  }

}
export default User