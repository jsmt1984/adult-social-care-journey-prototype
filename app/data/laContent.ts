export type StageId =
  | "getting-started"
  | "understanding-needs"
  | "eligibility"
  | "planning"
  | "cost"
  | "putting-in-place"
  | "review"
  | "concerns";

export type LocalLink = {
  label: string;
  url: string; // keep empty until verified
};

export type LocalStageContent = {
  localSummary: string; // plain English, calm authority
  links?: LocalLink[];
  lastVerified: string; // e.g. "February 2026"
};

export type LocalAuthorityContent = {
  name: string;
  stages: Partial<Record<StageId, LocalStageContent>>;
};

export const laContent: Record<string, LocalAuthorityContent> = {
  "Westminster City Council": {
    name: "Westminster City Council",
    stages: {
      "getting-started": {
        localSummary:
          "Initial contact is usually through the council’s adult social care contact route. You may be asked for basic details and a short description of the situation. The council will then decide whether to arrange a needs assessment.",
        links: [
          {
            label: "Adult social care contact page",
            url: "", // add verified URL
          },
        ],
        lastVerified: "February 2026",
      },
      "cost": {
        localSummary:
          "If support is arranged, the council will usually carry out a financial assessment to work out any contribution. This typically involves providing details of income, savings, and certain allowable expenses.",
        links: [
          {
            label: "Charging / financial assessment information",
            url: "", // add verified URL
          },
        ],
        lastVerified: "February 2026",
      },
      "concerns": {
        localSummary:
          "If you have concerns about safety, quality, decisions, or invoices, you can use the council’s complaints route. Safeguarding concerns have a separate contact route.",
        links: [
          { label: "Complaints information", url: "" },
          { label: "Safeguarding adults", url: "" },
        ],
        lastVerified: "February 2026",
      },
    },
  },

  "Manchester City Council": {
    name: "Manchester City Council",
    stages: {
      "getting-started": {
        localSummary:
          "Initial contact is usually via the council’s adult social care contact route. The first step is a short explanation of needs and circumstances. The council will then decide whether to arrange a needs assessment.",
        links: [{ label: "Adult social care contact page", url: "" }],
        lastVerified: "February 2026",
      },
      "putting-in-place": {
        localSummary:
          "Once a plan is agreed, support is arranged either through council-commissioned services or (where appropriate) direct payments. Availability of providers can affect start times.",
        links: [{ label: "Direct payments information", url: "" }],
        lastVerified: "February 2026",
      },
      "review": {
        localSummary:
          "Reviews may be scheduled or requested if circumstances change or support isn’t working. You can ask the council for a review if needs change.",
        links: [{ label: "Request a review / change support", url: "" }],
        lastVerified: "February 2026",
      },
    },
  },

  "Birmingham City Council": {
    name: "Birmingham City Council",
    stages: {
      "getting-started": {
        localSummary:
          "Initial contact is usually through the council’s adult social care front door. You explain what help may be needed and any immediate risks. The council then decides whether to arrange a needs assessment.",
        links: [{ label: "Adult social care contact page", url: "" }],
        lastVerified: "February 2026",
      },
      "understanding-needs": {
        localSummary:
          "Assessments may be completed by phone or in person depending on urgency and circumstances. You can ask for reasonable adjustments and for involvement of a carer or representative where appropriate.",
        links: [{ label: "Needs assessment information", url: "" }],
        lastVerified: "February 2026",
      },
      "cost": {
        localSummary:
          "If support is arranged, the council will usually complete a financial assessment to work out any contribution. The council should explain what information is needed and how charges are calculated.",
        links: [{ label: "Charging / financial assessment information", url: "" }],
        lastVerified: "February 2026",
      },
    },
  },

  // Fallback / demo authority (safe, generic, always available)
  "Countyshire Council": {
    name: "Countyshire Council",
    stages: {
      "getting-started": {
        localSummary:
          "Initial contact is usually made by phone or online form. The council reviews what you’ve shared and decides whether to arrange a needs assessment.",
        lastVerified: "February 2026",
      },
      "concerns": {
        localSummary:
          "Concerns can usually be raised via the council’s complaints process. Safeguarding concerns have a separate route. Advocacy support may also be available locally.",
        lastVerified: "February 2026",
      },
    },
  },
};
