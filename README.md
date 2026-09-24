# FREIE ADMITS

> **Your Journey. Our Guidance. Your Global Future.**  
> Study Abroad with Clarity, Confidence & the Right Guidance.

A modern, high-converting, Europe & Germany focused study-abroad consultancy website built with React 19, Vite, and custom SVG vector illustrations (**strictly no real human photos**).

---

## 🧭 Navigation & The 7 Dedicated Pages

The website features the exact streamlined menu structure requested:

```
HOME | ABOUT | DESTINATIONS | COURSES | SERVICES | dMAT GERMANY | CONTACT   [BOOK FREE COUNSELLING]
```

| # | Page | Route | Core Features & Content |
|---|------|-------|--------------------------|
| 1 | 🏠 **Home** | [`/`](file:///d:/projects/freieadmits/src/pages/Home.jsx) | • Hero section with vector European graduate artwork, brand tagline, and dual CTAs: `[BOOK FREE COUNSELLING]` and `[GET PROFILE EVALUATION]`.<br>• Prominent **Germany & dMAT Master's Spotlight** banner.<br>• 6 "Why Choose FREIE ADMITS?" pillars (Profile-Based, Europe-Focused, Course Selection, Application, Visa, Pre-Departure).<br>• Destination explorer spotlighting Germany.<br>• Program directory covering Bachelor's, Master's, MBA, Engineering, IT, Healthcare, and **Germany Ausbildung**.<br>• 6-stage process roadmap and ethical admissions philosophy. |
| 2 | 👥 **About Us** | [`/about`](file:///d:/projects/freieadmits/src/pages/AboutUs.jsx) | • "Helping Students Make Informed Global Education Decisions".<br>• Core principle: *Understand the student first. Recommend the pathway second.*<br>• Comprehensive breakdown of What We Do (9 stages).<br>• 5-stage structured approach: 01 Understand $\rightarrow$ 02 Explore $\rightarrow$ 03 Plan $\rightarrow$ 04 Apply $\rightarrow$ 05 Prepare.<br>• Mission & Vision cards.<br>• "Why Students Choose FREIE ADMITS" (Personalised, European, Transparent, End-to-End).<br>• *Start With a Conversation* CTA. |
| 3 | 🌍 **Destinations** | [`/destinations`](file:///d:/projects/freieadmits/src/pages/Destinations.jsx) | • "Explore. Compare. Choose Your Path."<br>• **Germany Featured Spotlight**: Public & private universities, tuition-free public education, 18-month job seeker visa, Ausbildung vocational pathways, TU9 institutions.<br>• European destinations: Netherlands, France, Spain, Poland, Italy, Austria, Sweden, and Denmark with popular study areas, tuition estimates, and interactive modals.<br>• Profile-Based Counselling Callout: *Academic Qualification + Percentage/GPA + Course Preference + Budget + Preferred Country*. |
| 4 | 🎓 **Courses** | [`/courses`](file:///d:/projects/freieadmits/src/pages/Courses.jsx) | • "Choose a Course That Builds Your Future".<br>• Search bar and category filtering: Bachelor's, Master's, MBA & Management, Engineering & Technology, Computer Science & IT, Nursing & Healthcare, and **Germany Ausbildung**.<br>• Rich course cards with tuition, duration, and target career roles.<br>• Interactive program detail modal with GPA and prerequisite criteria. |
| 5 | 🛠️ **Services** | [`/services`](file:///d:/projects/freieadmits/src/pages/Services.jsx) | • Detailed guidance across all 8 stages:<br>&nbsp;&nbsp;01. Profile Evaluation<br>&nbsp;&nbsp;02. Course Selection<br>&nbsp;&nbsp;03. University Selection<br>&nbsp;&nbsp;04. Application Assistance<br>&nbsp;&nbsp;05. SOP & LOR Guidance<br>&nbsp;&nbsp;06. Scholarship & Financial Guidance<br>&nbsp;&nbsp;07. Visa Guidance (with transparent consulate authority disclaimer)<br>&nbsp;&nbsp;08. Pre-Departure Support.<br>• *Your Journey. One Team.* closing banner. |
| 6 | 🎯 **dMAT Germany** | [`/dmat-germany`](file:///d:/projects/freieadmits/src/pages/DmatGermany.jsx) | • Dedicated Master's Assessment test page: *Prepare. Assess. Move Forward.*<br>• What is dMAT? (Digital Master's Assessment Test overview).<br>• Who Should Consider dMAT Preparation? (Bachelor holders, STEM/Engineering candidates, university requirements).<br>• What We Help With (Process, Preparation, Test Environment, Application, Timeline Planning).<br>• Important Notice: *dMAT is not a substitute for complete admissions and does not itself guarantee admission.*<br>• Custom computer-based assessment SVG illustration. |
| 7 | 📞 **Contact** | [`/contact`](file:///d:/projects/freieadmits/src/pages/Contact.jsx) | • Interactive **Book a Counselling Session** form with: Full Name, Phone, Email, Highest Qualification, Percentage/GPA, Preferred Course, Preferred Country, and Preferred Intake.<br>• **What Happens Next?** 4-step transparent roadmap (01 Counsellor Review $\rightarrow$ 02 Profile Contact $\rightarrow$ 03 Study Pathways $\rightarrow$ 04 Next Steps).<br>• Direct phone, WhatsApp, and admissions email desks.<br>• Mandatory university & visa authority disclaimer. |

---

## 🎨 UI/UX & Visual Architecture

- **Visual Prominence**: Germany + dMAT + Master's / IT / Engineering & Ausbildung are given primary spotlight hierarchy.
- **Illustration-Only Requirement**: Strictly 100% vector SVG illustrations and character avatars (no real human photos):
  - `HeroIllustration.jsx`: Graduate with laptop, diploma, campus facade, globe, and German flag ribbon.
  - `DmatIllustration.jsx`: Computer-based assessment screen with timer, questions, and verified master's badge.
  - `DestinationIllustrations.jsx`: Stylized landmark vector artwork for European countries.
  - `AboutHeroIllustration.jsx`: Global European reach nodes.
- **Interactive Confetti**: Built-in celebratory feedback upon inquiry submission via `canvas-confetti`.
- **Palette**:
  - European Tech Blue: `#1d4ed8` / `#2563eb` / `#3b82f6`
  - German Golden Amber: `#f59e0b` / `#d97706` / `#fbbf24`
  - Deep Navy Slate: `#090e1a` / `#0f172a` / `#1e293b`
  - Emerald Green: `#10b981`

---

## ⚡ Quick Run

```bash
# 1. Start development server
npm run dev

# 2. Build for production
npm run build

# 3. Lint with oxlint (0 errors, 0 warnings)
npm run lint
```
