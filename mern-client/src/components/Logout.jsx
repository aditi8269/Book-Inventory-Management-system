import  { useContext } from 'react'
import { useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from '../contect/AuthProvider'

const Logout = () => {
    
    const location = useLocation();
    const navigate = useNavigate();
  
    const from = location.state?.from?.pathname || '/';

    const {logOut} = useContext(AuthContext)
    const handleLogout = () => {
        logOut().then(() => {
            alert('Logged out successfully');
            navigate(from, { replace: true }); // Navigate to the previous page
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Are you sure you want to logout?</h1>
      <div className="space-x-4">
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700"
        >
          Logout
        </button>
        <button
          onClick={() => navigate(-1)} // Navigate back to the previous page
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700"
        >
          Cancel
        </button>
      </div>
    </div>

  )
}

export default Logout