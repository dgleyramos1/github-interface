import Layout from '.components/Layout';


const App = () => {
  return (
    <main>
      <Layout>
        <div>
          <img source="" alt="Pictures of user" />
          <h1>Dgley Ramos</h1>
          <h3>User.name: </h3>
          <span>benits</span>
          <div>
            <div>
              <h4>Followers</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Starreds</h4>
              <span>5</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>5</span>
            </div>
          </div>
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
}

export default App;
