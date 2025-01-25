
import DocumentTitle from '../../components/DocumentTitle';
import Loader from '../../components/Loader/Loader';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <main className={css.mainContainer}>
      <DocumentTitle>Home - сайт з купівлі карток Magic</DocumentTitle>
      <Loader/>
      <div className={css.container}>

          <img src="/public/magic.jpg" alt="Magic" />
      </div>
    </main>
  );
};

export default HomePage;

