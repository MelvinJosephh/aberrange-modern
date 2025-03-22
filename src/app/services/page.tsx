import Head from "next/head";
import Link from "next/link";
import { servicesData } from "@/lib/models/servicesData";
import { subServiceData, defaultSubServiceDetails } from "@/lib/models/subService";
import ServiceCategoryCard from "./components/ServiceCategoryCard";

export default function ServicesPage() {
  const row1 = [servicesData[0]]; // Virtual Assistant Services
  const row2 = [
    servicesData[1], // Personal/Executive Assistance
    servicesData[2], // Administrative Assistance
    servicesData[3], // Customer Support/24/7 Support
    servicesData[4], // Accounting, Bookkeeping and Reporting
  ];
  const row3 = [
    servicesData[5], // Creative Designs and Design Illustrations
    servicesData[6], // Web Application & Mobile Applications
    servicesData[7], // Digital Marketing and Paid Advertisement
  ];

  // Helper function to safely get slug
  const getSubServiceSlug = (subService: string): string => {
    const entry = subServiceData[subService];
    if (!entry) {
      if (process.env.NODE_ENV === "development") {
        console.warn(`Sub-service "${subService}" not found in subServiceData`);
      }
      return defaultSubServiceDetails.slug; // Fallback
    }
    return entry.slug;
  };

  return (
    <>
      <Head>
        <title>Our Services | Aberrange - Smart Virtual Assistance</title>
        <meta
          name="description"
          content="Explore Aberrange's comprehensive virtual assistance services for tech, finance, research, and executive operations. Hire a virtual assistant today!"
        />
        <meta
          name="keywords"
          content="virtual assistant, administrative support, digital marketing, web development, customer support, Aberrange"
        />
      </Head>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">
          Our Services
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Aberrange transforms your business with innovative virtual assistance solutions. Dive into our offerings and discover the perfect fit for your success.
        </p>

        {/* Service Categories */}
        {servicesData.map((category) => (
          <div key={category.slug} className="mb-12" id={category.slug}>
            <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">{category.title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {category.subServices.map((subService) => (
                <ServiceCategoryCard
                  key={subService}
                  subService={subService}
                  categorySlug={category.slug}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Footer Section for All Services */}
        <footer className="mt-16 bg-gradient-to-b from-gray-50 to-white py-10 border-t border-gray-200">
          <div className="space-y-12">
            {/* Row 1: Virtual Assistant Services */}
            <div className="grid grid-cols-1">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{row1[0].title}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 list-none text-sm text-gray-700">
                {row1[0].subServices.map((subService) => (
                  <li key={subService} className="hover:text-blue-600 cursor-pointer">
                    <Link href={`/services/${getSubServiceSlug(subService)}`}>
                      {subService}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Row 2: Four Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {row2.map((category) => (
                <div key={category.slug}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{category.title}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none text-sm text-gray-700">
                    {category.subServices.map((subService) => (
                      <li key={subService} className="hover:text-blue-600 cursor-pointer">
                        <Link href={`/services/${getSubServiceSlug(subService)}`}>
                          {subService}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Row 3: Three Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {row3.map((category) => (
                <div key={category.slug}>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{category.title}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none text-sm text-gray-700">
                    {category.subServices.map((subService) => (
                      <li key={subService} className="hover:text-blue-600 cursor-pointer">
                        <Link href={`/services/${getSubServiceSlug(subService)}`}>
                          {subService}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}