import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

export const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          BeyondChats
        </Link>
        <nav>
          {user ? (
            <button onClick={logout} className="bg-red-500 p-2 rounded-lg">
              Logout
            </button>
          ) : (
            <Link href="/auth" className="bg-green-500 p-2 rounded-lg">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
