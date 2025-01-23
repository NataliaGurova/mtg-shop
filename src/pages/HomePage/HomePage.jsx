
import DocumentTitle from '../../components/DocumentTitle';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <main className={css.mainContainer}>
      <DocumentTitle>Home - сайт з купівлі карток Magic</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>
          Welcome to Magic: The Gathering{' '}
          <span role="img" aria-label="Greeting icon">✨</span>
        </h1>
      </div>
    </main>
  );
};

export default HomePage;

