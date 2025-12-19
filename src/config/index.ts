import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Juan Daniel Vargas Cordero — Full Stack Developer",
  author: "Juan Daniel Vargas Cordero",
  description:
    "Software Engineer based in Costa Rica. Experienced Full Stack Software Developer proficient in JavaScript, React, Node.js, and AWS.",
  lang: "en",
  siteLogo: "/juan-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/juan-daniel-vargas-cordero-98266817b/" },
    { text: "Github", href: "https://github.com/juandanieldev29" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://astro-zen.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Juan Daniel Vargas Cordero",
    specialty: "Full Stack Developer",
    summary:
      "Software Engineer based in Costa Rica. Experienced Full Stack Software Developer proficient in JavaScript, React, Node.js, and AWS.",
  },
  experience: [
    {
      company: "Verisk",
      position: "Back end Software Developer",
      startDate: "October 2024",
      endDate: "Current",
      summary: [
        "Worked with multiple products using NodeJS and AWS, focusing on enhancing performance and storage efficiency",
        "Enhanced file attachment upload features using AWS S3 Cloud Services, improving file storage and retrieval efficiency",
        "Designed APIs with API Gateway backed by AWS Lambda and implemented SFTP Server using AWS Transfer Family",
        "Improved response time of API Gateway endpoints by implementing cache mechanisms with AWS Elasticache.",
        "Refactored code for performance and readability enhancements, leveraging NodeJS.",
        "Monitored applications effectively leveraging CloudWatch logs for improved system reliability.",
      ],
    },
    {
      company: "Growth Acceleration Partners",
      position: "Full Stack Software Developer",
      startDate: "Feb 2023",
      endDate: "May 2024",
      summary: [
        "Full stack web development with expertise in React, Redux, TypeScript, and NodeJS.",
        "Develop reusable React components and create new features, enhancing application scalability and maintainability.",
        "Conduct code reviews to ensure quality and avoid code smells, improving the codebase integrity.",
        "Design and implement RESTful APIs using NodeJS and integrate with React projects for seamless data interaction.",
        "Optimize server performance through effective code refactoring and utilization of parallelism.",
        "Enhance file storage solutions using AWS S3, improving efficiency of file uploads and retrieval.",
        "Write unit and e2e tests to ensure robust code quality, utilizing technologies such as Docker, MongoDB, and PostgreSQL.",
      ],
    },
    {
      company: "Intel",
      position: "Full Stack Software Developer",
      startDate: "July 2021",
      endDate: "Feb 2023",
      summary: [
        "Led the migration of applications from AngularJS to React, enhancing performance and maintainability.",
        "Rearchitected legacy desktop applications to web applications using Angular, increasing accessibility and modernizing user interfaces.",
        "Developed robust APIs with NodeJS, and implemented CRUD operations using MSSQL and TypeScript for full-stack solutions.",
        "Optimized CI/CD pipelines by enhancing the Docker build process and automating with GitHub Actions, improving deployment speed by 30%.",
        "Conducted systematic code reviews and wrote comprehensive tests for Net Core and React applications, ensuring code quality and reliability.",
        "Deployed web applications using Docker and Kubernetes, and resolved issues with pod restarts, ensuring high availability of services.",
        "Built reusable, component-based architecture with React and TypeScript, reducing development time for future projects.",
      ]
    },
    {
      company: "Cargill",
      position: "Full Stack Software Developer",
      startDate: "Apr 2020",
      endDate: "Jul 2021",
      summary: [
        "Increased development efficiency by creating reusable React components, reducing code duplication.",
        "Write tests for both the Net Core and the React application.",
        "Design APIs using Net Core and consume them from React projects.",
        "Perform code reviews to ensure code quality and adherence to best practices.",
        "Responsible for implementing backend pagination and filtering mechanisms to enhance data retrieval performance.",
      ]
    },
  ],
  about: {
    description: `
      Hi, I’m Juan Daniel Vargas, a seasoned Full Stack Software Developer with a strong focus on building scalable, high-performance web applications. With extensive experience across JavaScript, React, Node.js, and AWS, I thrive in designing and implementing robust solutions that bridge clean architecture with real-world business needs.

      Over the years, I’ve worked on everything from modernizing legacy systems to developing cloud-native applications using serverless and containerized architectures. I’m passionate about clean code, performance optimization, and leveraging cloud technologies to deliver secure, reliable, and maintainable software that scales effortlessly.
    `,
    image: "/juan-big.jpg",
  },
};

// #5755ff
