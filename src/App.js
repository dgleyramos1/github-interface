import Layout from './components/layout';
import Profile from './components/profile';
import Repositories from './components/repositories';
import useGithub from './hooks/gihub-hooks';


const App = () => {
  const { githubState } = useGithub();

  return (
        <Layout>
            {githubState.hasUser ? (
              <>
              {githubState.loading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <Profile />
                  <Repositories />
                </>
              )}
              </>
            ) : (
              <div>Nenhum usúario pequisado!</div>
            )}
          
        </Layout>
  );
}

export default App;
