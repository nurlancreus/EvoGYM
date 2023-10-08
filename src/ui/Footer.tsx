import Logo from "@/assets/images/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="mx-auto flex w-5/6 flex-col justify-between gap-12 md:flex-row md:gap-16">
        <div className="flex basis-1/2 flex-col items-start gap-3 md:mt-0 md:gap-5">
          <img alt="logo" src={Logo} />
          <p>
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="flex basis-1/4 flex-col items-start gap-3 md:mt-0 md:gap-5">
          <h4 className="font-bold">Links</h4>
          <p>Massa orci senectus</p>
          <p>Et gravida id et etiam</p>
          <p>Ullamcorper vivamus</p>
        </div>
        <div className="flex basis-1/4 flex-col items-start gap-3 md:mt-0 md:gap-5">
          <h4 className="font-bold">Contact Us</h4>
          <p>Tempus metus mattis risus volutpat egestas.</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
}
