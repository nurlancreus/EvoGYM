import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import AnchorLink from "react-anchor-link-smooth-scroll";

import Logo from "@/assets/Logo.png";
import ActionButton from "@/shared/ActionButton";

import { SelectedPage } from "@/model/types";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useOutsideClick } from "@/hooks/useOutsideClick";

type NavbarProps = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Navbar({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: NavbarProps) {
  const flexBetween = "flex items-center justify-between";
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const isLowerSmallScreens = useMediaQuery("(max-width: 320px)");
  const ref = useOutsideClick<HTMLDivElement>(() => setIsMenuToggled(false));

  const handleClickLink = (value: SelectedPage) => {
    setSelectedPage(value);
    if (isMenuToggled) setIsMenuToggled(false);
  };

  useEffect(() => {
    if (isAboveMediumScreens && isMenuToggled) setIsMenuToggled(false);
  }, [isAboveMediumScreens, isMenuToggled]);

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 transition duration-150`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left Side */}
            <img src={Logo} alt="logo" />
            {/* Right Side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    handleClickLink={handleClickLink}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    handleClickLink={handleClickLink}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    handleClickLink={handleClickLink}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    handleClickLink={handleClickLink}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled((prev) => !prev)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu Modal */}
      {!isAboveMediumScreens ? (
        <>
          <div
            className={`absolute inset-0 z-40 bg-black transition duration-200 ${
              isMenuToggled ? "visible opacity-50" : "invisible opacity-0"
            } `}
          />
          <div
            ref={ref}
            className={`fixed bottom-0 rounded-l-3xl transition duration-200 ${
              isMenuToggled ? "translate-x-0" : "translate-x-[20rem]"
            } right-0 z-40 h-full ${
              isLowerSmallScreens ? "w-full" : "w-[300px]"
            }  bg-primary-100 drop-shadow-xl`}
          >
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
              <Link
                page="Home"
                selectedPage={selectedPage}
                handleClickLink={handleClickLink}
              />
              <Link
                page="Benefits"
                selectedPage={selectedPage}
                handleClickLink={handleClickLink}
              />
              <Link
                page="Our Classes"
                selectedPage={selectedPage}
                handleClickLink={handleClickLink}
              />
              <Link
                page="Contact Us"
                selectedPage={selectedPage}
                handleClickLink={handleClickLink}
              />
            </div>
          </div>
        </>
      ) : null}
    </nav>
  );
}

type LinkProps = {
  page: string;
  selectedPage: SelectedPage;
  handleClickLink: (value: SelectedPage) => void;
};

function Link({ page, selectedPage, handleClickLink }: LinkProps) {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/ /g, "") as SelectedPage;

  return (
    <AnchorLink
      id={`${lowerCasePage}-anchor`}
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } cursor-pointer transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => handleClickLink(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}
