import { Link } from "react-router-dom";
import StyleSheet from "./Login.module.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../../Assets/LOGO_1.jpg";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={StyleSheet.login}>
      <img src={logo} alt="Logo" className={StyleSheet.logo} />
      <p>Entre na sua conta ou crie uma nova</p>
      <div className={StyleSheet.bottons}>
        <button className={StyleSheet.buttonLogin}>Logar</button>
        <Link to="/Register">
          <button className={StyleSheet.buttonRegister}>Registrar</button>
        </Link>
      </div>
      <div className={StyleSheet.forms}>
        <p>Email</p>
        <input
          type="email"
          placeholder="email@exemplo.com"
          className={StyleSheet.inputEmail}
        />
        <p>Senha</p>
        <div className={StyleSheet.passwordConteiner}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className={StyleSheet.inputPassword}
          />
          <button
            type="button"
            className={StyleSheet.passwordToggleBtn}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
          </button>
        </div>
        <Link to="/Home">
          <button className={StyleSheet.buttonLogin2}>Logar</button>
        </Link>
      </div>
    </div>
  );
};
