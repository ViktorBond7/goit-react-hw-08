import { FadeLoader } from "react-spinners";
import css from "./Loading.module.css";
const Loading = () => {
  return (
    <div className={css.loading}>
      <FadeLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
