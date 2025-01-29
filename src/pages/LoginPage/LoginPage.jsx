
import DocumentTitle from '../../components/DocumentTitle';
import LoginForm from '../../components/LoginForm/LoginForm';
import css from "./LoginPage.module.css"


const LoginPage = () => {
  return (
    <main className={css.mainContainer}>
      <DocumentTitle>Login</DocumentTitle>
      <div className={css.container}>
        <LoginForm />
        <img src="/public/photo_2025-01-29_16-22-18.jpg" alt="Magic" className={css.img}/>
      </div>
    </main>
  );
}

export default LoginPage;
