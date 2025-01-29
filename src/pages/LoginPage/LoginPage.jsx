
import DocumentTitle from '../../components/DocumentTitle';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from "./LoginPage.module.css"


const LoginPage = () => {
  return (
    <main className={css.mainContainer}>
      <DocumentTitle>Login</DocumentTitle>
      <LoginForm />
    </main>
  );
}

export default LoginPage;
