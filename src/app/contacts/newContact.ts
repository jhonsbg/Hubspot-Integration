export class NewContact {
    name: string;
    last_name: string;
    document_id: string;
    
    constructor(
        name: string,
        last_name: string,
        document_id: string
    ) {
        this.name = name;
        this.last_name = last_name;
        this.document_id = document_id;
    }
}
