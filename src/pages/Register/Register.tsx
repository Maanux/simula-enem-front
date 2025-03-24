import { Link } from "react-router-dom";
import StyleSheet from "./Register.module.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className={StyleSheet.register}>
      <h1>Registre-se</h1>
      <p>Registre-se para realizar o login</p>
      <div className={StyleSheet.bottons}>
        <Link to="/Login">
          <button className={StyleSheet.buttonLogin}>Logar</button>
        </Link>
        <button className={StyleSheet.buttonRegister}>Registrar</button>
      </div>
      <div className={StyleSheet.forms}>
        <div className={StyleSheet.inputName}>
          <div className={StyleSheet.inputsName}>
            <p>Nome</p>
            <input type="text" placeholder="Nome" />
          </div>
          <div className={StyleSheet.inputsName}>
            <p>Sobrenome</p>
            <input type="text" placeholder="Sobrenome" />
          </div>
        </div>
        <p>Email</p>
        <input
          type="email"
          placeholder="email@exemplo.com"
          className={StyleSheet.otherInputs}
        />
        <p>Apelido</p>
        <input
          type="text"
          placeholder="Apelido"
          className={StyleSheet.otherInputs}
        />
        <div>
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
        </div>
        <p>Confirme a Senha</p>
        <div className={StyleSheet.passwordConteiner}>
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="••••••••"
            className={StyleSheet.inputPassword}
          />
          <button
            type="button"
            className={StyleSheet.passwordToggleBtn}
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <FaEyeSlash size={16} />
            ) : (
              <FaEye size={16} />
            )}
          </button>
        </div>
        <Link to="/Login">
          <button className={StyleSheet.buttonLogin2}>Registrar-se</button>
        </Link>
      </div>
    </div>
  );
};
