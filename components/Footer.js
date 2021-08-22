import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-black flex xs:mt-12 xs:justify-center md:justify-start md:ml-48">
      <span className="font-bold -mt-1" style={{ color: "#979A99" }}>
        Find us Here
      </span>

      <span className="ml-2 -mt-3 font-black text-pink-600	">_</span>

      <FaFacebookF className="mx-2" color="#979A99" />
      <FaLinkedinIn className="mx-2" color="#979A99" />
      <FaInstagram className="mx-2" color="#979A99" />
      <FaYoutube className="mx-2" color="#979A99" />
      <FaTwitter className="mx-2" color="#979A99" />
    </footer>
  );
}
