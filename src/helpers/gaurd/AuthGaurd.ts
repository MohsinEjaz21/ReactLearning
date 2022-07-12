import { useNavigate } from 'react-router-dom';
import useUser from 'src/hooks/useUser';

function AuthGaurd(props: IPrivateRoute) {
  const { user } = useUser();
  const navigate = useNavigate();
  const renderFn = () => {
    if (!user) {
      return navigate('/login');
    }
    return props.children
  }
  return renderFn()
}

interface IPrivateRoute {
  isLogined?: boolean;
  hasRole?: IUserRoles,
  children: any;
}

type IUserRoles = "ADMIN" | "USER" | "GUEST";

export default AuthGaurd;