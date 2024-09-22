import DefaultLayout from "../layouts/DefaultLayout";
import AboutImage from "../assets/picture/gambar.png"; // Ganti dengan path gambar yang sesuai

const About = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen flex flex-col items-center py-24">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full px-10">
          {/* Teks */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-600 text-lg">
              Trends, Intelligence, and Internet Research
            </p>
            <p className="text-gray-600 text-lg mt-2">
              Founded in 2007, BuiltWith® is a website profiler, lead generation, competitive analysis, and business intelligence tool providing technology adoption, ecommerce data, and usage analytics for the internet.
            </p>
            <p className="text-gray-600 text-lg mt-2">
              BuiltWith technology tracking includes widgets, analytics, frameworks, content management systems, advertisers, content delivery networks, web standards, and web servers to name some of the technology categories we cover.
            </p>
            <p className="text-gray-600 text-lg mt-2">
              Our products include a sales intelligence, lead generation, and market analysis tool for web technology, and an API for automating web technology request lookups. We also provide weekly trends in internet web technology usage and global ecommerce sales trends.
            </p>
          </div>

          {/* Gambar */}
          <div className="md:w-1/2 ml-4 mt-8"> {/* Tambahkan mt-8 untuk jarak atas */}
            <img
              src={AboutImage}
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default About;





