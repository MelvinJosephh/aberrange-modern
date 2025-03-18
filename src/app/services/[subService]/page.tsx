import { servicesData } from "@/lib/models/servicesData";
import { subServiceData, defaultSubServiceDetails, SubServiceDetails } from "@/lib/models/subService";
import { notFound } from "next/navigation";
import Link from "next/link";
import Head from "next/head";

interface SubServiceParams {
  subService: string;
}

export default async function SubServicePage({ params }: { params: Promise<SubServiceParams> }) {
  const resolvedParams = await params;
  const subServiceSlug: string = decodeURIComponent(resolvedParams.subService); // e.g., "personal-virtual-assistants"

  // Find the subservice by slug in subServiceData
  const subServiceEntry: SubServiceDetails | undefined = Object.values(subServiceData).find(
    (entry) => entry.slug === subServiceSlug
  ) || defaultSubServiceDetails;
  if (!subServiceEntry || subServiceEntry === defaultSubServiceDetails) {
    // If no match or fallback is used, check if it’s a valid subservice title in servicesData
    const matchedTitle = Object.keys(subServiceData).find((title) => subServiceData[title].slug === subServiceSlug);
    if (!matchedTitle) notFound();
  }

  // Get the title from the matched entry (or use the key if needed)
  const subServiceTitle: string = Object.keys(subServiceData).find(
    (title) => subServiceData[title].slug === subServiceSlug
  ) || subServiceEntry.description; // Fallback to description if no title match (shouldn’t happen)
  
  // Find the parent category
  const parentCategory = servicesData.find((cat) =>
    cat.subServices.includes(subServiceTitle)
  );
  if (!parentCategory) notFound();

  const subserviceDetails: SubServiceDetails = subServiceData[subServiceTitle] || defaultSubServiceDetails;
  const enhancedDescription: string = `${subserviceDetails.description} This service falls under our ${parentCategory.title} category, offering tailored solutions for your needs.`;

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>{`${subServiceTitle} | Aberrange Services`}</title>
        <meta
          name="description"
          content={`${subserviceDetails.description} Learn more about our ${subServiceTitle} under ${parentCategory.title}.`}
        />
        <meta
          name="keywords"
          content={`${subServiceTitle}, ${parentCategory.title}, virtual assistant, Aberrange`}
        />
      </Head>

      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:underline">Home</Link> {" > "}
          <Link href="/services" className="hover:underline">Services</Link> {" > "}
          <Link href={`/services#${parentCategory.slug}`} className="hover:underline">
            {parentCategory.title}
          </Link> {" > "}
          <span className="text-gray-800">{subServiceTitle}</span>
        </nav>

        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{subServiceTitle}</h1>
        <p className="text-lg text-gray-600 mb-8">{enhancedDescription}</p>

        {/* Benefits Section */}
        {subserviceDetails.benefits && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits</h2>
            <ul className="space-y-3">
              {subserviceDetails.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Call to Action */}
        <section className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="text-gray-700 mb-4">{subserviceDetails.callToAction || "Ready to get started? Contact us!"}</p>
          <Link
            href="/public/call-us"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </section>

        {/* Related Services */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {parentCategory.subServices
              .filter((sub) => sub !== subServiceTitle)
              .slice(0, 3)
              .map((relatedSubService) => (
                <Link
                  key={subServiceData[relatedSubService].slug}
                  href={`/services/${subServiceData[relatedSubService].slug}`}
                  className="block p-4 bg-white border rounded-lg hover:shadow-md transition-shadow"
                >
                  <span className="text-blue-600 font-medium">{relatedSubService}</span>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}

export async function generateStaticParams(): Promise<{ subService: string }[]> {
  return Object.values(subServiceData).map((subService) => ({
    subService: subService.slug, // Use slugs directly from subServiceData
  }));
}