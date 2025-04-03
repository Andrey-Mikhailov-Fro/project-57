import { observer } from "mobx-react-lite";
import CompaniesStore, { Company } from "../../stores/CompaniesStore";
import editIcon from "./edit.svg";
import deleteIcon from "./delete.svg";
import "./Content.scss";
import ContactsStore, { Contact } from "../../stores/ContactsStore";
import Button from "../service/OutlineButton";
import { Edit, Delete, PhotoAdd } from "../service/Icons";

function Content() {
  const company = CompaniesStore.companies.find(
    (item) => item.id === "12"
  ) as Company;
  const contact = ContactsStore.contacts.find(
    (item) => item.id === "16"
  ) as Contact;

  if (!company || !contact) return <div>Waiting...</div>;
  return (
    <div className="content">
      <div className="organization">
        <div className="organization-title">
          <h2>{company.name}</h2>
          <div className="button-group">
            <button>
              <img src={editIcon} alt="edit" />
            </button>
            <button>
              <img src={deleteIcon} alt="delete" />
            </button>
          </div>
        </div>
        <div className="organization-cards">
          <div className="card">
            <div className="card-title">
              <h3>Company Details</h3>
              <Button variant="outline" icon={Edit} text="Edit" />
            </div>
            <div className="card-data">
              <div>
                <span className="card-data-prop">Agreement:</span>
                <div className="card-data-date">
                  <span>{company.contract.no}</span>
                  <span>/</span>
                  <span>
                    {new Date(company.contract.issue_date).toDateString()}
                  </span>
                </div>
              </div>
              <div>
                <span className="card-data-prop">Business entity:</span>
                <span>{company.businessEntity}</span>
              </div>
              <div>
                <span className="card-data-prop">Company type:</span>
                <span>
                  {company.type
                    .map((item) => item.split("_").join(" "))
                    .join(", ")}
                </span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <h3>Contacts</h3>
              <Button variant="outline" icon={Edit} text="Edit" />
            </div>
            <div className="card-data">
              <div>
                <span className="card-data-prop">Responsibale person:</span>
                <span>{contact.firstname + " " + contact.lastname}</span>
              </div>
              <div>
                <span className="card-data-prop">Phone number:</span>
                <span>{contact.phone}</span>
              </div>
              <div>
                <span className="card-data-prop">E-mail:</span>
                <span>{contact.email}</span>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-title">
              <h3>Photos</h3>
              <Button variant="outline" icon={PhotoAdd} text="Add" />
            </div>
            <div className="card-photo-container">
              {company.photos.map((item) => (
                <div>
                  <img className="card-photo" src={item.thumbpath} />
                  <div style={{position: 'absolute', top: '8px', right: '8px'}}>
                    <Button variant="filled" icon={Delete} text="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(Content);
