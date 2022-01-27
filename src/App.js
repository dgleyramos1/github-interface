import Layout from './components/layout';
import Profile from './components/profile';
import { ResetCSS } from './components/global/resetCSS';
import Repositories from './components/repositories';
import GithubProvider from './providers/github-providers';


const App = () => {
  return (
    <main>
      <GithubProvider>
        <ResetCSS />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </main>
  );
}

export default App;
