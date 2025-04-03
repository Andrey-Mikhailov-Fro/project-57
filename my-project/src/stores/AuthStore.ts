import { makeAutoObservable, runInAction } from "mobx";

class AuthStore {
  token = "";
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  Authentificate = async () => {
    this.isLoading = true;
    const response = await fetch(
      "https://test-task-api.allfuneral.com/auth?user=USERNAME"
    );

    runInAction(() => {
      this.isLoading = false;
      this.token = response.headers.get("Authorization") as string;
    });
  };
}

export default new AuthStore();
