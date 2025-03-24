import StyleSheet from "./Home.module.css";
import logo from "../../Assets/LOGO_3_recortada.jpg";
export const Home = () => {
  return (
    <body>
      <div className={StyleSheet.navBar}>
        <img src={logo} alt="" className={StyleSheet.logo} />
      </div>
    </body>
  );
};
