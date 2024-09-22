import DefaultLayout from "../layouts/DefaultLayout";
import Logocustomers1 from "../assets/picture/customers1.jpg";
import Logocustomers2 from "../assets/picture/customers2.jpeg";
import Logocustomers3 from "../assets/picture/customers3.jpg";
import CustomersLogo1 from "../assets/picture/logo_google.webp";
import CustomersLogo2 from "../assets/picture/logo_meta.png";
import CustomersLogo3 from "../assets/picture/logo_amazon.png";
import CustomersLogo4 from "../assets/picture/logo_neta.png";
import CustomersLogo5 from "../assets/picture/logo_rackspace.png";
import CustomersLogo6 from "../assets/picture/logo_ebay.png";

const Customers = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen flex flex-col items-center py-24">
        <h2 className="text-3xl font-bold mb-4">Our Customers</h2>
        <p className="text-gray-600 text-lg mb-10 text-center">
          Here is what our customers are saying
        </p>

        <div className="flex flex-wrap justify-center space-x-6 mb-16">
          {/* Foto 1 */}
          <div className="flex flex-col items-center text-center max-w-xs mb-8">
            <img
              src={Logocustomers1}
              alt="Customer 1"
              className="w-36 h-36 rounded-full mb-4"
            />
            <p className="mt-2 font-semibold text-lg">Holly Cardew</p>
            <p className="text-gray-500 text-sm">
              We use BuiltWith to keep an eye on emerging technology trends and
              have been able to research new customer segments and leads.
            </p>
          </div>

          {/* Foto 2 */}
          <div className="flex flex-col items-center text-center max-w-xs mb-8">
            <img
              src={Logocustomers2}
              alt="Customer 2"
              className="w-36 h-36 rounded-full mb-4"
            />
            <p className="mt-2 font-semibold text-lg">Deepak Shukla</p>
            <p className="text-gray-500 text-sm">
              Using BuiltWith s tools, we ve already won two clients who have
              spent close to $60,000 with us.
            </p>
          </div>

          {/* Foto 3 */}
          <div className="flex flex-col items-center text-center max-w-xs mb-8">
            <img
              src={Logocustomers3}
              alt="Customer 3"
              className="w-36 h-36 rounded-full mb-4"
            />
            <p className="mt-2 font-semibold text-lg">Ross Kramer</p>
            <p className="text-gray-500 text-sm">
              BuiltWith has been an integral partner in identifying key market
              segment opportunities for us.
            </p>
          </div>
        </div>

        {/* Container untuk Costumers */}
        <div className="w-full bg-gray-100 py-24">
          <h2 className="text-2xl font-bold text-center mb-8">Our Customers Include-</h2>
          <div className="grid grid-cols-3 gap-6 justify-center items-center">
            {/* Logo Customers 1 */}
            <div className="flex items-center justify-center">
              <img
                src={CustomersLogo1}
                alt="Customers 1"
                className="w-24 h-24 md:w-36 md:h-36 object-contain"
              />
            </div>

            {/* Logo Customers 2 */}
            <div className="flex items-center justify-center">
              <img
                src={CustomersLogo2}
                alt="Customers 2"
                className="w-24 h-24 md:w-36 md:h-36 object-contain"
              />
            </div>

            {/* Logo Customers 3 */}
            <div className="flex items-center justify-center">
              <img
                src={CustomersLogo3}
                alt="Customers 3"
                className="w-24 h-24 md:w-36 md:h-36 object-contain"
              />
            </div>

            {/* Logo Customers 4 */}
            <div className="flex items-center justify-center">
              <img
                src={CustomersLogo4}
                alt="Customers 4"
                className="w-24 h-24 md:w-36 md:h-36 object-contain"
              />
            </div>

            {/* Logo Customers 5 */}
            <div className="flex items-center justify-center">
              <img
                src={CustomersLogo5}
                alt="Customers 5"
                className="w-24 h-24 md:w-36 md:h-36 object-contain"
              />
            </div>

            {/* Logo Customers 6 */}
            <div className="flex items-center justify-center">
              <img
                src={CustomersLogo6}
                alt="Customers 6"
                className="w-24 h-24 md:w-36 md:h-36 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Customers;


