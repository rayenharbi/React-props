import PropTypes from 'prop-types';
import '../style.css';
import Photo from './Photo';

function Profile(props) {
  const { fullName, bio, profession, handleName, children } = props;

  return (
    <div className='container'>
      <h2 style={{ color: 'blue' }}>{fullName}</h2>
      <p>{bio}</p>
      <p>{profession}</p>
      {children}
      <Photo/>
      <button className="button" onClick={() => handleName(fullName)}>Click me!</button>
      
        
        
    </div>
  );
}

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  profession: PropTypes.string.isRequired,
  handleName: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

Profile.defaultProps = {
  fullName: 'Rayen Harbi',
  bio: 'No bio available',
  profession: 'Unknown',
};

export default Profile;