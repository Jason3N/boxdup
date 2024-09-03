// Profile.tsx
import { useUser } from '../UserContext';

function Profile() {
  const { user } = useUser();

  return (
    <div>
      {user ? (
        <div>
          <p>welcome, {user.user}!</p>
          <div>
            your top 4 movies!
        </div>
        <div> 
            your top 4 books!
        </div>
        </div>
      ) : (
        <p>you gotta sign up first!</p>
      )}
    </div>
  );
}

export default Profile;
