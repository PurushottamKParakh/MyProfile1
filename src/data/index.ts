export const experiences = [
  {
    company: 'VMWare',
    location: 'Bengaluru, IN',
    position: 'Staff Engineer',
    duration: 'Aug 2023 – Feb 2024',
    achievements: [
      {
        description: 'PRM Integration for Mac Devices in UEM Environment: Accomplished the integration and optimization of Platform Resource Manager (PRM) component in Unifed Endpoint Management (UEM) server for efficient resource delivery (profiles, apps) to Mac devices lacking VMware\'s UEM clients, thereby reducing resource delivery time on Mac devices from 3-5 minutes to within 1 minute via the MDM channel and reduced server load by transitioning from a push-based to a pull-based mechanism, improving overall system performance.',
        technologies: 'C#, .NET, SpecFlow, UEM and Apple Device Management principles, PostgreSQL'
      }
    ]
  },
  {
    company: 'Microsoft',
    location: 'Hyderabad, IN',
    position: 'Senior Software Engineer',
    duration: 'May 2022 – June 2023',
    achievements: [
      {
        description: 'Enhancing Relay App Directory Load Efficiency: Achieved exceptional performance enhancements for the Relay App by devising and executing a client-side strategy to load directories from local storage on both Android and iOS platforms. Significantly reduced data retrieval time from 2-5 seconds to less than 20 ms, with capability of loading data in offline mode from local cache.',
        technologies: 'Java, JavaScript, Objective-C, C++, Android, iOS, Java multi-threading'
      },
      {
        description: 'Pioneering Group Calling Functionality in Relay App: Spearheaded the development of the group calling feature for Microsoft\'s Relay App using Skype\'s conference call implementation as foundation and created a seamless UI, robust C# service, and integrate with Android/iOS.',
        technologies: 'Java, C#, JavaScript, Objective-C, Android, iOS, C++'
      }
    ]
  }
  // Add more experiences here...
];

export const education = [
  {
    institution: 'Indian Institute of Technology, Kanpur',
    location: 'Kanpur, IN',
    degree: 'M.Tech (Computer Science & Engineering)',
    duration: 'July 2008 – Dec 2010'
  },
  {
    institution: 'Bhilai Institute of Technology',
    location: 'Bhilai, IN',
    degree: 'B.Tech (Computer Science & Engineering)',
    duration: 'Aug 2004 – July 2008'
  }
];

export const startups = [
  {
    name: 'GateCounsellor.com',
    description: 'Co-founded this non-profit organization to empower undergraduate students with comprehensive guidance for postgraduate exam preparation and informed decision-making.'
  },
  {
    name: 'OpenLearning Technologies Pvt. Ltd',
    description: 'Founded this IIT-K incubated company to revolutionize the education space.'
  }
];

export const teaching = [
  {
    institution: 'Maharana Pratap Engineering College',
    subjects: ['Discrete Mathematics', 'Theory of Computation', 'Graph Theory', 'Parallel Algorithms']
  },
  {
    institution: 'UBS',
    subjects: ['Python (CodeRed Program for women)', 'Financial mathematics in Python']
  }
];