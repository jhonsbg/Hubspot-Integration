export class Contact {
    id: string;
    name: string;
    last_name: string;
    document_id: string;
    
    constructor(
        id: string,
        name: string,
        last_name: string,
        document_id: string
    ) {
        this.id = id;
        this.name = name;
        this.last_name = last_name;
        this.document_id = document_id;
    }
}
