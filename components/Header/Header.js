import React, { useState } from "react";
import Modal from "../UI/Modal";
import Login from "../Auth/login";
import { useGlobalAuthContext } from "/context/AuthContext";
import PrimaryButton from "../UI/Button/PrimaryButton";
import { RiUser3Fill } from "react-icons/ri";
import ProfileDropdown from "./ProfileDropdown";
import { useRouter } from "next/router";
import Link from "next/link";
const Header = () => {
  const {
    user,
    showLoginModal,
    setShowLoginModal,
    showProfileDropdown,
    setShowProfileDropdown,
  } = useGlobalAuthContext();
  // const [showLoginModal, setShowLoginModal] = useState(false);
  const router = useRouter();

  return (
    <div className="absolute top-0 left-0 right-0 flex items-center justify-center w-full">
      <div className="w-full max-w-[1400px] flex items-center h-[120px] justify-between px-8 z-50">
        <p className="text-2xl font-black">PODMODE</p>

        <ul className="flex items-center justify-center gap-8">
          <Link href="/">Home </Link>
          <Link href="/all">All Podcasts</Link>
          <Link href="/trending">Trending</Link>
          <li>About Us</li>
          <PrimaryButton
            handleClick={() => router.push("/create/dashboard")}
            size="small"
          >
            Start Creating
          </PrimaryButton>
          {user ? (
            <button
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
              className="flex items-end justify-center w-10 h-10 text-3xl rounded-full text-white/90 bg-white/10"
            >
              <RiUser3Fill className="rounded-full" />
            </button>
          ) : (
            <PrimaryButton
              size="small"
              handleClick={() => setShowLoginModal(true)}
            >
              Login
            </PrimaryButton>
          )}
        </ul>
      </div>
      <Modal
        isVisible={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      >
        <Login />
      </Modal>
      <Modal
        isVisible={showProfileDropdown}
        onClose={() => setShowProfileDropdown(false)}
      >
        <ProfileDropdown />
      </Modal>
    </div>
  );
};

export default Header;
