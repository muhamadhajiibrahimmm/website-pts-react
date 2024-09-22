import Footer from "../components/footer";
import Navbar from "../components/navbar";

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
