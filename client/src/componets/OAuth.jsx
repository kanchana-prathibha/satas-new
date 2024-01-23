
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import {useNavigate}from 'react-router-dom';
import '../styles/AuthStyles.css'


export default function OAuth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleGoogleClick = async()=>{
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
      
            const result = await signInWithPopup(auth, provider);
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: result.user.displayName,
                  email: result.user.email,
                  photo: result.user.photoURL,
                }),
              });
            const data = await res.json();
            dispatch(signInSuccess(data));
            navigate('/');

        } catch (error) {
            console.log('could not sign in with google', error);
        }
    }
  return (
    <button 
    onClick={handleGoogleClick}
    type='button'
    className='googlebutton'
  >
    <img src="https://firebasestorage.googleapis.com/v0/b/mern-estate-fb465.appspot.com/o/logo-satas%2Fgoogle-new-logo-450x450-removebg-preview.png?alt=media&token=975acc5e-4928-46cd-830b-a4033d2f23d2" alt="" /> Continue with google
  </button>
  )
}
