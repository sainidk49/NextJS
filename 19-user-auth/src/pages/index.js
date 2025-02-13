// import { useAuth } from '../context/AuthContext';
// import { useRouter } from 'next/router';
import LoginForm from '../components/LoginForm';

export default function Home() {
  // const { user } = useAuth();
  // const router = useRouter();

  // if (user) {
  //   // Redirect to a protected page if the user is logged in
  //   router.push('/protected');
  //   return null; // To prevent rendering the current page while redirecting
  // }

  return (
    <div>
      <h1>Welcome to My Auth App</h1>
      <p>To get started, please login or register:</p>
      <LoginForm />
    </div>
  );
}
