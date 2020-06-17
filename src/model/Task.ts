import Person from "./Person";
import Solution from "./Solution";

export default class Task {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public deadline: Date|null,
        public priority: number,
        public status: 'todo' | 'doing' | 'done',
        public doingPersons: Person[],
        public solutions: Solution[]
    ) {}
};