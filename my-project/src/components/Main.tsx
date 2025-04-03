import { useEffect } from "react";
import "./Main.scss";
import Sidebar from "./sidebar/Sidebar";
import AuthStore from "../stores/AuthStore";
import { observer } from "mobx-react-lite";
import CompaniesStore from "../stores/CompaniesStore";
import Content from "./content/Content";
import ContactsStore from "../stores/ContactsStore";

function Main() {
  useEffect(() => {
    const fetchData = async () => {
      await AuthStore.Authentificate();
      if (!AuthStore.isLoading) {
        await CompaniesStore.getCompany(12, AuthStore.token);
        await CompaniesStore.getPhotos('12');
        await ContactsStore.getContact(16, AuthStore.token);
      } else {
        fetchData();
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <Content />
    </div>
  );
}

export default observer(Main);
