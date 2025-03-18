import Link from "next/link";
import {
  CalendarIcon,
  UserIcon,
  GlobeAltIcon,
  PhoneIcon,
  DocumentTextIcon,
  PaintBrushIcon,
  CodeBracketIcon,
  MegaphoneIcon,
  TruckIcon,
  ChatBubbleLeftIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ScaleIcon,
  VideoCameraIcon,
  ShoppingBagIcon,
  CameraIcon,
  CogIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

// Map icons to sub-services
const subServiceIcons: { [key: string]: React.ComponentType<{ className: string }> } = {
  "Email and Calendar management": CalendarIcon,
  "Travel Assistant": GlobeAltIcon,
  "Web Research and Analysis": UserIcon,
  "Employee management services": BuildingOfficeIcon,
  "Personal Assistant": UserIcon,
  "Management Support Services": CogIcon,
  "HR Shared Services": BuildingOfficeIcon,
  "Logistics Support": TruckIcon,
  "MIS Reporting Services": DocumentTextIcon,
  "Administrative Support Services": CogIcon,
  "Real estate and Property Management": BuildingOfficeIcon,
  "E-commerce Support services": ShoppingBagIcon,
  "Inbound Call Answering": PhoneIcon,
  "Live Chat Support": ChatBubbleLeftIcon,
  "Email Support": CalendarIcon,
  "Outbound Service Calls": PhoneIcon,
  "Non-Technical Support": ChatBubbleLeftIcon,
  "B2B Communications": ChatBubbleLeftIcon,
  "Reports/Statements": DocumentTextIcon,
  "Payroll Management": CurrencyDollarIcon,
  "Bookkeeping and Reconciliations": ScaleIcon,
  "Transaction Coordination": DocumentTextIcon,
  "AR Calling": PhoneIcon,
  "Support Services for CPA firms": ScaleIcon,
  "Creative Poster and Illustration Design": PaintBrushIcon,
  "Brand Identity Design with Logo and Collaterals": PaintBrushIcon,
  "Social Media Posters Designing": MegaphoneIcon,
  "Creative Web UI Design": CodeBracketIcon,
  "Professional Photo Editing": CameraIcon,
  "Creative Video Editing": VideoCameraIcon,
  "Website Development": CodeBracketIcon,
  "Mobile App Development": CodeBracketIcon,
  "UI/UX Research Design & Development": CodeBracketIcon,
  "WordPress & Custom Website with CMS": CodeBracketIcon,
  "Hybrid Mobile App Development for Android & iOS": CodeBracketIcon,
  "Native Mobile App Development for Android & iOS": CodeBracketIcon,
  "Search Engine Optimization": MegaphoneIcon,
  "Google Ads & PPC": MegaphoneIcon,
  "YouTube Optimization & Marketing": MegaphoneIcon,
  "Social Media Strategy for Business & Brands": MegaphoneIcon,
  "SEO-Enabled Content Writing": MegaphoneIcon,
  "App Store Optimization": CodeBracketIcon,
};

// Crafted descriptions for each sub-service
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

interface ServiceCategoryCardProps {
  subService: string;
  categorySlug: string;
}

export default function ServiceCategoryCard({ subService }: ServiceCategoryCardProps) {
  const IconComponent = subServiceIcons[subService] || BriefcaseIcon;
  const description = subServiceDescriptions[subService] || "Explore how we can enhance your operations.";

  return (
    <Link href={`/services/${encodeURIComponent(subService.toLowerCase().replace(/ /g, "-"))}`} className="block">
      <div className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 text-center">
        <div className="flex justify-center mb-3">
          <IconComponent className="h-10 w-10 text-blue-600" />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{subService}</h3>
        <p className="text-gray-600 text-xs">{description}</p>
      </div>
    </Link>
  );
}