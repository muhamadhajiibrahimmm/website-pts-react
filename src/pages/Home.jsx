
import Logowebsite1 from "../assets/picture/website_profiler1.png";
import Logowebsite2 from "../assets/picture/technology_lookup2.png";
import Logowebsite3 from "../assets/picture/competitor_website_analysis3.png";
import Logowebsite4 from "../assets/picture/keyword_based_lists4.png";
import DefaultLayout from "../layouts/DefaultLayout";

const Home = () => {
  return (
    <DefaultLayout>
      <main className="">
        {/* Existing Section */}
        <div
          id="home"
          className="w-full py-28 bg-slate-900 px-4 flex flex-col md:flex-row items-center"
        >
          {/* Left Side: Title and Description */}
          <div className="md:w-4/5 mx-auto mb-8 md:mb-0 md:pl-12 text-center">
            <h2 className="text-5xl font-bold text-sky-300 mb-6">
              Discover what a website is Built With
            </h2>
            <p className="text-white text-lg mb-4">
              A website technology profiler to detect and identify website
              technology. Unravel web tech stack intricacies. Explore
              technographics data, lead generation and marketing secrets from
              your websites.
            </p>
            <a href="#partners" className="my-2">
              <button className="transition-all duration-500 text-white py-3 px-12 bg-sky-500 font-semibold rounded-3xl hover:text-sky-500 hover:bg-white">
                Get Started
              </button>
            </a>
          </div>
        </div>

        {/* Spacer */}
        <div className="my-16"></div>

        {/* New Section: Technology Explanation and Additional Photos */}
        <section id="about" className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            {/* Photos with Alternating Text */}
            <div className="flex flex-col space-y-12">
              {/* First Image with Text */}
              <div className="flex flex-col md:flex-row items-center space-x-6">
                <img
                  src={Logowebsite1}
                  alt="Logowebsite1"
                  className="w-full md:w-3/5 h-auto rounded-lg shadow-lg object-cover"
                />
                <p className="text-gray-700 text-lg md:w-2/5">
                  Website Profiler: Find out what websites are built with.
                  Unearth the technological secrets behind any webpage. More
                  than a website technology profiler, its a comprehensive tool
                  to unravel the intricacies of a tech stack.
                </p>
              </div>

              {/* Second Image with Text */}
              <div className="flex flex-col-reverse md:flex-row-reverse items-center space-x-6">
                <img
                  src={Logowebsite2}
                  alt="logowebsite2"
                  className="w-full md:w-3/5 h-auto rounded-lg shadow-lg object-cover"
                />
                <p className="text-gray-700 text-lg md:w-2/5">
                  Technology Lookup: Dive into the heart of a website,
                  extracting detailed information about the technologies at
                  work. From server software to CMS, gain a comprehensive
                  understanding of any technology.
                </p>
              </div>

              {/* Third Image with Text */}
              <div className="flex flex-col md:flex-row items-center space-x-6">
                <img
                  src={Logowebsite3}
                  alt="Logowebsite3"
                  className="w-full md:w-3/5 h-auto rounded-lg shadow-lg object-cover"
                />
                <p className="text-gray-700 text-lg md:w-2/5">
                  Competitor Website Analysis: Uncover why your competitor gets
                  better results. Dissect their technology strategy, offering
                  valuable insights into their chosen tech stack.
                </p>
              </div>

              {/* Fourth Image with Text */}
              <div className="flex flex-col-reverse md:flex-row-reverse items-center space-x-6">
                <img
                  src={Logowebsite4}
                  alt="Logowebsite4"
                  className="w-full md:w-3/5 h-auto rounded-lg shadow-lg object-cover"
                />
                <p className="text-gray-700 text-lg md:w-2/5">
                  Keyword Based Lists: Use your chosen keywords to identify
                  websites matching specific search criteria. Whether interested
                  in CMS tools or eCommerce platforms, discover potential
                  partners, competitors, or niche markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* New Section: Testimonials */}
        <section id="testimonials" className="bg-white py-16">
          <div className="container mx-auto px-10 text-center">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Testimonial
            </h3>
            <p className="text-gray-600 mb-8">What They Says</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <p className="text-gray-700">
                  Webrofiler is like a knowledgeable guide who walks you through
                  the intricacies of what a site is built with. It articulates
                  complex tech data into understandable language, providing an
                  oral walkthrough of website technologies. For anyone keen on
                  decoding the digital realm, Webrofiler is a fantastic
                  companion.
                </p>
                <p className="mt-4 font-semibold">- Benjamin</p>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <p className="text-gray-700">
                  As a tech analyst, Webrofiler has been a game-changer for us.
                  Its in-depth website profiling capabilities and detailed
                  technographics data are simply unparalleled. Highly
                  recommended!
                </p>
                <p className="mt-4 font-semibold">- Stephen</p>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <p className="text-gray-700">
                  It has a knack for distilling complex data into easily
                  digestible, actionable insights, almost as if speaking to you.
                  For anyone navigating the vast digital landscape, Webrofiler
                  is your perfect oral guide, breaking down complexities into
                  simple language.
                </p>
                <p className="mt-4 font-semibold">- Sophia</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
};

export default Home;
