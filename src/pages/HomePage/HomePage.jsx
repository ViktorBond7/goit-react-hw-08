import { RiContactsBookLine } from "react-icons/ri";
import css from "./HomePage.module.css";
import DocumentTitle from "../../components/DocumentTitle/DocumentTitle";

const HomePage = () => {
  return (
    <div className={css.container}>
      <DocumentTitle>Home</DocumentTitle>
      <RiContactsBookLine size={400} />
      <h1>Contacts book</h1>
    </div>
  );
};

export default HomePage;
