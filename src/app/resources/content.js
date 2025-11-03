const person = {
  firstName: "Christina",
  lastName: "Simon",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Digital Marketing Manager",
  avatar: "/images/avatar.jpg",
  location: "Asia/kerala", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Malayalam"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts

  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/christina-simon-17909a1b9",
  },

  {
    name: "Email",
    icon: "email",
    link: "mailto:christy.simon@hotmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Digital Marketer</>,
  subline: (
    <>
      Hey,
      <br />
      Every brand, in my opinion, has a story to tell, and it is my goal to
      assist them in crafting an engaging narrative that will connect with their
      target audience. In addition to making sure that our plans are successful,
      I also make sure that they are in line with the goals and values of the
      communities we serve by utilizing the most recent marketing trends and
      data-driven insights.
      <br />
      <br />
      Value Proposition <br />
      <br />
      I don’t just run campaigns — I turn marketing into measurable business
      growth. Through strategic planning, automated funnels, advanced analytics,
      and creative storytelling, I scale brands efficiently and sustainably.
      <br />
      <br />
      What I Do <br /> <br />✔ Digital Strategy & Brand Positioning Developing
      full-funnel digital strategies aligned with business goals.    <br /> ✔ SEO &
      Content Optimization Improving rankings, search visibility & organic
      conversions.    <br />  ✔ Social Media Growth & Ads Meta, LinkedIn & Google campaigns
      for lead generation & awareness.    <br />  ✔ Performance Marketing Campaign
      structuring, A/B testing, ad automation & ROI optimization.    <br />  ✔ Data
      Analytics & Reporting Transforming raw data into insights that drive
      business decisions. <br/> Core Expertise SEO & SEM Social Media & Paid Campaigns
      Lead Generation & Funnel Optimisation Analytics (Google Analytics, Meta
      Insights) Content Strategy & Branding Email Marketing & Automation
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi there! I'm Christina Simon, an enthusiastic manager of digital
        marketing with a track record of creating and implementing creative
        marketing plans that boost engagement and brand growth. Having worked
        extensively in social media management, content development, and data
        analytics, I enjoy turning findings into workable strategies that appeal
        to target audiences. <br /> <br /> Throughout my professional life, I
        have effectively increased brand awareness on social media sites like
        Facebook and Instagram by utilizing the newest tools and fashions to
        interact with users and maximize output. My strategy blends analytical
        thinking with creativity to make sure every campaign produces
        quantifiable outcomes in addition to stunning visuals. <br /> <br />
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Choice School",
        timeframe: "2025 - 2025",
        role: "Digital Marketing Consultant",
        achievements: [
          <>
            Overall management of Digital Media Marketing. End-to-end analysis,
            delivery and performance reporting of all digital elements including
            creatively led digital campaigns.
          </>,
          <> Creation of innovative strategies and posts.</>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/Work3.png",
            alt: "choice school",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Top Level Builders and Developers",
        timeframe: "2023 - 2025",
        role: "Digital Marketing Manager",
        achievements: [
          <>
            Measure and report the performance of all digital marketing
            campaigns and assess against goals (ROI and KPIs).
          </>,
          <>
            Develop and implement various strategies by providing creative
            solutions to improve businesses.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/Work1.png",
            alt: "Top level builders",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Torc Edu Pvt. Ltd",
        timeframe: "2021 - 2023",
        role: "Digital Marketing Executive",
        achievements: [
          <>
            Developed and executed cross-industry digital strategies, trained
            learners, and managed client campaigns end-to-end by identifying the
            right platforms and building performance-focused growth plans.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-01/Work5.png",
            alt: "Torc Edu",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Jain University",
        description: (
          <>
            MBA(Digital Marketing and E-commerce). <br /> <br /> Comprehensive
            exposure to data analytics, business strategy, and AI-led
            innovation. Focused on translating data into actionable insights
            that enhance organiz- ational efficiency and ROI.
          </>
        ),
      },
      {
        name: "IIDM",
        description: (
          <>
            Digital Marketing Certification. <br />
            <br />
            Skilled in SEO, SEM, Google Ads, Meta Ads, Analytics, Content
            Marketing, and Email Automation. Proficient in keyword research,
            campaign management, ROAS tracking, and performance optimization.
          </>
        ),
      },
      {
        name: "BA (English Language and Literature)",
        description: (
          <>
            MG University. <br />
            <br />
            Focused on advanced communication, content development, and cultural
            analysis. Strengthened ability to craft compelling narratives—a key
            asset in marketing and brand strategy.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Hubspot,SemRush,Mailchimp",
        description: <></>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Google Analytics,Google Ads",
        description: <></>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: " Photoshop, Canva",
        description: <></>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "HTML ,WordPress",
        description: <>Basic knowledge of HTML5 and Wordpress</>,
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, blog, work, gallery };
