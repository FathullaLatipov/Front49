import { Link } from "react-router-dom"
import { LoginWith } from "../../components/LoginWith/LoginWith"
import { AppHeading } from "../../components/Typography/AppHeading/AppHeading"
import { AppButton } from "../../components/UI/AppButton/AppButton"
import { AppInput } from "../../components/UI/AppInput/AppInput"
import { SCLoginPage } from "../LoginPage/LoginPage.styled"

export const RegistrationPage = () => {
  return (
    <SCLoginPage>
      <AppHeading headingText={"Регистрация"} headingType={"h1"}/>
      <form action="#">
        <AppInput type={"text"} placeholder={"Введите имя"} />
        <AppInput type={"email"} placeholder={"Почта"} />
        <AppInput type={"tel"} placeholder={"Номер телефона"} />
        <AppInput type={"password"} placeholder={"Пароль"} />
        <AppInput type={"text"} placeholder={"Город"} />
        <AppButton buttonText={"Зарегистрироваться"} type={"submit"} />
      </form>
      <div className="registration">
        <span>
        Уже есть аккаунт? <Link to="/">Войти</Link>
        </span>
        <p>Регистрация с помощью</p>
        <LoginWith />
      </div>
    </SCLoginPage>
  )
}
