import { RiContactsBookLine } from "react-icons/ri";
import css from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={css.container}>
      <RiContactsBookLine size={400} />
      <h1>Contacts book</h1>
    </div>
  );
};
export default HomePage;
