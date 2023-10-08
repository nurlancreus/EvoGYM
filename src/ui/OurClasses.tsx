import { motion } from "framer-motion";

import image1 from "@/assets/images/image1.png";
import image2 from "@/assets/images/image2.png";
import image3 from "@/assets/images/image3.png";
import image4 from "@/assets/images/image4.png";
import image5 from "@/assets/images/image5.png";
import image6 from "@/assets/images/image6.png";
import Heading from "@/shared/Heading";

import { type ClassType, SelectedPage } from "@/model/types";

const ourClasses: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image1,
  },
  {
    name: "Yoga Classes",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: image6,
  },
];

type OurClassesProps = {
  setSelectedPage: (value: SelectedPage) => void;
};

export default function OurClasses({ setSelectedPage }: OurClassesProps) {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-20 md:py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* Header */}
          <div className="md:w-3/5">
            <Heading>Our Classes</Heading>
            <p className="py-5">
              Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
              tellus quam porttitor. Mauris velit euismod elementum arcu neque
              facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
              enim mattis odio in risus nunc.
            </p>
          </div>
        </motion.div>

        {/* Side Scroll with overflow */}
        <div className="mt-10 w-full overflow-x-auto overflow-y-hidden md:h-[400px]">
          {/* Child container should have bigger width */}
          <ul className="w-max whitespace-nowrap">
            {ourClasses.map((classItem, index) => (
              <li
                key={`${classItem.name}-${index}`}
                className="mx-[10px] inline-block w-[350px] sm:w-[400px] md:w-[450px]"
              >
                <Class classItem={classItem} />
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

type ClassProps = {
  classItem: ClassType;
};

function Class({ classItem }: ClassProps) {
  const { name, image, description } = classItem;

  const overlayStyles = `absolute inset-0 z-30 flex flex-col items-center justify-center whitespace-normal bg-primary-500 p-5 text-center text-white opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <article className="relative md:h-[380px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        {description && <p className="mt-5">{description}</p>}
      </div>
      <img
        src={image}
        alt={`Image of ${name}`}
        className="h-full w-full object-cover"
      />
    </article>
  );
}
