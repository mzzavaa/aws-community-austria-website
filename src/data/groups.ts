/**
 * User group data for the website.
 */

export interface UserGroup {
  id: string;
  name: string;
  shortName: string;
  city: string;
  description: string;
  meetupUrl: string;
  sessionizeApiId: string;
  linkedinUrl: string;
  slackChannel: string;
  accentColor: string;
  logoWide: string;
  logoSmall: string;
  nextMeetup?: {
    number: number;
    date: string;
    venue: string;
    hostedBy: string;
  };
}

export interface CloudClub {
  id: string;
  name: string;
  shortName: string;
  city: string;
  description: string;
  meetupUrl: string;
  logoWide: string | null;
}

export const CLOUD_CLUBS: CloudClub[] = [
  {
    id: "aws-cloud-club-stpolten",
    name: "AWS Cloud Club St. Polten",
    shortName: "AWS Cloud Club St. Polten",
    city: "St. Polten",
    description: "A student-led AWS Cloud Club at St. Polten University of Applied Sciences. Cloud Clubs are campus communities for students to explore AWS cloud technologies together.",
    meetupUrl: "https://www.meetup.com/de-de/aws-cloud-club-at-st-polten-university-of-applied-sciences/",
    logoWide: null,
  },
];

export const USER_GROUPS: UserGroup[] = [
  {
    id: "aws-ug-vienna",
    name: "AWS User Group Vienna",
    shortName: "AWS UG Vienna",
    city: "Vienna",
    description:
      "The AWS User Group Vienna hosts regular meetups with technical talks about AWS services, architecture patterns, and cloud best practices. Open to everyone interested in AWS.",
    meetupUrl: "https://www.meetup.com/amazon-web-services-aws-vienna/",
    sessionizeApiId: "",
    linkedinUrl: "",
    slackChannel: "#aws-ug-vienna",
    accentColor: "#A66FF0",
    logoWide: `${import.meta.env.BASE_URL}assets/logos/ug-vienna-logo-wide.png`,
    logoSmall: `${import.meta.env.BASE_URL}assets/logos/ug-vienna-small.png`,
  },
  {
    id: "aws-wug-vienna",
    name: "AWS Women's User Group Vienna",
    shortName: "AWS Women's UG Vienna",
    city: "Vienna",
    description:
      "The AWS Women's User Group Vienna is a welcoming space for women and allies to learn, share, and connect around AWS cloud technologies. Everyone is welcome.",
    meetupUrl: "https://www.meetup.com/aws-womens-user-group-vienna/",
    sessionizeApiId: "",
    linkedinUrl: "",
    slackChannel: "#aws-wug-vienna",
    accentColor: "#A66FF0",
    logoWide: `${import.meta.env.BASE_URL}assets/logos/wug-vienna.png`,
    logoSmall: `${import.meta.env.BASE_URL}assets/logos/wug-vienna.png`,
  },
  {
    id: "aws-ug-linz",
    name: "AWS User Group Linz",
    shortName: "AWS UG Linz",
    city: "Linz",
    description:
      "The AWS User Group Linz brings the AWS community to Upper Austria with meetups focused on cloud engineering, DevOps, and serverless architectures.",
    meetupUrl: "https://www.meetup.com/aws-user-group-linz/",
    sessionizeApiId: "",
    linkedinUrl: "",
    slackChannel: "#aws-ug-linz",
    accentColor: "#A66FF0",
    logoWide: `${import.meta.env.BASE_URL}assets/logos/ug-linz-logo-wide.png`,
    logoSmall: `${import.meta.env.BASE_URL}assets/logos/ug-linz-logo-wide.png`,
  },
];

export interface Organizer {
  name: string;
  role: string;
  focus: string;       // short one-liner shown on homepage cards
  bio: string;         // longer bio shown on team page
  tags: string[];      // highlight tags on team page
  email: string | null;
  linkedin: string | null;
  photo: string | null;
}

export const ORGANIZERS: Organizer[] = [
  {
    name: "Linda Mohamed",
    role: "Co-Organizer",
    focus: "AWS Hero and chairwoman of Förderverein AWS Community DACH",
    bio: "Linda is an AWS Hero and the chairwoman of Förderverein AWS Community DACH e.V., the non-profit that organizes AWS Community Day DACH. She is deeply involved in voluntary community work across the DACH region and helps run all three Austrian user groups. Reach out for anything — she is always happy to help.",
    tags: ["AWS Hero", "AWS CD DACH", "Förderverein", "DACH Community"],
    email: "linda.mohamed@icloud.com",
    linkedin: "https://www.linkedin.com/in/linda-mohamed/",
    photo: "/assets/organizers/Linda.png",
  },
  {
    name: "Dmytro Hlotenko",
    role: "Co-Organizer",
    focus: "Community photographer and AWS Community Day representative",
    bio: "Dima is the face behind our event photos and deeply involved in AWS Community Days all over Europe. He brings the community together beyond Austria, helps coordinate sponsorships, and is a key contact for companies interested in supporting the groups.",
    tags: ["Photography", "AWS Community Days", "Sponsorship", "Europe"],
    email: "dmytro.hlotenko@apa.at",
    linkedin: "https://www.linkedin.com/in/dmytro-hlotenko-7aa348151/",
    photo: "/assets/organizers/Dmytro.png",
  },
  {
    name: "Philipp Bergsmann",
    role: "Co-Organizer",
    focus: "Open source contributor and AWS UG Vienna veteran",
    bio: "Philipp has been part of AWS User Group Vienna for almost a decade — one of the longest-serving organizers. He works at Red Hat and regularly contributes to open source projects. His deep technical knowledge and long-standing community involvement make him an anchor of the group.",
    tags: ["Red Hat", "Open Source", "AWS UG Vienna", "10 years"],
    email: "philipp.bergsmann@redhat.com",
    linkedin: "https://www.linkedin.com/in/phbergsmann/",
    photo: "/assets/organizers/Philipp.png",
  },
  {
    name: "Jakob Heinisch",
    role: "Co-Organizer",
    focus: "Organizational lead and contact person for UG Linz",
    bio: "Jakob handles the organizational backbone of the community — coordination, planning, and logistics. He is the primary contact person for AWS User Group Linz and the go-to person for anything structural or administrative. Everyone else can help with questions too, but Jakob keeps things running.",
    tags: ["Coordination", "UG Linz", "Organizational Lead"],
    email: "jakob.heinisch@pcg.io",
    linkedin: "https://www.linkedin.com/in/jakob-heinisch-10028725a/",
    photo: "/assets/organizers/Jakob.png",
  },
  {
    name: "Roman Jokel",
    role: "Co-Organizer",
    focus: "Cloud architecture expert and AWS Summit speaker",
    bio: "Roman works at one of our top host and sponsor companies and is deeply involved in modern cloud architectures. He is a regular speaker at AWS Summits, sharing real-world use cases and hands-on experience. His practical perspective adds a grounded, applied voice to the community.",
    tags: ["Cloud Architecture", "AWS Summit Speaker", "Real-world AWS"],
    email: "romek.jokel@gmail.com",
    linkedin: "https://www.linkedin.com/in/roman-jokel-99b2b8128/",
    photo: "/assets/organizers/Roman.png",
  },
  {
    name: "Matthias",
    role: "Co-Organizer",
    focus: "Quiz master and startup founder behind AWS PubQuiz Austria",
    bio: "Matthias is the brain behind our AWS PubQuiz evenings in Austria — coordinating all quiz questions and keeping the format sharp and fun. Beyond quizzing, he is a startup founder and founding engineer, bringing an entrepreneurial perspective to the community.",
    tags: ["AWS PubQuiz", "Startup Founder", "Quiz Master"],
    email: null,
    linkedin: "https://www.linkedin.com/in/pichler-matthias/",
    photo: "/assets/organizers/Matthias.png",
  },
];
