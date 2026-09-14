import { Cover } from "@/components/sections/cover";
import { Profile } from "@/components/sections/profile";
import { Impact } from "@/components/sections/impact";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Capabilities } from "@/components/sections/capabilities";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";
import { profile, education, experience, siteUrl } from "@/lib/content";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  url: siteUrl,
  jobTitle: "Strategy & Analytics Consultant (Industry Practicum)",
  description: profile.standfirst,
  address: { "@type": "PostalAddress", addressRegion: "Indiana", addressCountry: "US" },
  sameAs: [profile.linkedin],
  alumniOf: education.map((e) => ({
    "@type": "EducationalOrganization",
    name: e.school,
  })),
  worksFor: { "@type": "Organization", name: experience[0].org },
  knowsAbout: [
    "Business Analytics",
    "Financial Modeling",
    "Agile Methodology",
    "SQL",
    "Python",
    "Tableau",
    "Power BI",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Cover />
      <Profile />
      <Impact />
      <Experience />
      <Projects />
      <Capabilities />
      <Education />
      <Contact />
    </>
  );
}
