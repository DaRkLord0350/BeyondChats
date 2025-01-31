"use client";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from 'next/navigation';

export default function GoogleButton() {
  const { loginWithGoogle } = useAuth();
  
  const router = useRouter();
  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
    } catch (error) {
      alert(error.message);
    }
    
    router.push('/home');
  };

  return (
    // <Button fullWidth variant="outlined" onClick={() => alert('Sign in with Google')} startIcon={<GoogleIcon />}>Sign in with Google</Button>
    <button 
      onClick={handleGoogleSignIn} 
      className="flex items-center justify-center bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-900 transition-all duration-300"
    >
      <img src="/google-icon.svg" alt="Google" className="w-5 h-5 mr-2" />
      Sign in with Google
    </button>
  );
}
