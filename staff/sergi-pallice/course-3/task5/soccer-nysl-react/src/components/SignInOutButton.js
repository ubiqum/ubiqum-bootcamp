import {signIn, signOut} from '../utilities/firebase.js';
import {useUserState} from '../utilities/firebase.js';

export default function SignInOutButton() {

    const [user] = useUserState();

    const SignInButton = () => (
        <button className="btn btn-secondary btn-sm" style={{float:'right'}}
            onClick={() => signIn()}>
        Sign In
        </button>
    );
  
  const SignOuButton = () => (
    <button className="btn btn-secondary btn-sm" style={{float:'right'}}
        onClick={() => signOut()}>
      Sign Out
    </button>
  );

  return (
    <div>
        { user ? <SignOuButton /> : <SignInButton /> }
    </div>
  )
  
  }