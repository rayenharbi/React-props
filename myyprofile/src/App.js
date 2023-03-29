import './App.css';
import Photo from './profile/Photo';
import Profile from './profile/Profile';
import './style.css';


function App() {
  const handleName = (name) => {
    alert(`Hello, my name is ${name}`);
  };

  return (
    
    <div className="App">
      
      <div className="flex-container">
      
      <Profile
        fullName="Rayen Harbi"
        bio="I'm a software engineer"
        profession="Fullstuck Developer"
        handleName={handleName}
      />
      
        
        
        
     
      
      </div>
      
    </div>
    
  );
}

export default App;
