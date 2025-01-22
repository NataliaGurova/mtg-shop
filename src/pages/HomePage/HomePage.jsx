

// import DocumentTitle from '../../components/DocumentTitle';
import DocumentTitle from '../../components/DocumentTitle';
import css from "./HomePage.module.css"



const HomePage = () => {
  return (
    <main className={css.mainContainer}>
      <DocumentTitle>Home - сайт з купівлі карток Magic</DocumentTitle>
      <div className={css.container}>
        <h1 className={css.title}>
          Welcome to Magic The Gathering
          <span role="img" aria-label="Greeting icon">
          </span>
        </h1>
      </div>
    </main>
  );
}

export default HomePage;



// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import DocumentTitle from '../../components/DocumentTitle';
// import { TaskList } from '../../components/TaskList/TaskList';
// import { TaskEditor } from '../../components/TaskEditor/TaskEditor';
// import { fetchTasks } from '../../redux/tasks/operations';
// import { selectLoading } from '../../redux/tasks/selectors';

// export default function TasksPage() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

//   return (
//     <>
//       <DocumentTitle>Your tasks</DocumentTitle>
//       <TaskEditor />
//       <div>{isLoading && 'Request in progress...'}</div>
//       <TaskList />
//     </>
//   );
// }
