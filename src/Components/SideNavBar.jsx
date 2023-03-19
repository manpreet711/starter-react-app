import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import HelpSection from "./HelpCard";

const SideNavBar = () => {
  const sideBarData = [
    {
      title: "Dashboard",
      icon: <FontAwesomeIcon icon={faCheck} />,
      link: "/",
    },
    {
      title: "orders",
      icon: <FontAwesomeIcon icon={faCheck} />,
      link: "/",
    },
    {
      title: "TeamMembers",
      icon: <FontAwesomeIcon icon={faCheck} />,
      link: "/",
    },
    {
      title: "Partners",
      icon: <FontAwesomeIcon icon={faCheck} />,
      link: "/",
    },
    {
      title: "Product Listing",
      icon: <FontAwesomeIcon icon={faCheck} />,
      link: "/",
    },
    {
      title: "Award and Honurs",
      icon: <FontAwesomeIcon icon={faCheck} />,
      link: "/",
    },
    {
      title: "About Us",
      icon: <FontAwesomeIcon icon={faCheck} />,
      link: "/",
    },
    {
      title: "Payment info",
      icon: <FontAwesomeIcon icon={faCheck} />,
      link: "/",
    },
  ];

  return (
    <>
      <div className="sidebar">
        <img
          style={{ lineHeight: 4 }}
            src="https://www.atinks.com/wp-content/uploads/2017/10/A.T-inks-logo-600-DPI-1-e1545645137933.png"
          alt="Profile image"
          width="44"
          height="45"
          className="image--cover"
        />{" "}
        AT Links
        <a href="#home">Dashboard</a>
        <a href="#news">Orders</a>
        <a href="#contact">Team Members</a>
        <a href="#about">Partners</a>
        <a href="#about">Product Listings</a>
        <a href="#about">Awards & Honurs</a>
        <a className="active" href="#about">
          About Us
        </a>
        <a href="#about">Payment info</a>
        <HelpSection />
      </div>
    </>
  );
};

export default SideNavBar;
