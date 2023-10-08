import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "../model/types";

type LearnMoreLinkProps = {
  setSelectedPage: (value: SelectedPage) => void;
  selectedPage: SelectedPage;
};

export default function LearnMoreLink({
  setSelectedPage,
  selectedPage,
}: LearnMoreLinkProps) {
  return (
    <AnchorLink
      id={`${selectedPage}-more`}
      className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
      onClick={() => setSelectedPage(selectedPage)}
      href={`#${selectedPage}`}
    >
      Learn More
    </AnchorLink>
  );
}
