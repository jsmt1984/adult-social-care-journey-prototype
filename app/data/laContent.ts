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
  url: string;
};

export type LocalStageContent = {
  localSummary: string;
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
            label: "Adult social care contact",
            url: "https://www.westminster.gov.uk/westminster-city-council-adult-social-care-department",
          },
        ],
        lastVerified: "February 2026",
      },
      "cost": {
        localSummary:
          "If support is arranged, the council will usually carry out a financial assessment to work out any contribution. This typically involves providing details of income, savings, and certain allowable expenses.",
        links: [
          {
            label: "Paying for social care",
            url: "https://www.westminster.gov.uk/health-and-social-care/adult-social-care/health-and-social-care/adult-social-care/about-adult-social-care/paying-social-care",
          },
        ],
        lastVerified: "February 2026",
      },
      "concerns": {
        localSummary:
          "If you have concerns about safety, quality, decisions, or invoices, you can use the council’s complaints route. Safeguarding concerns have a separate contact route.",
        links: [
          {
            label: "Complaints (including adult social care)",
            url: "https://www.westminster.gov.uk/about-council/complaints",
          },
          {
            label: "Safeguarding adults",
            url: "https://www.westminster.gov.uk/health-and-social-care/safeguarding-adults",
          },
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
        links: [
          {
            label: "Get help, support or social care (contact + referral)",
            url: "https://www.manchester.gov.uk/info/100010/social_services/3584/get_help_support_or_social_care",
          },
        ],
        lastVerified: "February 2026",
      },
      "cost": {
        localSummary:
          "If support is arranged, the council will usually complete a financial assessment to work out any contribution. The council should explain what information is needed and how charges are calculated.",
        links: [
          {
            label: "Paying for social care and support",
            url: "https://www.manchester.gov.uk/info/100010/social_services/372/paying_for_social_care_and_support",
          },
        ],
        lastVerified: "February 2026",
      },
      "putting-in-place": {
        localSummary:
          "Once a plan is agreed, support is arranged either through council-commissioned services or (where appropriate) direct payments. Availability of providers can affect start times.",
        links: [
          {
            label: "Direct payments (Manchester Local Care Organisation)",
            url: "https://www.manchesterlco.org/services/social-care-citywide/direct-payments/",
          },
        ],
        lastVerified: "February 2026",
      },
      "review": {
        localSummary:
          "Reviews may be scheduled or requested if circumstances change or support isn’t working. You can ask the council for a review if needs change.",
        links: [
          {
            label: "Get help, support or social care (includes review/change support guidance)",
            url: "https://www.manchester.gov.uk/info/100010/social_services/3584/get_help_support_or_social_care",
          },
        ],
        lastVerified: "February 2026",
      },
      "concerns": {
        localSummary:
          "If you have concerns about safety, quality, decisions, or invoices, you can use the adult social care complaints route. Safeguarding concerns have a separate reporting route.",
        links: [
          {
            label: "Adult social care complaints",
            url: "https://www.manchester.gov.uk/info/100010/social_services/6735/adult_social_care_complaints",
          },
          {
            label: "Report abuse or neglect (adults and children)",
            url: "https://www.manchester.gov.uk/info/100010/social_services/3843/tell_us_about_someone_being_abused_or_neglected",
          },
        ],
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
        links: [
          {
            label: "Contact adult social care (assessment requests and contact details)",
            url: "https://www.birmingham.gov.uk/info/50285/how_to_contact_adult_social_care_services/115/how_to_contact_us_about_adult_social_care_services_and_support",
          },
          {
            label: "How adult social care works (how to get help)",
            url: "https://www.birmingham.gov.uk/info/20018/adult_social_care/2703/how_adult_social_care_works/2",
          },
        ],
        lastVerified: "February 2026",
      },
      "understanding-needs": {
        localSummary:
          "Assessments may be completed by phone or in person depending on urgency and circumstances. You can ask for reasonable adjustments and for involvement of a carer or representative where appropriate.",
        links: [
          {
            label: "How adult social care works (assessment overview)",
            url: "https://www.birmingham.gov.uk/info/20018/adult_social_care/2703/how_adult_social_care_works/2",
          },
        ],
        lastVerified: "February 2026",
      },
      "cost": {
        localSummary:
          "If support is arranged, the council will usually complete a financial assessment to work out any contribution. The council should explain what information is needed and how charges are calculated.",
        links: [
          {
            label: "Paying for adult care and support",
            url: "https://www.birmingham.gov.uk/info/50036/paying_for_adult_care_and_support",
          },
        ],
        lastVerified: "February 2026",
      },
      "putting-in-place": {
        localSummary:
          "If you’re offered a personal budget, you may be able to take it as direct payments to arrange support in a way that works for you (where appropriate).",
        links: [
          {
            label: "Direct payments",
            url: "https://www.birmingham.gov.uk/info/50036/paying_for_adult_care_and_support/1125/direct_payments",
          },
        ],
        lastVerified: "February 2026",
      },
      "concerns": {
        localSummary:
          "If you have concerns about safety, quality, decisions, or invoices, you can use the adult social care complaints route. Safeguarding concerns have a separate reporting route.",
        links: [
          {
            label: "Statutory adult social care complaints (comments and compliments too)",
            url: "https://www.birmingham.gov.uk/info/50284/strategies_cqc_assessments_feedback_and_complaints/116/statutory_adults_social_care_complaints_comments_and_compliments",
          },
          {
            label: "Report possible abuse or neglect (adult with care and support needs)",
            url: "https://www.birmingham.gov.uk/info/20018/adult_social_care/111/report_possible_abuse_or_neglect_of_an_adult_with_care_and_support_needs",
          },
        ],
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
