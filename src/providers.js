import GithubProvider from './providers/github-providers';
import { ResetCSS } from './global/resetCSS';
import App from './App';



const Providers = () => {
  return (
      <main>
        <GithubProvider>
            <ResetCSS />
            <App />
        </GithubProvider>
      </main>
  );
}

export default Providers;