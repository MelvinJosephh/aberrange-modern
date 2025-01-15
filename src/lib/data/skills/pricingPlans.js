const pricingPlans = [
    {
      title: 'Basic',
      price: '$29',
      frequency: 'per month',
      features: [
        'Access to basic features',
        'Email support',
        'Up to 3 projects',
      ],
      buttonText: 'Get Started',
      buttonLink: '/sign-up-basic',
    },
    {
      title: 'Professional',
      price: '$99',
      frequency: 'per month',
      features: [
        'Everything in Basic',
        'Priority support',
        'Unlimited projects',
        'Advanced analytics',
      ],
      buttonText: 'Get Started',
      buttonLink: '/sign-up-professional',
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      frequency: '',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        '24/7 premium support',
      ],
      buttonText: 'Contact Sales',
      buttonLink: '/contact-sales',
    },
  ];

export default pricingPlans;