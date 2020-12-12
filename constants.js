// @flow
import * as d3 from 'd3'

export type TrackId = 'IA' | 'VD' | 'IXD' |
  'SD' | 'R&A' | 'TF' | 'BF' |
  'Cn' | 'GP' | 'Hy' |
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
  'GP': Track,
  'Hy': Track,
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
  '0': '1',
  '20': '2',
  '26': '3',
  '35': '4',
  '40': '5',
  '46': '6',
  '52': '7',
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
  'GP': Track,
  'Hy': Track,
  'Mp': Track,
  'Em': Track
|}

export const tracks: Tracks = {
  "IA": {
    "displayName": "Information Architecture",
    "category": "A",
    "description": "The structural design of information from organizing, labelling, search, and navigation systems.",
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
      "summary": "Master: Designs complex, reusable architectures that pioneer best practices",
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
    "description": "Shaping the product experience through artifacts like illustrations, photography, typography, color, layout, hierarchy, and more to improve the usability and delight of products.",
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
      "summary": "Master: Is an industry-leading expert in art direction",
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
    "description": "The dialogue between a person and a product, system, or service focused on the physical (ease/speed of use) and emotional (delight).",
    "milestones": [{
      "summary": "Passable: Leverages current industry best practices",
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
      "summary": "Proficient: Enable business successes from contextually appropriate interactions",
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
      "summary": "Master: Pioneers new and novel interactions that directly generate business success",
      "signals": [
        "Frames and solves hard problems",
        "Presents company as an industry leader in design",
        "Working with partners and stakeholders, begins making real change in how the company approaches its business",
        "Articulates vision for the team that excites and inspires leaders and partner",
        "Recognized industry expert in Interaction Design",
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
    "description": "Shaping the product experience through thoughtful holistic and system thinking to consider how the experience is a sum of many pieces from aspects the person directly interacts with as well as the behind the scenes systems and people.",
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
      "summary": "Passable: Has a basic understanding of common user research techniques",
      "signals": [
        "Relies solely on qualitative data",
      ],
      "examples": [
        "Conducted the basics of user research methods - intereviews and usability tests",
      ],
    }, {
      "summary": "Capable: Leverages quantative data from others and begins to use more qualitative methodologies",
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
      "summary": "Proficient: Effectively analyzes quantitative data and continues to lead qualitative data methodologies",
      "signals": [
        "Maps out how to collect future quantitative data to evaluate the quality of the UX",
        "Is a user of quantitative data tools",
        "Willing to compromise designs to achieve more immediate goals (realistic of constraints and value)",
      ],
      "examples": [
        "Directed team response effectively during outages",
        "Conducted A/B testing",
        "Advocated for higher designer quality with evidence to convince others",
        "Presented research insights in a digestible story at different levels of depth depending on the audience",
      ],
    }, {
      "summary": "Master: Effectively measures the quality of all a holistic user experience",
      "signals": [
        "Develops strategies to improve key experience indicators",
        "Disseminating knowledge and alignment are top priorities",
      ],
      "examples": [
        "Presented and sold leadership into key experience indicators",
        "Coordinated centralizing user research in to a database",
      ],
    }],
  },

  "TF": {
    "displayName": "Technical Fluency",
    "category": "B",
    "description": "Ability to understand, communicate, and contribute to the various technologies and frameworks with engineering partners to enable higher quality experiences.",
    "milestones": [{
      "summary": "Basic understanding of how engineering operates",
      "signals": [
        "Understands and has experience in the engineering lifecycle of a product from ideation to market launch.",
        "Understands value of reuse of code",
      ],
      "examples": [
        "Worked within an Agile environment",
      ],
    }, {
      "summary": "Beginning to have ability to speak common language with engineers",
      "signals": [
        "Understands a basic language / framework (HTML/Bootstrap)",
        "Has learned the why behind technical constraints",
        "Understands the value of design tokens"
      ],
      "examples": [
        "Has successfully found creative solutions to technical constraints",
        "Created style guides that have specifications for CSS styles",
      ],
    }, {
      "summary": "Strong advocate for designer and engineer partnership",
      "signals": [
        "Has the ability anticipate technical constraints and decomposition needs",
        "Found technical solutions to enable engineers",
      ],
      "examples": [
        "Paired with engineers on specific CSS tweaks",
        "Introduced Lottie to enable animations",
      ],
    }, {
      "summary": "Individually improves designer to engineer handoff",
      "signals": [
        "Understands the consequences and benefits of specific tech debt",
        "Create tools to improve design-engineering process",
        "Educate engineers on practices to improve",
      ],
      "examples": [
        "Advocated for tech debt to be paid down",
        "Built design system components",
        "Taught a CSS course",
      ],
    }],
  },

  "BF": {
    "displayName": "Business Fluency",
    "category": "B",
    "description": "Ability to understand and communicate business outcomes and align customer and business value within the designs.",
    "milestones": [{
      "summary": "Brings the human perspective to the conversation while fulfilling business requests",
      "signals": [
        "Advocates for the user to business",
      ],
      "examples": [
        "Defined success as completing the business needs or requirements",
      ],
    }, {
      "summary": "Emerging recognition that it's not all about design, but how design contributes to a broader goal",
      "signals": [
        "Recognizes business goals",
      ],
      "examples": [
        "Defined success metrics for work",
        "Proven outcomes of work",
      ],
    }, {
      "summary": "Ties design success to delivering business value",
      "signals": [
        "Uses understanding of impact and success metrics to focus their team's efforts",
        "Connects team's efforts with savvy grasp of ecosystem and organizational context",
      ],
      "examples": [
        "Shared Design's business value with business leaders",
        "Demonstrated a deep understanding the design work impacts the business",
        "Effectively prioritized value over \"perfect\" designs when under constraints",
      ],
    }, {
      "summary": "Understanding of broader organizational context and goals and drive impact against them",
      "signals": [
        "Develops and articulates compelling vision for the team",
        "Begins making real change in how the company approaches its business",
        "Actions reflect holistic, integrated understanding of organizational context",
      ],
      "examples": [
        "Generated significant business value for the company in terms of new verticals, new sources of revenue, etc.",
        "Produced design vision artifacts and success in them getting bought in",
        "Ran workshop with leadership to align on business goals",
        "Defined strategy in business value Design can bring",
      ],
    }],
  },

  "Cn": {
    "displayName": "Communication",
    "category": "C",
    "description": "Provides excellent storytelling of design decision, communicates clearly, and collaborates with others effectively.",
    "milestones": [{
      "summary": "Developing skill for communicating rationale to team members",
      "signals": [
        "Communicates project status clearly and effectively",
        "Asks for help at the appropriate juncture",
        "Comfortable speaking with peers",
      ],
      "examples": [
        "Updated design tasks based on progress",
        "Presented designs within a design critique",
        "Provided feedback to other designers",
      ],
    }, {
      "summary": "Confidently communicates decision-making rationale to team members",
      "signals": [
        "Creates space for people to talk through challenges",
        "Comfortable working with and including immediate team within design process",
      ],
      "examples": [
        "Presented rough design concepts to immediate team for feedback",
        "Hosted workshops with immediate team",
        "Contributed to cross-organization team meeting",
      ],
    }, {
      "summary": "Communicates with the wider product org team appropriately",
      "signals": [
        "Comfortable working with and including product org leaders within design process",
        "Establish long-term relationships",
        "Handles disagreement with grace and action",
      ],
      "examples": [
        "Presented design visions or plans to cross-functional teams",
        "Helped prepare for a cross-organization team meeting",
        "Hosted workshops with product organization",
      ],
    }, {
      "summary": "Storytelling and persuasion techniques build trust at the highest-level",
      "signals": [
        "Demonstrates confidence and charisma",
        "Comfortable communicating at all levels of the organization",
        "Designs and delivers plans to execs, the board, and outside investors",
        "Uses storytelling and persuasion to connect strategy and vision with day-to-day practicality,"
      ],
      "examples": [
        "Presented to leadership about key experience metrics and business opportunities from CX improvements",
        "Aligned the entire organization around design vision",
        "Hosted workshops with leadership",
      ],
    }],
  },

  "GP": {
    "displayName": "Grit & Passion",
    "category": "C",
    "description": "The drive to self start, be curious, and make progress through individual effort.",
    "milestones": [{
      "summary": "Strong desire to learn diverse knowledge, techniques and topics out of curiosity and can seek out help and feedback when needed",
      "signals": [
        "Acts on desire to learn and self educates",
        "Finds passion at work to improve their own work",
      ],
      "examples": [
        "Created side projects that expand their design skills",
        "Took classes or other education material",
      ],
    }, {
      "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
      "signals": [
        "Finds passion at work to improve their team's work",
        "Proposes solutions when teams get bogged down or lose momentum",
        "Embrace challenges and persist in the face of setbacks while seeing effort as the path to improvement",
      ],
      "examples": [
        "Created tools or systems to increase efficiency",
        "Advocated better design outcomes against opposition",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the product organization or a major product impact",
      "signals": [
        "Finds passion at work to improve their organization's work",
        "Consistently pushes design work further to impact stategy",
        "Champions and pioneers new technologies to solve new classes of problems",
        "Takes ownership of systems that nobody owns or wants",
      ],
      "examples": [
        "Designed concepts that went well beyond the expected and got them on roadmap",
        "Created operational processes for the whole team to improve (Ex. Research plan template)",
        "Took over leading a design system that nobody owned",
      ],
    }, {
      "summary": "Effects change that has a substantial positive impact on the whole company",
      "signals": [
        "Takes ownership of problems that are both complex and large in scale",
        "Plays a key role in supporting and challenging leaders",
        "Takes a leading role, company wide",
      ],
      "examples": [
        "Led a significant change such as introducing a new way of working which will affect a large number of people",
        "Pioneered and convinced leadership of design vision that wasn't asked for",
        
      ],
    }],
  },

  "Hy": {
    "displayName": "Humility",
    "category": "C",
    "description": "The willingness to be transparent of their work and open to areas of improvement.",
    "milestones": [{
      "summary": "Graceful feedback receiver",
      "signals": [
        "Receives feedback well (No ego)",
        "Shares work early and often and seeks out constructive feedback from their manager, stakeholders, squads and the Product Design team"
      ],
      "examples": [
        "Received feedback that changes their designs",
        "Positive attitude displayed when receiving feedback",
      ],
    }, {
      "summary": "Feedback seeker",
      "signals": [
        "Accepting of new and different ideas and approaches",
        "Actively seeks feedback",
        "Always looking to improve",
        "Acknowledges gaps in skills and mistakes",
      ],
      "examples": [
        "Handled challenging feedback from stakeholders",
        "Discussed openly about strengthes and weaknesses",
      ],
    }, {
      "summary": "Seek to add value to others & acute awareness of their gaps",
      "signals": [
        "Provides well structured feedback",
        "Includes others within their process at specific moments",
        "Encourages peers to seek out constructive feedback from their manager, stakeholders, squads and the Product Design team",
      ],
      "examples": [
        "Built long-lasting relationships with colleagus",
      ],
    }, {
      "summary": "Cultural steward and leader in transparency, feedback, and candid expression of their gaps",
      "signals": [
        "Entire process is out in the open and transparent",
        "Gives kind and respectful feedback that builds trust",
        "Gets feedback directly from the source",
        "solicits feedback from other designers as a tool for teaching different methods and benefits of good critique",
      ],
      "examples": [
        "Established rituals to passively display work-in-progress",
        "Broke down silos with partnerships made",
      ],
    }],
  },

  "Mp": {
    "displayName": "Mentorship",
    "category": "D",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures.",
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
      "summary": "Teaches small groups of designers and contributes to the company's shared knowledge base",
      "signals": [
        "Avoids siloing information when it can be usefully shared with others",
        "Works to increase the bus factor of systems",
        "Finds tools that work best for a team member's personality",
      ],
      "examples": [
        "Gave an educational presentation",
      ],
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": [
        "Defines an entire curriculum for a discipline",
        "Draws positive attention to well-modeled mentor and teaching behaviours",
        "Creates brown bag series and lines up speakers",
        "Ensure a group member has an appropriate role on their team",
        "Offers effective career advice to group members, without being prescriptive",
        "Discusses paths, and creates plans for personal and professional growth",
        "Advocates to align people with appropriate roles within organization",
      ],
      "examples": [
        "Created and lead a group for a cause or topic",
        "Organized an Design team meeting with an outside speaker",
        "Designed and taught education curriculum",
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
        "Started an advisor program and lined up external mentors",
      ],
    }],
  },

  "Em": {
    "displayName": "Evangelism",
    "category": "D",
    "description": "Promotes Design org, thinking, and quality internally and externally to advocate and establish it as an attractive and thoughtful place to work for Design.",
    "milestones": [{
      "summary": "Represents Design well externally, and influences individuals positively",
      "signals": [
        "Shares personal and organizational successes with their network",
        "Attends company hosted events and talks with guests",
        "Communicates genuine and honest excitement about their work externally",
      ],
      "examples": [
        "Shared a product launch post on Facebook",
        "Acted as a guide for a non-friend visitor to the office",
        "Supported PR efforts by giving a quote or having a photo taken",
      ],
    }, {
      "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
      "signals": [
        "Takes meaningful action to introduce people to their company",
        "Joined public Slack group and represented their company appropriately, and well",
        "Organizes positive small- or medium-sized events that bring people to their company",
      ],
      "examples": [
        "Volunteered as a helper for CODE2040 writing workshop",
        "Organized a short tour of the office by college students",
        "Talked at an event hosted at their company",
      ],
    }, {
      "summary": "Works hard to positively influence large groups of people on their views of their company",
      "signals": [
        "Mentors or participates in a high visibility way in an external organization",
        "Builds fruitful partnerships with external organizations",
        "Writes blog posts that receive moderate traffic",
      ],
      "examples": [
        "Represented their company on a panel at a conference of industry experts",
        "Established close ties with Creative Commons",
        "Built a durable, long-standing relationship with Code2040",
      ],
    }, {
      "summary": "Establishes their company as an great, innovative company and workplace to the whole industry",
      "signals": [
        "Establishes themself as an industry thought leader who attracts talent",
        "Publishes material about organizational or Design innovations",
        "Leverages significant following to evangelise their company's Design org",
      ],
      "examples": [
        "Published a paper on Design in a peer-reviewed journal",
        "Published an article on their company's blog",
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
