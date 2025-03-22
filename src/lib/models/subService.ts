export interface SubServiceDetails {
  slug: string; // URL slug (e.g., "personal-virtual-assistants")
  description: string; // Description for the template
  benefits?: string[]; // Optional benefits list
  callToAction?: string; // Optional CTA
}

export type SubServiceData = { [key: string]: SubServiceDetails }; // Keyed by title (e.g., "Personal Virtual Assistants")

export const subServiceData: SubServiceData = {
  "Administrative Support Assistants": {
    slug: "administrative-support-assistants",
    description:
      "Streamline your operations with expert administrative support tailored to your business.",
    benefits: [
      "Efficient task management and organization.",
      "Reduced workload for your core team.",
      "Customized support for small to large businesses.",
    ],
    callToAction: "Get organized today!",
  },
  "Customer Service Assistants": {
    slug: "customer-service-assistants",
    description:
      "Enhance customer satisfaction with dedicated support professionals available 24/7.",
    benefits: [
      "Professional handling of customer inquiries.",
      "Improved retention through timely responses.",
      "Scalable support for growing businesses.",
    ],
    callToAction: "Boost your customer support now!",
  },
  "Graphic Design Assistants": {
    slug: "graphic-design-assistants",
    description:
      "Create stunning visuals with skilled graphic design support for your brand.",
    benefits: [
      "High-quality designs for marketing materials.",
      "Fast turnaround on creative projects.",
      "Consistent branding across all platforms.",
    ],
    callToAction: "Design your success today!",
  },
  "Live Chat Support Assistants": {
    slug: "live-chat-support-assistants",
    description:
      "Engage website visitors instantly with real-time chat support.",
    benefits: [
      "Increased conversions through immediate assistance.",
      "24/7 availability for global customers.",
      "Reduced response time for inquiries.",
    ],
    callToAction: "Start chatting with customers now!",
  },
  "Personal Virtual Assistants": {
    slug: "personal-virtual-assistants",
    description:
      "Delegate personal tasks to a dedicated virtual assistant for a balanced life.",
    benefits: [
      "Time savings on errands and scheduling.",
      "Personalized support for your unique needs.",
      "Focus more on what matters most.",
    ],
    callToAction: "Simplify your life today!",
  },
  "Human Resources Assistants Services": {
    slug: "human-resources-assistants-services",
    description:
      "Optimize HR processes with expert virtual assistance for recruitment and management.",
    benefits: [
      "Streamlined onboarding and employee records.",
      "Support for payroll and compliance.",
      "Efficient handling of HR inquiries.",
    ],
    callToAction: "Enhance your HR team now!",
  },
  "Sales Administration Assistants": {
    slug: "sales-administration-assistants",
    description:
      "Boost sales efficiency with virtual support for administrative tasks.",
    benefits: [
      "Accurate sales data management.",
      "Faster follow-ups on leads.",
      "Support for sales reporting and CRM.",
    ],
    callToAction: "Drive sales growth today!",
  },
  "Bookkeeping Virtual Assistants": {
    slug: "bookkeeping-virtual-assistants",
    description:
      "Keep your finances in check with meticulous virtual bookkeeping support.",
    benefits: [
      "Error-free financial records.",
      "Timely expense tracking and reporting.",
      "Cost-effective alternative to in-house staff.",
    ],
    callToAction: "Organize your books now!",
  },
  "Digital Marketing Assistants": {
    slug: "digital-marketing-assistants",
    description:
      "Amplify your online presence with expert digital marketing support.",
    benefits: [
      "Effective campaign management.",
      "Increased engagement on social platforms.",
      "Data-driven marketing strategies.",
    ],
    callToAction: "Grow your brand online today!",
  },
  "Research Virtual Assistants": {
    slug: "research-virtual-assistants",
    description:
      "Gain insights with thorough research conducted by skilled virtual assistants.",
    benefits: [
      "In-depth market and competitor analysis.",
      "Time-saving data collection.",
      "Actionable reports for decision-making.",
    ],
    callToAction: "Unlock insights now!",
  },
  "Virtual Receptionist Services": {
    slug: "virtual-receptionist-services",
    description:
      "Provide a professional first impression with virtual receptionist support.",
    benefits: [
      "Friendly call handling 24/7.",
      "Appointment scheduling made easy.",
      "Cost-effective front-desk solution.",
    ],
    callToAction: "Welcome your callers today!",
  },
  "Small Businesses Outsourcing Assistants": {
    slug: "small-businesses-outsourcing-assistants",
    description:
      "Scale your small business with versatile outsourcing support.",
    benefits: [
      "Affordable assistance for multiple tasks.",
      "Focus on growth, not admin work.",
      "Flexible support as you expand.",
    ],
    callToAction: "Grow smarter now!",
  },
  "Logistics Virtual Assistants": {
    slug: "logistics-virtual-assistants",
    description:
      "Ensure smooth supply chains with expert logistics coordination.",
    benefits: [
      "Real-time tracking and updates.",
      "Efficient shipping and inventory management.",
      "Reduced logistical errors.",
    ],
    callToAction: "Optimize your logistics today!",
  },
  "SEO and ASO Assistants": {
    slug: "seo-and-aso-assistants",
    description:
      "Improve visibility with specialized SEO and app store optimization support.",
    benefits: [
      "Higher rankings on search engines.",
      "Increased app downloads and visibility.",
      "Tailored optimization strategies.",
    ],
    callToAction: "Rank higher now!",
  },
  "Website Development Assistants": {
    slug: "website-development-assistants",
    description:
      "Build and maintain websites with skilled virtual development support.",
    benefits: [
      "Custom websites tailored to your brand.",
      "Ongoing updates and maintenance.",
      "Optimized for performance and SEO.",
    ],
    callToAction: "Launch your site today!",
  },
  "Social Media Management Assistants": {
    slug: "social-media-management-assistants",
    description:
      "Grow your social presence with expert management and content creation.",
    benefits: [
      "Consistent posting and engagement.",
      "Targeted audience growth.",
      "Professional social media strategy.",
    ],
    callToAction: "Boost your social media now!",
  },
  "Real Estate & Property Management Assistants": {
    slug: "real-estate-and-property-management-assistants",
    description:
      "Manage properties efficiently with virtual real estate support.",
    benefits: [
      "Streamlined tenant communication.",
      "Accurate property listings and updates.",
      "Time-saving administrative support.",
    ],
    callToAction: "Manage properties with ease!",
  },
  "Content Marketing Assistants": {
    slug: "content-marketing-assistants",
    description:
      "Drive engagement with high-quality content crafted by virtual assistants.",
    benefits: [
      "SEO-optimized blog posts and articles.",
      "Consistent content production.",
      "Enhanced brand storytelling.",
    ],
    callToAction: "Create compelling content today!",
  },
  "Ecommerce Assistants": {
    slug: "ecommerce-assistants",
    description: "Maximize online sales with dedicated ecommerce support.",
    benefits: [
      "Efficient product listing and updates.",
      "Order processing and customer support.",
      "Improved store performance.",
    ],
    callToAction: "Grow your online store now!",
  },
  "Insurance Virtual Assistants Services": {
    slug: "insurance-virtual-assistants-services",
    description: "Simplify insurance tasks with expert virtual assistance.",
    benefits: [
      "Accurate policy management.",
      "Fast claims processing support.",
      "Client communication made easy.",
    ],
    callToAction: "Streamline insurance tasks today!",
  },
  "Photo Editing Virtual Assistants": {
    slug: "photo-editing-virtual-assistants",
    description:
      "Enhance your visuals with professional photo editing support.",
    benefits: [
      "High-quality edits for marketing.",
      "Quick turnaround on large batches.",
      "Consistent image branding.",
    ],
    callToAction: "Polish your photos now!",
  },
  "Email and Calendar management": {
    slug: "email-and-calendar-management",
    description:
      "Effortlessly organize your day with synchronized schedules and inbox mastery.",
    benefits: [
      "Automated email sorting and responses.",
      "Smart calendar syncing across devices.",
      "More time for strategic priorities.",
    ],
    callToAction: "Master your schedule today!",
  },
  "Travel Assistant": {
    slug: "travel-assistant",
    description:
      "Plan seamless trips with expert itinerary design and real-time support.",
    benefits: [
      "Custom travel plans for any destination.",
      "Real-time updates on bookings.",
      "Stress-free travel coordination.",
    ],
    callToAction: "Plan your trip now!",
  },
  "Web Research and Analysis": {
    slug: "web-research-and-analysis",
    description:
      "Uncover insights with in-depth online research tailored to your goals.",
    benefits: [
      "Detailed competitor and market data.",
      "Time-efficient research processes.",
      "Actionable insights for your business.",
    ],
    callToAction: "Discover insights today!",
  },
  "Employee management services": {
    slug: "employee-management-services",
    description:
      "Streamline HR tasks with efficient employee onboarding and support.",
    benefits: [
      "Simplified recruitment and training.",
      "Accurate employee record-keeping.",
      "Improved team productivity.",
    ],
    callToAction: "Manage your team better now!",
  },
  "Personal Assistant": {
    slug: "personal-assistant",
    description:
      "Delegate tasks to a dedicated aide for personal and professional balance.",
    benefits: [
      "Time savings on daily errands.",
      "Personalized task management.",
      "Focus on your priorities.",
    ],
    callToAction: "Get your personal aide today!",
  },
  "Management Support Services": {
    slug: "management-support-services",
    description:
      "Boost leadership efficiency with strategic administrative backup.",
    benefits: [
      "Support for planning and execution.",
      "Reduced administrative workload.",
      "Enhanced decision-making capacity.",
    ],
    callToAction: "Support your leadership now!",
  },
  "HR Shared Services": {
    slug: "hr-shared-services",
    description:
      "Simplify HR processes with centralized virtual support for your team.",
    benefits: [
      "Efficient payroll and benefits management.",
      "Streamlined employee inquiries.",
      "Cost-effective HR solutions.",
    ],
    callToAction: "Optimize HR today!",
  },
  "Logistics Support": {
    slug: "logistics-support",
    description:
      "Ensure smooth supply chains with expert logistics coordination.",
    benefits: [
      "Real-time shipment tracking.",
      "Reduced delays and errors.",
      "End-to-end logistics management.",
    ],
    callToAction: "Streamline logistics now!",
  },
  "MIS Reporting Services": {
    slug: "mis-reporting-services",
    description:
      "Transform data into decisions with precise management information reports.",
    benefits: [
      "Accurate and timely reporting.",
      "Data-driven business insights.",
      "Customizable report formats.",
    ],
    callToAction: "Get your reports today!",
  },
  "Administrative Support Services": {
    slug: "administrative-support-services",
    description:
      "Keep operations running smoothly with tailored admin solutions.",
    benefits: [
      "Efficient document and task management.",
      "Support for multiple departments.",
      "Reduced operational downtime.",
    ],
    callToAction: "Enhance operations now!",
  },
  "Real estate and Property Management": {
    slug: "real-estate-and-property-management",
    description:
      "Maximize property value with professional virtual management services.",
    benefits: [
      "Effective tenant coordination.",
      "Timely maintenance scheduling.",
      "Accurate financial tracking.",
    ],
    callToAction: "Manage properties effortlessly!",
  },
  "E-commerce Support services": {
    slug: "e-commerce-support-services",
    description: "Drive online sales with dedicated ecommerce assistance.",
    benefits: [
      "Fast product updates and listings.",
      "Improved customer order handling.",
      "Optimized store performance.",
    ],
    callToAction: "Boost your ecommerce now!",
  },
  "Inbound Call Answering": {
    slug: "inbound-call-answering",
    description:
      "Handle customer inquiries with a friendly, professional voice anytime.",
    benefits: [
      "24/7 call coverage for your clients.",
      "Reduced wait times for callers.",
      "Enhanced customer satisfaction.",
    ],
    callToAction: "Answer calls better today!",
  },
  "Live Chat Support": {
    slug: "live-chat-support",
    description: "Engage visitors instantly with real-time chat assistance.",
    benefits: [
      "Higher conversion rates.",
      "Immediate query resolution.",
      "Scalable chat support.",
    ],
    callToAction: "Chat with customers now!",
  },
  "Email Support": {
    slug: "email-support",
    description:
      "Resolve queries efficiently with prompt and professional email responses.",
    benefits: [
      "Quick turnaround on email inquiries.",
      "Consistent communication tone.",
      "Reduced email backlog.",
    ],
    callToAction: "Improve email support today!",
  },
  "Outbound Service Calls": {
    slug: "outbound-service-calls",
    description:
      "Proactively reach clients with targeted outbound call campaigns.",
    benefits: [
      "Effective lead follow-ups.",
      "Increased customer engagement.",
      "Customized call scripts.",
    ],
    callToAction: "Start calling today!",
  },
  "Non-Technical Support": {
    slug: "non-technical-support",
    description:
      "Offer reliable help for non-tech issues with a personal touch.",
    benefits: [
      "Friendly assistance for all queries.",
      "Improved customer trust.",
      "Flexible support options.",
    ],
    callToAction: "Support your clients now!",
  },
  "B2B Communications": {
    slug: "b2b-communications",
    description:
      "Strengthen business relationships with seamless communication support.",
    benefits: [
      "Professional correspondence handling.",
      "Timely follow-ups with partners.",
      "Enhanced B2B collaboration.",
    ],
    callToAction: "Connect better today!",
  },
  "Reports/Statements": {
    slug: "reports-statements",
    description:
      "Generate accurate financial and operational reports on demand.",
    benefits: [
      "Clear insights into performance.",
      "Customizable reporting options.",
      "Timely data for decision-making.",
    ],
    callToAction: "Get your reports now!",
  },
  "Payroll Management": {
    slug: "payroll-management",
    description: "Ensure timely, error-free payroll processing for your team.",
    benefits: [
      "Accurate salary disbursements.",
      "Compliance with tax regulations.",
      "Reduced payroll stress.",
    ],
    callToAction: "Simplify payroll today!",
  },
  "Bookkeeping and Reconciliations": {
    slug: "bookkeeping-and-reconciliations",
    description:
      "Maintain financial clarity with meticulous record-keeping and reconciliations.",
    benefits: [
      "Error-free financial tracking.",
      "Up-to-date books for audits.",
      "Peace of mind with accuracy.",
    ],
    callToAction: "Organize your finances now!",
  },
  "Transaction Coordination": {
    slug: "transaction-coordination",
    description: "Streamline payments and transactions with expert oversight.",
    benefits: [
      "Fast and secure processing.",
      "Reduced transaction errors.",
      "Detailed transaction records.",
    ],
    callToAction: "Coordinate transactions today!",
  },
  "AR Calling": {
    slug: "ar-calling",
    description:
      "Boost cash flow with effective accounts receivable follow-ups.",
    benefits: [
      "Faster payment collections.",
      "Professional debtor communication.",
      "Improved financial health.",
    ],
    callToAction: "Recover funds now!",
  },
  "Support Services for CPA firms": {
    slug: "support-services-for-cpa-firms",
    description: "Enhance CPA efficiency with specialized accounting support.",
    benefits: [
      "Accurate data entry and reporting.",
      "Support for tax season workloads.",
      "Cost-effective CPA assistance.",
    ],
    callToAction: "Support your CPA firm today!",
  },
  "Creative Poster and Illustration Design": {
    slug: "creative-poster-and-illustration-design",
    description:
      "Craft eye-catching posters and illustrations for impactful marketing.",
    benefits: [
      "Unique designs that stand out.",
      "Fast delivery for campaigns.",
      "Versatile formats for all needs.",
    ],
    callToAction: "Design stunning visuals now!",
  },
  "Brand Identity Design with Logo and Collaterals": {
    slug: "brand-identity-design-with-logo-and-collaterals",
    description:
      "Build a memorable brand with custom logos and marketing materials.",
    benefits: [
      "Consistent brand identity.",
      "Professional logo creation.",
      "Ready-to-use collaterals.",
    ],
    callToAction: "Define your brand today!",
  },
  "Social Media Posters Designing": {
    slug: "social-media-posters-designing",
    description:
      "Create engaging social media visuals to boost your online presence.",
    benefits: [
      "Eye-catching posts for engagement.",
      "Tailored designs for each platform.",
      "Quick content turnaround.",
    ],
    callToAction: "Shine on social media now!",
  },
  "Creative Web UI Design": {
    slug: "creative-web-ui-design",
    description:
      "Design intuitive, beautiful interfaces for your web projects.",
    benefits: [
      "User-friendly web layouts.",
      "Modern and responsive designs.",
      "Enhanced user experiences.",
    ],
    callToAction: "Upgrade your UI today!",
  },
  "Professional Photo Editing": {
    slug: "professional-photo-editing",
    description:
      "Enhance your visuals with expert photo retouching and editing.",
    benefits: [
      "Polished visuals for marketing.",
      "Fast edits for bulk images.",
      "Consistent quality across photos.",
    ],
    callToAction: "Perfect your photos now!",
  },
  "Creative Video Editing": {
    slug: "creative-video-editing",
    description:
      "Produce captivating videos that tell your story with expert editing.",
    benefits: [
      "Professional video polish.",
      "Engaging content for audiences.",
      "Quick edits for tight deadlines.",
    ],
    callToAction: "Edit your videos today!",
  },
  "Website Development": {
    slug: "website-development",
    description: "Build robust, scalable websites tailored to your vision.",
    benefits: [
      "Custom designs for your brand.",
      "Optimized for speed and SEO.",
      "Responsive across devices.",
    ],
    callToAction: "Launch your website now!",
  },
  "Mobile App Development": {
    slug: "mobile-app-development",
    description: "Develop high-performance mobile apps for iOS and Android.",
    benefits: [
      "Seamless user experiences.",
      "Cross-platform compatibility.",
      "Fast deployment timelines.",
    ],
    callToAction: "Build your app today!",
  },
  "UI/UX Research Design & Development": {
    slug: "ui-ux-research-design-and-development",
    description: "Optimize user experiences with thorough research and design.",
    benefits: [
      "Data-driven design decisions.",
      "Intuitive and engaging interfaces.",
      "Improved user satisfaction.",
    ],
    callToAction: "Enhance UX now!",
  },
  "WordPress & Custom Website with CMS": {
    slug: "wordpress-and-custom-website-with-cms",
    description:
      "Launch dynamic websites with easy content management systems.",
    benefits: [
      "User-friendly CMS for updates.",
      "Custom designs with WordPress.",
      "Scalable for future growth.",
    ],
    callToAction: "Create your site today!",
  },
  "Hybrid Mobile App Development for Android & iOS": {
    slug: "hybrid-mobile-app-development-for-android-and-ios",
    description:
      "Create versatile apps for multiple platforms with hybrid development.",
    benefits: [
      "Cost-effective cross-platform apps.",
      "Consistent performance on iOS and Android.",
      "Faster development cycles.",
    ],
    callToAction: "Go hybrid now!",
  },
  "Native Mobile App Development for Android & iOS": {
    slug: "native-mobile-app-development-for-android-and-ios",
    description: "Deliver top-tier native apps with optimal performance.",
    benefits: [
      "Platform-specific optimizations.",
      "Superior speed and reliability.",
      "Enhanced user experiences.",
    ],
    callToAction: "Build native apps today!",
  },
  "Search Engine Optimization": {
    slug: "search-engine-optimization",
    description: "Climb search rankings with strategic SEO techniques.",
    benefits: [
      "Increased organic traffic.",
      "Higher visibility on search engines.",
      "Long-term growth potential.",
    ],
    callToAction: "Rank higher now!",
  },
  "Google Ads & PPC": {
    slug: "google-ads-and-ppc",
    description:
      "Maximize ROI with targeted pay-per-click campaigns on Google.",
    benefits: [
      "Immediate traffic boosts.",
      "Precise audience targeting.",
      "Cost-effective ad spend.",
    ],
    callToAction: "Advertise smarter today!",
  },
  "YouTube Optimization & Marketing": {
    slug: "youtube-optimization-and-marketing",
    description:
      "Grow your audience with optimized YouTube content and marketing.",
    benefits: [
      "Higher video visibility.",
      "Increased subscriber growth.",
      "Engaging video strategies.",
    ],
    callToAction: "Boost your YouTube now!",
  },
  "Social Media Strategy for Business & Brands": {
    slug: "social-media-strategy-for-business-and-brands",
    description: "Craft winning strategies to dominate social platforms.",
    benefits: [
      "Targeted audience engagement.",
      "Consistent brand presence.",
      "Measurable social growth.",
    ],
    callToAction: "Master social media today!",
  },
  "SEO-Enabled Content Writing": {
    slug: "seo-enabled-content-writing",
    description: "Produce content that ranks high and engages your audience.",
    benefits: [
      "Optimized for search engines.",
      "Compelling and readable content.",
      "Drives traffic and conversions.",
    ],
    callToAction: "Write for success now!",
  },
  "App Store Optimization": {
    slug: "app-store-optimization",
    description: "Boost app visibility with expert ASO tactics.",
    benefits: [
      "Higher app store rankings.",
      "Increased downloads and installs.",
      "Optimized app descriptions.",
    ],
    callToAction: "Optimize your app today!",
  },
};

export const defaultSubServiceDetails: SubServiceDetails = {
  slug: "default-service", // Fallback slug (won’t typically be used)
  description:
    "Detailed information about this service will be available soon.",
  benefits: ["Tailored solutions coming soon.", "Contact us to learn more."],
  callToAction: "Reach out for details!",
};
