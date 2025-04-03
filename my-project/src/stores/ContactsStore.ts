import { makeAutoObservable, runInAction } from "mobx";

export interface Contact {
    id: string;
    lastname: string;
    firstname: string;
    phone: string;
    email: string;
    createdAt: string | Date;
    updatedAt: string | Date;
  }

class ContactsStore {
  contacts: Contact[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getContact = async (id: number, token: string) => {
    this.isLoading = true;
    const response = (
      await fetch(`https://test-task-api.allfuneral.com/contacts/${id}`, {
        headers: {
          Authorization: token,
        },
      })
    ).json();

    const contact: Contact = await response;

    console.log(contact);

    runInAction(() => {
        this.contacts = [...this.contacts, contact];
        this.isLoading = false;
    })
  };
}

export default new ContactsStore();
