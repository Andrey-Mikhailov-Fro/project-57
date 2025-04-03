import { makeAutoObservable, runInAction } from "mobx";

interface Contract {
  no: string;
  issue_date: string;
}

interface PhotoApi {
  name: string;
  filepath: string;
  thumbpath: string;
  createdAt: string;
}

interface Photo {
  id: string,
  image: string[],
}

export interface Company {
  id: string;
  contactId: string;
  name: string;
  shortName: string;
  businessEntity: string;
  contract: Contract;
  type: string[];
  status: string;
  photos: PhotoApi[];
  createdAt: string;
  updatedAt: string;
}

class CompaniesStore {
  companies: Company[] = [];
  photos: Photo[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getCompany = async (id: number, token: string) => {
    this.isLoading = true;
    const response = (
      await fetch(`https://test-task-api.allfuneral.com/companies/${id}`, {
        headers: {
          Authorization: token,
        },
      })
    ).json();

    const company: Company = await response;

    console.log(company);

    runInAction(() => {
        this.companies = [...this.companies, company];
        this.isLoading = false;
    })
  }

  getPhotos = async (id: string) => {
    const company = this.companies.find((item) => item.id === id) as Company;
    const response = await company.photos.map(async (item) => {
      return (await fetch(item.filepath));
    });
    console.log(response);
  }
}

export default new CompaniesStore();
