//Carlos Eduardo Goulart Oliveira
//Nicolas Siqueira Moraes

export default class Classroom {
  readonly students: string[] = [];

  constructor(students: string[]) {
    this.students = students;
  }

  public absent(assing: string[]): string[] {
    let missing: string[] = [];

    for (let i = 0; i < this.students.length; i++) {
      if (!assing.includes(this.students[i])) {
        missing.push(this.students[i]);
      }
    }
    return missing.sort();
  }
}

let monday = new Classroom(['bart', 'lisa', 'maggie']);
console.log(monday.absent(['maggie', 'lisa']));
