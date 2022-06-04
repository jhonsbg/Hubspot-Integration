import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Array<Contact> = [];

  constructor(private contactService:ContactService) { }

  getContacts():void{
    this.contactService.getContacts().subscribe((contacts) => 
    {
      this.contacts = contacts;
    });
  }

  async createContact(){
    const newName = document.getElementById('nameInput') as HTMLInputElement;
    const newLast_name = document.getElementById('lastNameInput') as HTMLInputElement;
    const newDocument_id = document.getElementById('documentIdInput') as HTMLInputElement;

    const name = newName.value;
    const last_name = newLast_name.value;
    const document_id = newDocument_id.value;

    (await this.contactService.createContact(name, last_name, document_id)).subscribe(contact => {
      console.info('Contact was created');
    })
    
    this.getContacts();
  }
  
  deleteContact(idRow:string){
    this.contactService.deleteContact(idRow).subscribe((contact) => {
      console.info('Contact was deleted');
    })
  }

  updateContact(idRow:string){
    const newName = document.getElementById('nameInput') as HTMLInputElement;
    const newLast_name = document.getElementById('lastNameInput') as HTMLInputElement;
    const newDocument_id = document.getElementById('documentIdInput') as HTMLInputElement;

    const name = newName.value;
    const last_name = newLast_name.value;
    const document_id = newDocument_id.value;

    this.contactService.updateContact(idRow, name, last_name, document_id).subscribe((contact) => {
      console.info('Contact was update');
    })
  }

  ngOnInit() {
    this.getContacts();
  }

}
