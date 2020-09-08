// @flow
import * as d3 from 'd3'

export type TrackId = 'IA' | 'VD' | 'IXD' |
  'SD' | 'R&A' | 'TF' | 'BF' |
  'Cn' | 'Gt' | 'Ey' |
  'Mp' | 'Em'
export type Milestone = 0 | 1 | 2 | 3 | 4

export type MilestoneMap = {
  'IA': Milestone,
  'VD': Milestone,
  'IXD': Milestone,
  'SD': Milestone,
  'R&A': Milestone,
  'TF': Milestone,
  'BF': Milestone,
  'Cn': Track,
  'Gt': Track,
  'Ey': Track,
  'Mp': Milestone,
  'Em': Milestone,
}
export const milestones = [0, 1, 2, 3, 4]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 2
    case 3: return 3
    case 4: return 4
    // case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '0',
  '12': '1',
  '18': '2',
  '24': '3',
  '30': '4',
  '36': '5',
  '41': '6',
  '46': '7',
}

export const maxLevel = 56

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'IA': Track,
  'VD': Track,
  'IXD': Track,
  'SD': Track,
  'R&A': Track,
  'TF': Track,
  'BF': Track,
  'Cn': Track,
  'Gt': Track,
  'Ey': Track,
  'Mp': Track,
  'Em': Track
|}

export const tracks: Tracks = {
  "IA": {
    "displayName": "Information Architecture",
    "category": "A",
    "description": "Develops expertise in information architecture",
    "milestones": [{
      "summary": "Passable: Works effectively within established information architectures, following current best practices",
      "signals": [
        "Delivers features requiring simple local modifications",
        "Reuses existing taxonomy appropriately",
      ],
      "examples": [
        "Adds new entries to existing taxonomy",
      ],
    }, {
      "summary": "Capable: Designs minor improvements to existing architecture",
      "signals": [
        "Improves objects in the existing taxonomy",
        "Revises old information to adhere to new patterns",
      ],
      "examples": [
        "Revises nomenclature of existing aspects of a taxonomy",
      ],
    }, {
      "summary": "Proficient: Designs new aspects of existing architecture and demonstrates a nuanced understanding of the existing architecture",
      "signals": [
        "Defines new objects to expand an existing taxonomy",
      ],
      "examples": [
        "Added support for a new information type",
        "Add new levels in the architecture",
      ],
    }, {
      "summary": "Excellent: Designs complex, reusable architectures that pioneer best practices",
      "signals": [
        "Pioneers new architecture and taxonomies",
        "Strategy to transition from old patterns to new patterns",
      ],
      "examples": [
        "Define major upgrade to existing architecture",
        "Successfully transitions from one taxonomy to another",
      ],
    }],
  },

  "VD": {
    "displayName": "Visual Design",
    "category": "A",
    "description": "Visual Design shapes the product experience through artifacts like illustrations, photography, typography, color and more to improve the usability of products.    ",
    "milestones": [{
      "summary": "Passable: Works effectively within an established visual system, following current best practices",
      "signals": [
        "Becoming familiar with the limitations and requirements of designing in products and digital scenarios, knowledge and familiarity of designing within systems",
        "Makes minor modifications to existing screens",
        "Uses visual system correctly, following style guide",
      ],
      "examples": [
        "Updated icons on an existing page",
        "Designed page with all existing components and reuses layout conventions",
        "Created simple illustrations",
      ],
    }, {
      "summary": "Capable: Advanced visual contributor",
      "signals": [
        "Strong understanding of graphic design foundation: grid, typography, color theory",
        "Deep understanding of brand and applying in a product",
      ],
      "examples": [
        "Revised style guide",
        "Created advanced illustrations",
      ],
    }, {
      "summary": "Proficient: Leads visual direction",
      "signals": [
        "Strong understanding of motion, illustration, photo and video editing",
        "Coordinating visual strategy for all products",
        "Leading the visual direction for products across multiple teams",
      ],
      "examples": [
        "Presented many visual pitches to leadership",
      ],
    }, {
      "summary": "Excellent: Is an industry-leading expert in art direction",
      "signals": [
        "Leads visual direction at an organizational level",
        "Defines a long-term vision",
        "You are a recognized, industry expert in Visual Design.",
      ],
      "examples": [
        "Designed multiple successful brands' art direction",
        "Created leading visual standards and trends",
      ],
    }],
  },

  "IXD": {
    "displayName": "Interaction Design",
    "category": "A",
    "description": "Interaction Design is the design of the interaction between the user and the product.",
    "milestones": [{
      "summary": "Passable: Only leverages current best practices",
      "signals": [
        "Know and use of Design System",
        "Explore best practices for common design problems; solutions are solid, though not novel",
        "Capable engagement in standard design processes and works within establish team process. Often most successful when pairing with another designer.",
      ],
      "examples": [
        "Solved specific function-level problems (e.g., \"add to shopping cart\")",
        "Completed a heuristic evaluation and/or a competitive analysis",
      ],
    }, {
      "summary": "Capable: Ability to translate best practices into business success",
      "signals": [
        "An established performer with strong communication skills who proactively builds relationships",
        "Emerging recognition that it's not all about design, but how design contributes to a broader goal; recognizes business goals and technical constraints",
        "Strong and capable engagement in standard design processes",
        "Confident in applying best practices to common design problems; solutions are solid, not novel",
      ],
      "examples": [
        "Contributed to Design System",
        "Solved specific product capabilities (e.g., Checkout process)",
      ],
    }, {
      "summary": "Proficient: Generates new business successes from contextually appropriate interactions",
      "signals": [
        "Begins going beyond best practices, and starts uncovering novel, unexpected, but still workable solutions",
        "Clarifies success metrics and ties efforts toward delivering business value",
        "Develops the process/approach for tackling a design problem, using known methods, including outside of team process; anticipates problems",
      ],
      "examples": [
        "Started Design System",
        "Led the solution of a product area; connects that to broader product vision (e.g, product page and purchase experience)",
      ],
    }, {
      "summary": "Excellent: Recognized industry expert in Interaction Design.",
      "signals": [
        "Frames and solves hard problems",
        "Presents company as an industry leader in design",
        "Working with partners and stakeholders, begins making real change in how the company approaches its business",
        "Articulates vision for the team that excites and inspires leaders and partner",
      ],
      "examples": [
        "Driven innovative efforts that uncovered new value with new kinds of experiences",
        "Created a Big Picture of an entire company's offerings, and how they integrate and coordinate",
      ],
    }],
  },

  "SD": {
    "displayName": "Service Design",
    "category": "A",
    "description": "Service Design shapes the product experience through thoughtful holistic thinking to consider how the experience is a sum of many pieces.",
    "milestones": [{
      "summary": "Focuses on one user's specific journey",
      "signals": [
        "Able to make a single user's experience better",
        "Create experience within the existing constraints",
      ],
      "examples": [
        "Created a basic journey map of our specific user's goal",
      ],
    }, {
      "summary": "See the user's entire experience as the sum of many conditional journeys",
      "signals": [
        "Aware of systems that enable an experience",
      ],
      "examples": [
        "Created detailed journey maps with holistic look at what a single user is seeing and doing",
      ],
    }, {
      "summary": "Complete awareness of all the behind the scenes and how other aspects influence a single user's experience",
      "signals": [
        "Begins to be aware of how other users impact other users experience",
      ],
      "examples": [
        "Created detailed service blueprints",
        "Recommended system changes",
        "Designed an experience for users on both sides of the service",
      ],
    }, {
      "summary": "Actively shapes every aspect that contributes to all users and their experiences",
      "signals": [
        "Influences leadership to approach solutions holistically",
        "Scope of initiatives at the organization-level",
      ],
      "examples": [
        "Recommended process and organizational changes",
      ],
    }],
  },

  "R&A": {
    "displayName": "Research &  Analytics",
    "category": "A",
    "description": "Effectively uses quantitative and qualitative data to make informed design decisions.",
    "milestones": [{
      "summary": "Has a basic understanding of common user research techniques",
      "signals": [
        "Relies solely on qualitative data",
      ],
      "examples": [
        "Conducted usability tests",
        "Conducted user interviews",
      ],
    }, {
      "summary": "Expands quantative data from others and leverages more qualitative methodologies",
      "signals": [
        "Works with others to review existing quantitative data",
        "Begins to speak towards outcomes over output",
      ],
      "examples": [
        "Conducted concept tests",
        "Created analytics reports / analysis",
        "Defined and achieved success metrics within existing data systems",
      ],
    }, {
      "summary": "Complete focus on results",
      "signals": [
        "Maps out how to collect future quantitative data to evaluate the quality of the UX",
        "Is a user of quantitative data tools",
        "Willing to compromise designs to achieve more immediate goals (realistic of constraints and value)",
      ],
      "examples": [
        "Directed team response effectively during outages",
        "Conducted A/B testing",
        "Advocated for higher designer quality with evidence to convince others",
      ],
    }, {
      "summary": "Industry leader in effectively measuring the quality of all an organization's user experiences",
      "signals": [
        "Develops strategies to improve key experience indicators",
      ],
      "examples": [
        "Presented and sold leadership into key experience indicators",
      ],
    }],
  },

  "TF": {
    "displayName": "Technical Fluency",
    "category": "B",
    "description": "Ability to understand, communicate... and contribute to the various technologies and frameworks that are used in the designer’s context.",
    "milestones": [{
      "summary": "Basic understanding of how engineering operates",
      "signals": [
        "Understands and has experience in the engineering lifecycle of a product from ideation to market launch.",
        "Knows design tokens and understands value of reuse of code",
      ],
      "examples": [
        "Worked within an Agile environment",
      ],
    }, {
      "summary": "Beginning to have ability to speak common language with engineers",
      "signals": [
        "Understands a basic language / framework (HTML/Bootstrap)",
        "Has learned the why behind technical constraints",
      ],
      "examples": [
        "Has successfully found creative solutions to technical constraints",
        "Paired with engineers on specific CSS tweaks",
      ],
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": [
        "Implements systems that enable better testing",
        "Gives thoughtful code reviews as a domain expert",
        "Adds tooling to improve code quality",
      ],
      "examples": [
        "Improved PRB to run the same volume of tests faster",
        "Simplified hermetic test data modification",
        "Created fixture system for visual quality",
      ],
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
      "signals": [
        "Builds systems so as to eliminate entire classes of programmer error",
        "Focuses the team on quality with regular reminders",
        "Coordinates Watch priorities and projects",
      ],
      "examples": [
        "Added code coverage reporting to iOS CI pipeline",
        "Iterated repeatedly to develop Tegus underlines solution",
        "Defined and oversaw plan for closing Heartbleed vulnerability",
      ],
    }],
  },

  "BF": {
    "displayName": "Business Fluency",
    "category": "B",
    "description": "Challenges the status quo and effects positive organizational change outside of mandated work",
    "milestones": [{
      "summary": "Identifies opportunities for organizational change or product improvements",
      "signals": [
        "Writes Hatch posts about improvement opportunities",
        "Raises meaningful tensions in tactical meetings",
        "Asks leadership team probing questions at FAM",
      ],
      "examples": [
        "Wrote about problems with TTR on Hatch",
        "Wrote about content policy problems on Hatch",
        "Reported a site issue in Github",
      ],
    }, {
      "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
      "signals": [
        "Picks bugs off the backlog proactively when blocked elsewhere",
        "Makes design quality improvements unprompted",
        "Takes on trust and safety tasks proactively when blocked elsewhere",
      ],
      "examples": [
        "Advocated on own behalf for a change in role",
        "Implemented flow typing for promises",
        "Audited web client performance in Chrome and proposed fixes",
      ],
    }, {
      "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
      "signals": [
        "Demonstrates concepts proactively with prototypes",
        "Fixes complicated bugs outside of regular domain",
        "Takes ownership of systems that nobody owns or wants",
      ],
      "examples": [
        "Defined style guide to resolve style arguments",
        "Proposed and implemented at-mentions prototype",
        "Implemented video for Android independently, unprompted",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
      "signals": [
        "Champions and pioneers new technologies to solve new classes of problem",
        "Exemplifies grit and determination in the face of persistent obstacles",
        "Instigates major new features, services, or architectures",
      ],
      "examples": [
        "Created the interviewing rubric and booklet",
        "Implemented and secured support for native login",
        "Migrated Tegus2 to mono repo and bazel",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the whole company",
      "signals": [
        "Creates a new function to solve systemic issues",
        "Galvanizes the entire company and garners buy in for a new strategy",
        "Changes complex organizational processes",
      ],
      "examples": [
        "Migrated the organization from Holacracy",
        "Built Tegus Android prototype and convinced execs to fund it",
        "Convinced leadership and engineering org to move to Tegus Lite architecture",
      ],
    }],
  },

  "Cn": {
    "displayName": "Communication",
    "category": "C",
    "description": "Provides excellent storytelling of design decision and communicates clearly.",
    "milestones": [{
      "summary": "Developing skill for communicating rationale to team members",
      "signals": [
        "Communicates project status clearly and effectively",
        "Asks for help at the appropriate juncture",
        "Comfortable speaking with peers",
      ],
      "examples": [
        "Updates design tasks based on progress",
        "Presents designs within a design critique",
        "Provide feedback to other designers",
      ],
    }, {
      "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
      "signals": [
        "Ensure a group member has an appropriate role on their team",
        "Offers effective career advice to group members, without being prescriptive",
        "Creates space for people to talk through challenges",
      ],
      "examples": [
        "Set up and attended regular, constructive 1:1s",
        "Provided coaching on how to have difficult conversations",
        "Taught group members the GROW model",
      ],
    }, {
      "summary": "Confidently communicates decision-making rationale to team members",
      "signals": [
        "Discusses paths, and creates plans for personal and professional growth",
        "Advocates to align people with appropriate roles within organization",
        "Works with team leads to elevate emerging leaders",
      ],
      "examples": [
        "Reviewed individual group member progression every 6 weeks",
        "Suggested appropriate group member for Tech Lead position",
        "Helped prepare for a cross-functional team meeting",
      ],
    }, {
      "summary": "Storytelling and persuasion techniques build trust at the highest-level",
      "signals": [
        "Demonstrates confidence and charisma",
        "Comfortable communicating at all levels of the organization",
        "Designs and delivers plans to execs, the board, and outside investors",
      ],
      "examples": [
        "Presented design visions or plans to cross-functional teams",
        "Presented to the board about key experience metrics and business opportunities from CX improvements",
        "Aligned the entire organization around design vision",
      ],
    }],
  },

  "Gt": {
    "displayName": "Grit",
    "category": "C",
    "description": "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    "milestones": [{
      "summary": "Uses tools and processes to help ensure colleagues are healthy and happy",
      "signals": [
        "Keeps confidences unless legally or morally obliged to do otherwise",
        "Applies the reasonable person principle to others",
        "Avoids blame and focuses on positive change",
      ],
      "examples": [
        "Ensured group members were taking enough vacation",
        "Put themself in another's shoes to understand their perspective",
        "Checked in with colleague showing signs of burnout",
      ],
    }, {
      "summary": "Creates a positive, supportive, engaging team environment for group members",
      "signals": [
        "Sheds light on other experiences to build empathy and compassion",
        "Validates ongoing work and sustains motivation",
        "Proposes solutions when teams get bogged down or lose momentum",
      ],
      "examples": [
        "Coordinated a small celebration for a project launch",
        "Connected tedious A|B testing project with overall company goals",
        "Noted a team without a recent win and suggested some easy quick wins",
      ],
    }, {
      "summary": "Manages expectations across peers, leads in the org, promotes calm, and prevents consensus building",
      "signals": [
        "Trains group members to separate stimulus from response",
        "Maintains a pulse on individual and team morale",
        "Helps group members approach problems with curiosity",
      ],
      "examples": [
        "Completed training on transference and counter transference",
        "Completed training on compromise and negotiation techniques",
        "Reframed a problem as a challenge, instead of a barrier, when appropriate",
      ],
    }, {
      "summary": "Advocates for the needs of teams and group members, and proactively works to calm the organization",
      "signals": [
        "Ensures team environments are safe and inclusive, proactively",
        "Grounds group member anxieties in reality",
        "Tracks team retention actively and proposes solutions to strengthen it",
      ],
      "examples": [
        "Relieved org tension around product direction by providing extra context",
        "Encouraged group members to focus on what they can control",
        "Guided people through complex organizational change",
      ],
    }, {
      "summary": "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
      "signals": [
        "Recognizes and points out narratives when appropriate",
        "Works to reshape narratives from victimization to ownership",
        "Increases the psychological safety of the entire team",
      ],
      "examples": [
        "Converted group member from a problem haver to a problem solver",
        "Challenged false narrative and redirected to compassion and empathy",
        "Cultivated and championed a culture of empathy within the entire team",
      ],
    }],
  },

  "Ey": {
    "displayName": "Empathy",
    "category": "C",
    "description": "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
    "milestones": [{
      "summary": "Helps individuals identify blockers and helps them identify next steps for resolution",
      "signals": [
        "Notices when someone is stuck and reaches out",
        "Helps others break down problems into feasible, tangible next steps",
        "Talks through problems non-judgmentally",
      ],
      "examples": [
        "Completed training on diagnosing problems",
        "Unblocked a group member",
        "Reinforces and affirms positive feedback for good work",
      ],
    }, {
      "summary": "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
      "signals": [
        "Gathers context outside the immediate problem",
        "Recognizes issues within local environment and suggests change",
        "Works to encourage ownership of actions and responsibilities",
      ],
      "examples": [
        "Completed training on decision making",
        "Convinced a group member to solve a problem directly, rather than doing it for them",
        "Gave honest feedback about poor performance, with compassion",
      ],
    }, {
      "summary": "Intervenes in long-standing performance issues with targeted behavior change or performance plans",
      "signals": [
        "Aggregates signals of poor performance and creates process for improvement",
        "Investigates motivation and externalities for consistent poor performance",
        "Puts together comprehensive, achievable performance plans",
      ],
      "examples": [
        "Worked with group member to address persistent communication failures",
        "Arranged a transfer to another team, resulting in improved performance",
        "Managed group member closely to maximise chances of PIP success",
      ],
    }, {
      "summary": "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
      "signals": [
        "Recognizes heightened situations and toxic or aggressive interactions",
        "Inserts themself into conflict where appropriate to calm and mediate",
        "Encourages open dialog and builds trust between parties in conflict",
      ],
      "examples": [
        "Empowered a team to drive forward amidst uncertainty",
        "Protected team from externalities so they could focus on goals",
        "Mediated sit-down between team members to address tension",
      ],
    }, {
      "summary": "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
      "signals": [
        "Takes control of dysfunctional teams to organise chaos",
        "Repairs broken team dynamics and builds harmony",
        "Presides over a well-oiled team of teams",
      ],
      "examples": [
        "Turned around the performance of a problematic team",
        "De-escalated serious tensions between teams",
        "Rebuilt trust between senior team leads",
      ],
    }],
  },

  "Mp": {
    "displayName": "Mentorship",
    "category": "D",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "milestones": [{
      "summary": "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
      "signals": [
        "Makes themself available for informal support and advice",
        "Acts as sounding board for peers and more junior members",
        "Provides sound advice when asked",
      ],
      "examples": [
        "Acted as an onboarding buddy",
        "Paired with an engineer to help them with an unfamiliar area",
        "Helped a colleague understand their feelings",
      ],
    }, {
      "summary": "Mentors people proactively, and guides people to realizations rather than providing the answer",
      "signals": [
        "Takes time to explain concepts and best practices",
        "Asks questions to illuminate concepts, rather than stating them",
        "Allows others to lead efforts when it will help their development",
      ],
      "examples": [
        "Shared interesting article with a team member to help with their growth",
        "Offered unprompted feedback to help growth, with empathy",
        "Lead from behind to support someone new to a leadership role",
      ],
    }, {
      "summary": "Teaches small groups of engineers and contributes to Tegus shared knowledge base",
      "signals": [
        "Avoids siloing information when it can be usefully shared with others",
        "Works to increase the bus factor of systems",
        "Finds tools that work best for a team member's personality",
      ],
      "examples": [
        "Gave a brown bag presentation on payments",
        "Wrote Hatch post on avoiding RDS backfill issues",
        "Wrote Tegus-U content module",
      ],
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": [
        "Defines an entire curriculum for a discipline",
        "Draws positive attention to well-modeled mentor and teaching behaviours",
        "Creates brown bag series and lines up speakers",
      ],
      "examples": [
        "Created and lead Tegus Women in Eng group",
        "Organized an Eng All Hands with an outside speaker",
        "Designed and taught web client guild curriculum",
      ],
    }, {
      "summary": "Instills and promotes a culture of learning and development within the team",
      "signals": [
        "Sets incentive structures to recognise and reward mentorship",
        "Empowers team members to develop themselves",
        "Role models productive and healthy mentor relationships",
      ],
      "examples": [
        "Instituted the professional education budget for engineers",
        "Mentored mentors",
        "Started the eng advisor program and lined up external mentors",
      ],
    }],
  },

  "Em": {
    "displayName": "Evangelism",
    "category": "D",
    "description": "Promotes Design at Tegus internally and externally and establishes it as an attractive and thoughtful place to work",
    "milestones": [{
      "summary": "Represents Tegus well externally, and influences individuals positively",
      "signals": [
        "Shares personal and organizational successes with their network",
        "Attends Tegus-hosted events and talks with guests",
        "Communicates genuine and honest excitement about their work externally",
      ],
      "examples": [
        "Shared a Tegus product launch post on Facebook",
        "Acted as a guide for a non-friend visitor to the office",
        "Supported PR efforts by giving a quote or having a photo taken",
      ],
    }, {
      "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
      "signals": [
        "Takes meaningful action to introduce people to Tegus",
        "Joined public Slack group and represented Tegus appropriately, and well",
        "Organizes positive small- or Tegus-sized events that bring people to Tegus",
      ],
      "examples": [
        "Volunteered as a helper for CODE2040 writing workshop",
        "Organized a short tour of the office by college students",
        "Talked at a Women Who Code event hosted at Tegus",
      ],
    }, {
      "summary": "Works hard to positively influence large groups of people on their views of Tegus",
      "signals": [
        "Mentors or participates in a high visibility way in an external organization",
        "Builds fruitful partnerships with external organizations",
        "Writes blog posts about Tegus that receive moderate traffic",
      ],
      "examples": [
        "Represented Tegus on a panel at a conference of industry experts",
        "Established close ties with Creative Commons",
        "Built a durable, long-standing relationship with Code2040",
      ],
    }, {
      "summary": "Establishes Tegus as an great, innovative company and workplace to the whole industry",
      "signals": [
        "Establishes themself as an industry thought leader who attracts talent",
        "Publishes material about Tegus organizational or technical innovations",
        "Leverages significant following to evangelise Tegus",
      ],
      "examples": [
        "Published a paper on Tegus technology in a peer-reviewed journal",
        "Authored joint-press release with EFF on DNT",
        "Published “Why Content Editable Is Terrible” on the Tegus engineering blog",
      ],
    }, {
      "summary": "Introduces Tegus in a positive light to a wider audience outside the industry",
      "signals": [
        "Delivers key messages to broad, mainstream audiences",
        "Influences people with large audiences to talk about Tegus positively",
        "Drives recognition and adoption of Tegus in significant numbers",
      ],
      "examples": [
        "Published or interviewed in a mainstream newspaper or website outside tech",
        "Keynoted a conference with international attention",
        "Represented Tegus in national televised media",
      ],
    }],
  }
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  {label: 'Junior Product Designer', minPoints: 0, maxPoints: 19},
  {label: 'Product Designer I', minPoints: 20, maxPoints: 25},
  {label: 'Product Designer II', minPoints: 26, maxPoints: 34},
  {label: 'Senior Product Designer', minPoints: 35, maxPoints: 39},
  {label: 'Staff Product Designer', minPoints: 40, maxPoints: 45},
  {label: 'Principal Product Designer', minPoints: 46, maxPoints: 51},
  {label: 'Creative Director', minPoints: 52}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
