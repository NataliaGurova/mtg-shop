
import DocumentTitle from '../../components/DocumentTitle';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
// import { RegistrationForm } from '../../components/RegisterForm/RegisterForm';
import css from "./RegisterPage.module.css"
const RegisterPage = () => {
  return (
    <main className={css.mainContainer}>
      <DocumentTitle>Registration</DocumentTitle>
      <div className={css.container}>
        <RegisterForm />
        <img src="/public/photo_2.jpg" alt="Magic" className={css.img}/>
      </div>
    </main>
  );
}

export default RegisterPage;