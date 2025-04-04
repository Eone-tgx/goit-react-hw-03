import css from "./Contact.module.css";

const Contact = ({ name, number, onDelete }) => {
  return (
    <div className={css.contactListWrapper}>
      <ul className={css.contactList}>
        <li>{name}</li>
        <li>{number}</li>
      </ul>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default Contact;
