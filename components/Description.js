import Button from "./Button";

export default function Description() {
  return (
    <div>
      <p className="leading-tight text-white font-black xs:text-2xl md:text-5xl capitalize">
        special way {"\n"} to realize your own {"\n"} business.
      </p>

      <p className="text-white my-8 font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam.
      </p>

      <div className="flex xs:justify-center md:justify-start">
        <Button name="Get it Started" classes="bg-blue-400 mr-8" />
        <Button name="Watch Demo" classes="border border-white" />
      </div>
    </div>
  );
}
