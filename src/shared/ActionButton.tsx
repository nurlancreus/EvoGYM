import { ReactNode } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import { SelectedPage } from "../model/types";

type ActionButtonProps = {
  children: ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

function ActionButton({ children, setSelectedPage }: ActionButtonProps) {
  return (
    <AnchorLink
      className="cursor-pointer rounded-md bg-secondary-500 px-6 py-2 
    transition duration-300 hover:bg-primary-500 hover:text-white md:px-10"
      href={`#${SelectedPage.ContactUs}`}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    >
      {children}
    </AnchorLink>
  );
}

export default ActionButton;
