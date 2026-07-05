/* Static site configuration: navigation, standing copy, shared notes. */

export const SITE = {
  name: "History Judgment Lab",
  program: "Civic Judgment Lab",
  tagline: "Information is everywhere. Judgment has to be taught.",
  description:
    "Source-based history lessons that help students evaluate evidence, power, citizenship, persuasion, and technology from Reconstruction to the AI age.",
};

export type NavItem = { href: string; label: string; short?: string };

export const PRIMARY_NAV: NavItem[] = [
  { href: "/library", label: "Unit Library", short: "Library" },
  { href: "/scope-and-sequence", label: "Scope & Sequence", short: "Scope & Sequence" },
  { href: "/civic-judgment", label: "Civic Judgment", short: "Civic Judgment" },
  { href: "/judgment-lab", label: "Judgment Lab", short: "Judgment Lab" },
  { href: "/responsible-ai", label: "Responsible AI", short: "Responsible AI" },
  { href: "/product", label: "Product" },
];

export const FOOTER_NAV: { title: string; items: NavItem[] }[] = [
  {
    title: "Units",
    items: [
      { href: "/library", label: "Unit Library" },
      { href: "/medieval-europe", label: "Medieval Europe & Authority" },
      { href: "/civil-war-causes", label: "Civil War Causes" },
      { href: "/reconstruction", label: "Reconstruction" },
      { href: "/civil-rights", label: "The Civil Rights Movement" },
      { href: "/cold-war-media", label: "Cold War Media & Power" },
      { href: "/american-government", label: "American Government" },
      { href: "/information-revolutions", label: "Information Revolutions" },
    ],
  },
  {
    title: "For educators",
    items: [
      { href: "/scope-and-sequence", label: "Scope & Sequence" },
      { href: "/civic-judgment", label: "From Bias Detection to Civic Judgment" },
      { href: "/judgment-lab", label: "Judgment Lab (AI age)" },
      { href: "/mixed-source-dbq", label: "Mixed-Source DBQ" },
      { href: "/ladder-poster", label: "Ladder Poster (printable)" },
      { href: "/dashboard", label: "Teacher Dashboard" },
      { href: "/student-packet", label: "Student Packet" },
      { href: "/differentiation", label: "Differentiation Supports" },
      { href: "/before-after", label: "Before / After" },
    ],
  },
  {
    title: "About",
    items: [
      { href: "/product", label: "Product Overview" },
      { href: "/reconstruction-pack", label: "Get the Reconstruction Pack" },
      { href: "/for-administrators", label: "For Principals & Chairs" },
      { href: "/responsible-ai", label: "Responsible AI & Civic Judgment" },
      { href: "/reflection", label: "Educator Reflection" },
      { href: "/", label: "Home" },
    ],
  },
];

/** Reused wherever alignment is displayed, per the content rule about
 *  not inventing exact state standard numbers. */
export const STANDARDS_NOTE =
  "Alignment is shown as sample thematic categories, not standard codes. Exact standard numbers should be verified against the current Alabama Course of Study (and your state or district framework) before classroom use.";

/** Project-wide civic-judgment framing (reused across pages). */
export const RECURRING_QUESTION = "Not just: is it biased? Ask: what does the bias do?";
export const CORE_PRINCIPLE =
  "You do not have to be neutral, but you do have to be accountable to evidence.";
export const RECONSTRUCTION_DRIVING_QUESTION =
  "After the Civil War, did Reconstruction transform American citizenship, or did biased stories about race, power, and freedom help restore the old order?";

/** Purchase configuration for the Reconstruction pack sales page.
 *  To go live: paste your Gumroad/Stripe Payment Link into `purchaseUrl`
 *  and set `available` to true. Until then the page shows the demo state. */
export const PRODUCT_SALE = {
  available: false,
  purchaseUrl: "", // e.g. "https://<you>.gumroad.com/l/reconstruction-pack"
  price: "$9",
  /** Optional: a licensing-enquiries email, shown only if set. */
  contactEmail: "",
};
