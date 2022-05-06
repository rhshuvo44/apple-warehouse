import { Spinner } from "react-bootstrap";
import { useAuthState, useSendEmailVerification } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase.init";

function RequiredAuth({ children }) {
  const [user, loading, error] = useAuthState(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(
    auth
  );
  const location = useLocation();
   if (loading) {
      return (
        <div className="py-5 text-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      );
    }
    if(user.providerData[0]?.providerId === 'password' && !user.emailVerified){
      return(
    <div className="container py-5 text-center">
      <h1 className="text-danger m-5">Your Email Not Verify</h1>
      <button className="btn btn-primary"
    onClick={async () => {
      await sendEmailVerification();
      toast('Sent email');
    }}
  >
    Verify email
  </button>
    </div>
      )
    }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
export default RequiredAuth;
