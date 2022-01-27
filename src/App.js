import Layout from './components/layout';
import Profile from './components/profile';
import { ResetCSS } from './components/global/resetCSS';


const App = () => {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
