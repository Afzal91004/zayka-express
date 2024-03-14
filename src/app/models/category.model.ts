export class Category {
    
    constructor(
        public id: string,
        public name: string,
        public uid: string,
        public created_at?: Date,
        public updated_at?: Date
    ) {}

}