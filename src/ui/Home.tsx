import { motion } from "framer-motion";

import HomePageText from "@/assets/images/HomePageText.png";
import HomePageGraphic from "@/assets/images/HomePageGraphic.png";
import SponsorRedBull from "@/assets/images/SponsorRedBull.png";
import SponsorForbes from "@/assets/images/SponsorForbes.png";
import SponsorFortune from "@/assets/images/SponsorFortune.png";
import ActionButton from "@/shared/ActionButton";
import LearnMoreLink from "@/shared/LearnMoreLink";

import { SelectedPage } from "@/model/types";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type HomeProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function Home({ setSelectedPage }: HomeProps) {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");

  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 py-4  md:h-screen md:py-10 md:pb-0"
    >
      {/* Image and Main Header */}
      <motion.div
        className="mx-auto flex w-5/6 flex-col items-center justify-center md:h-5/6 md:flex-row"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
              <img src={HomePageText} alt="home-page-text" />
            </div>
            <p className="mt-8 text-sm">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8 md:justify-start"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <LearnMoreLink
              setSelectedPage={setSelectedPage}
              selectedPage={SelectedPage.ContactUs}
            />
            {/* <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              Learn More
            </AnchorLink> */}
          </motion.div>
        </div>

        {/* Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>

      {/* Sponsors */}
      {isAboveMediumScreens ? (
        <div className="grid h-[150px] w-full items-center bg-primary-100 py-10">
          <div className="mx-auto w-5/6 ">
            <div className="mx-auto flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="forbes-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
