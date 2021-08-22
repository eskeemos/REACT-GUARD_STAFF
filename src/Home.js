import React from 'react';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import NavBar from './NavBar';


const Home = () => {
  const { oktaAuth, authState } = useOktaAuth();

  if (!authState) return null;
  
  const logout = async () => oktaAuth.signOut();

  const MainContent = authState.isAuthenticated ? (
    <div>
      <p className="lead">
        You have entered the guard portal, 
      </p>
      <button className="btn btn-light btn-lg" onClick={logout}>Logout</button>
    </div>
  ) : (
    <div>
      <p className="lead">
        If you are a guard member, please get your credentials from your supervisor.
      </p>
      <Link to="/staff" className="btn btn-dark btn-lg">Login</Link>
    </div>
  );
  
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">
            Guard Staff Portal
          </h1>
          {MainContent}
        </div>
      </div>
    </div>
  );
};

export default Home;


