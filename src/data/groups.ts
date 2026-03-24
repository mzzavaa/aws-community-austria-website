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
    shortName: "AWS WUG Vienna",
    city: "Vienna",
    description:
      "The AWS Women's User Group Vienna is a welcoming space for women and allies to learn, share, and connect around AWS cloud technologies. Everyone is welcome.",
    meetupUrl: "https://www.meetup.com/aws-womens-user-group-vienna/",
    sessionizeApiId: "",
    linkedinUrl: "",
    slackChannel: "#aws-wug-vienna",
    accentColor: "#A66FF0",
    logoWide: `${import.meta.env.BASE_URL}assets/logos/wug-vienna-logo-wide.png`,
    logoSmall: `${import.meta.env.BASE_URL}assets/logos/wug-vienna-small.png`,
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
