
import DocumentTitle from '../../components/DocumentTitle';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
// import { RegistrationForm } from '../../components/RegisterForm/RegisterForm';
import css from "./RegisterPage.module.css"
const RegisterPage = () => {
  return (
    <main className={css.mainContainer}>
      <DocumentTitle>Registration</DocumentTitle>
      <RegisterForm />
    </main>
  );
}

export default RegisterPage;