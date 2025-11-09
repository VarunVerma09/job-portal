import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LogOut, Menu, User2, X } from "lucide-react";
import { useSelector } from "react-redux";

export default function Navbar() {
  // const [user, setUser] = useState(false);
  const {user} = useSelector(store=>store.auth)
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center md:px-50 px-7 py-6 shadow-sm bg-white">
      {/* Logo */}
      <Link to="/" className="text-4xl font-bold">
        <span className="text-black">Job</span>
        <span className="text-red-500">Portal</span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Links (Desktop) */}
      <div className="hidden md:flex gap-8 text-2xl font-semibold text-gray-800 items-center">
        <Link to="/" className="hover:text-red-500 transition-colors">
          Home
        </Link>
        <Link to="/jobs" className="hover:text-red-500 transition-colors">
          Jobs
        </Link>
        <Link to="/browse" className="hover:text-red-500 transition-colors">
          Browse
        </Link>

        {!user ? (
          <div className="flex gap-3">
            {/* ✅ Login button with Link */}
            <Link to="/login">
              <Button
                variant="outline"
                className="cursor-pointer text-lg px-5 py-5"
              >
                Login
              </Button>
            </Link>

            {/* ✅ Signup button with Link */}
            <Link to="/signup">
              <Button className="cursor-pointer text-lg px-5 py-5 bg-purple-600 hover:bg-purple-700">
                Signup
              </Button>
            </Link>
          </div>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-full p-0">
                <Avatar className="h-12 w-12 border-2 cursor-pointer">
                  <AvatarImage src="/avatar.png" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
              align="end"
              className="w-48 p-3 bg-white rounded-xl shadow-lg border border-gray-100"
            >
              <DropdownMenuItem
                className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-all"
                onClick={() => console.log("User logged out")}
              >
                <Avatar className="h-10 w-10 border border-gray-300">
                  <AvatarImage src="/avatar.png" alt="User" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <span className="text-xs text-gray-500">
                    Sign out of your account
                  </span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-all">
                  <User2 /> <span className="font-medium"><Link to="/profile">View Profile</Link></span>
                </div>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <div className="flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-all">
                  <LogOut /> <span className="font-medium">Log Out</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {/* Mobile Menu (Dropdown-style) */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden font-semibold text-gray-800 z-50">
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-red-500 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/jobs"
            onClick={() => setMenuOpen(false)}
            className="hover:text-red-500 transition-colors"
          >
            Jobs
          </Link>
          <Link
            to="/browse"
            onClick={() => setMenuOpen(false)}
            className="hover:text-red-500 transition-colors"
          >
            Browse
          </Link>

          {/* ✅ Login and Signup buttons in Mobile Menu */}
          <div className="flex gap-3">
            <Link to="/login" onClick={() => setMenuOpen(false)}>
              <Button variant="outline" className="text-base px-5 py-4">
                Login
              </Button>
            </Link>

            <Link to="/signup" onClick={() => setMenuOpen(false)}>
              <Button className="text-base px-5 py-4 bg-purple-600 hover:bg-purple-700">
                Signup
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
