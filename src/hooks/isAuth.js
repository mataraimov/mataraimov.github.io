import { useSelector } from 'react-redux';
// import { store } from "../redux/store";
export function useAuth() {
  const { email, token, id } = useSelector((state) => state.user);
  return { isAuth: !!email, email, token, id };
}
