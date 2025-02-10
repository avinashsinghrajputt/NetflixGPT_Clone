import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {
    const dispatch = useDispatch();
   const navigate = useNavigate();
   const user = useSelector(store => store.user);
   const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      })
      .catch((error) => {
      navigate("/error");
    });
   };


      useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
         if (user) {
           const {uid,email,displayName,photoURL} = user;
           dispatch(addUser({
             uid:uid,
             email:email,
             displayName:displayName,
             photoURL:photoURL})
           );
           navigate("/browse");
         } else {
           dispatch(removeUser());
           navigate("/");
         }
       });
       //unsubscribe when component unmount
       return () => unsubscribe();

      }, [dispatch, navigate]);

    const handleGptSearchClick = () => {
      //toggle gpt search
      dispatch(toggleGptSearchView());
    }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img
      className="w-44"
      src={LOGO} 
      alt="netlogo" 
      />
      {user &&(
      <div className='flex p-2'>
        <select>
          <option value="en">English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">Spanish</option>
        </select>
        <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearchClick}>GPT Search</button>
        <img 
        className='w-12 h-12 rounded-lg'
        alt='usericon'
        src={user?.photoURL}
        />
     <button onClick={handleSignOut} className='font-bold text-white'>
      (Sign Out)
      </button>
      </div>
      )}
    </div>
  );
}

export default Header;