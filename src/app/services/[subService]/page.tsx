import { servicesData } from "@/lib/models/servicesData";
import { notFound } from "next/navigation";
import Link from "next/link";

// Define subServiceDescriptions within the file (or import if in a separate module)
const subServiceDescriptions: { [key: string]: string } = {
  "Email and Calendar management": "Effortlessly organize your day with synchronized schedules and inbox mastery.",
  "Travel Assistant": "Plan seamless trips with expert itinerary design and real-time travel support.",
  "Web Research and Analysis": "Uncover actionable insights with in-depth online research tailored to your goals.",
  "Employee management services": "Streamline HR tasks with efficient employee onboarding and support.",
  "Personal Assistant": "Your dedicated aide for tasks, from scheduling to personal errands.",
  "Management Support Services": "Boost leadership efficiency with strategic administrative backup.",
  "HR Shared Services": "Simplify HR processes with centralized support for your team.",
  "Logistics Support": "Ensure smooth supply chains with expert coordination and tracking.",
  "MIS Reporting Services": "Transform data into decisions with precise management information reports.",
  "Administrative Support Services": "Keep your operations humming with tailored admin solutions.",
  "Real estate and Property Management": "Maximize property value with professional management services.",
  "E-commerce Support services": "Drive online sales with dedicated e-commerce assistance.",
  "Inbound Call Answering": "Handle customer inquiries with a friendly, professional voice.",
  "Live Chat Support": "Engage visitors instantly with real-time chat assistance.",
  "Email Support": "Resolve queries efficiently with prompt email responses.",
  "Outbound Service Calls": "Proactively reach out to clients with targeted call campaigns.",
  "Non-Technical Support": "Offer reliable help for non-tech issues with a personal touch.",
  "B2B Communications": "Strengthen business relationships with seamless communication support.",
  "Reports/Statements": "Generate accurate financial and operational reports on demand.",
  "Payroll Management": "Ensure timely, error-free payroll processing for your team.",
  "Bookkeeping and Reconciliations": "Maintain financial clarity with meticulous record-keeping.",
  "Transaction Coordination": "Streamline payments and transactions with expert oversight.",
  "AR Calling": "Boost cash flow with effective accounts receivable follow-ups.",
  "Support Services for CPA firms": "Enhance CPA efficiency with specialized accounting support.",
  "Creative Poster and Illustration Design": "Craft eye-catching posters that leave a lasting impression.",
  "Brand Identity Design with Logo and Collaterals": "Build a memorable brand with unique logos and materials.",
  "Social Media Posters Designing": "Create stunning social media visuals to boost engagement.",
  "Creative Web UI Design": "Design intuitive, beautiful interfaces for your web projects.",
  "Professional Photo Editing": "Enhance your images with expert photo retouching.",
  "Creative Video Editing": "Produce captivating videos that tell your story.",
  "Website Development": "Build robust, scalable websites tailored to your vision.",
  "Mobile App Development": "Develop high-performance apps for iOS and Android.",
  "UI/UX Research Design & Development": "Optimize user experiences with thorough research and design.",
  "WordPress & Custom Website with CMS": "Launch dynamic sites with easy content management.",
  "Hybrid Mobile App Development for Android & iOS": "Create versatile apps for multiple platforms.",
  "Native Mobile App Development for Android & iOS": "Deliver top-tier native apps with native performance.",
  "Search Engine Optimization": "Climb search rankings with strategic SEO techniques.",
  "Google Ads & PPC": "Maximize ROI with targeted pay-per-click campaigns.",
  "YouTube Optimization & Marketing": "Grow your audience with optimized YouTube content.",
  "Social Media Strategy for Business & Brands": "Craft winning strategies to dominate social platforms.",
  "SEO-Enabled Content Writing": "Produce content that ranks and engages your audience.",
  "App Store Optimization": "Boost app visibility with expert ASO tactics.",
};

export default function SubServicePage({ params }: { params: { subService: string } }) {
  let subService = decodeURIComponent(params.subService).replace(/-/g, " ");
  let categorySlug = "";

  // Handle cases where the sub-service slug includes a category (e.g., email-support-virtual-assistant-services)
  if (subService.includes("-virtual-assistant-services") ||
      subService.includes("-personal-executive-assistance") ||
      subService.includes("-administrative-assistance") ||
      subService.includes("-customer-support-247-support") ||
      subService.includes("-accounting-bookkeeping-and-reporting") ||
      subService.includes("-creative-designs-and-design-illustrations") ||
      subService.includes("-web-application-mobile-applications") ||
      subService.includes("-digital-marketing-and-paid-advertisement")) {
    const parts = subService.split("-");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    categorySlug = parts.slice(-3).join("-"); // Extract the category slug (last 3 parts)
    subService = parts.slice(0, -3).join(" "); // Extract the sub-service name
  }

  const category = servicesData.find((cat) => cat.subServices.includes(subService));
  if (!category) notFound();

  const description = subServiceDescriptions[subService] || "Detailed information about this service will be available soon.";
  const enhancedDescription = `${description} This page offers in-depth insights, benefits, and how Aberrange can tailor this service to your needs under the ${category.title} category. Contact us to get started!`;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{subService}</h1>
      <p className="text-gray-600 mb-6">{enhancedDescription}</p>
      <div className="mb-6">
        <span className="text-gray-500">Category: </span>
        <Link href={`/services#${category.slug}`} className="text-blue-600 hover:underline">
          {category.title}
        </Link>
      </div>
      <Link href="/contact" className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
        Contact Us
      </Link>
    </div>
  );
}

// Optional: Use generateStaticParams for static generation (if using App Router with static export)
export async function generateStaticParams() {
  const allSubServicesWithCategories = servicesData.flatMap((category) =>
    category.subServices.map((subService) => ({
      subService,
      categorySlug: category.slug,
    }))
  );

  return allSubServicesWithCategories.map(({ subService, categorySlug }) => {
    const subServiceSlug = encodeURIComponent(subService.toLowerCase().replace(/ /g, "-"));
    const uniqueSlug = subService === "Email Support" ? `${subServiceSlug}-${categorySlug}` : subServiceSlug;
    return {
      subService: uniqueSlug,
    };
  });
}