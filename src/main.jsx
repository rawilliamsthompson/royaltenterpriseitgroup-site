import React, {useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Menu, X, ArrowRight, CheckCircle2, ShieldCheck, BriefcaseBusiness, Cloud, Users, Laptop, FileCheck2, Facebook, Linkedin} from 'lucide-react';
import './styles.css';

const BOOKINGS_URL =
  "https://outlook.office.com/bookwithme/user/ec1652782463412ea71cfe0795708149@royaltenterprise.com?anonymous&ismsaljsauthenabled&ep=plink";
const FORMSPREE_ENDPOINT='https://formspree.io/f/xqpkdpkr';
const FACEBOOK_URL='https://www.facebook.com/people/RoyalT-Enterprise/61592690595304/';
const LINKEDIN_URL='https://www.linkedin.com/company/royalt-enterprise-it-group/';
const services=[
 {icon:BriefcaseBusiness,title:'Fractional CIO Services',kicker:'Executive Technology Leadership',summary:'Strategic direction, governance, financial oversight, and executive guidance without the cost of a full-time CIO.',items:['Technology roadmaps','IT budgeting and governance','Vendor oversight','Executive reporting']},
 {icon:Cloud,title:'Microsoft 365 Management',kicker:'Secure Cloud Productivity',summary:'Administration, governance, optimization, and support for a secure and usable Microsoft 365 environment.',items:['Entra ID administration','Exchange Online','SharePoint and OneDrive','License optimization']},
 {icon:ShieldCheck,title:'Identity & Access Management',kicker:'Zero Trust Access Controls',summary:'Identity governance that helps ensure the right people have the right access at the right time.',items:['Multi-factor authentication','Conditional Access','Role-based access','Access reviews']},
 {icon:Laptop,title:'Endpoint & Device Management',kicker:'Protected Business Devices',summary:'Lifecycle management and security for corporate and bring-your-own devices.',items:['Intune planning','Device compliance','Asset lifecycle','BYOD governance']},
 {icon:Users,title:'Workforce Technology Management',kicker:'Joiner, Mover & Leaver',summary:'Structured onboarding, role changes, offboarding, and access request processes.',items:['New user setup','Access workflows','Termination procedures','Asset recovery']},
 {icon:FileCheck2,title:'IT Governance & Risk Management',kicker:'Policies & Accountability',summary:'Practical policies, assessments, standards, and reporting connected to business responsibility.',items:['IT risk assessments','Security policies','Continuity planning','Executive action plans']}
];
const nav=['Home','About','Services','Industries','Resources','Insights','Contact'];
function App(){
 const [page,setPage]=useState('Home'); const [menu,setMenu]=useState(false);
 const go=p=>{setPage(p);setMenu(false);window.scrollTo({top:0,behavior:'smooth'})};
 const booking=()=>window.open(BOOKINGS_URL,'_blank','noopener,noreferrer');
 return <div><header><button className="brand" onClick={()=>go('Home')}><img src="/royalt-logo.png" onError={e=>e.currentTarget.style.display='none'} alt="RoyalT Enterprise IT Group logo"/><span><b>RoyalT Enterprise IT Group</b><small>Strategic IT Solutions that Scale with Your Business</small></span></button><nav>{nav.map(n=><button className={page===n?'active':''} onClick={()=>go(n)} key={n}>{n}</button>)}<button className="gold" onClick={booking}>Schedule a Consultation</button></nav><button className="mobile" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X/>:<Menu/>}</button></header>{menu&&<div className="mobilemenu">{nav.map(n=><button onClick={()=>go(n)} key={n}>{n}</button>)}</div>}<main>{page==='Home'?<Home go={go} booking={booking}/>:page==='About'?<About booking={booking}/>:page==='Services'?<Services booking={booking}/>:page==='Industries'?<Industries booking={booking}/>:page==='Resources'?<Resources go={go}/>:page==='Insights'?<Insights go={go}/>:<Contact booking={booking}/>}</main><Footer go={go}/></div>
}
function Hero({booking,go}){return <section className="hero"><div><span className="pill">Fractional CIO • Microsoft 365 • IT Governance</span><h1>Strategic technology leadership that <em>scales with your business.</em></h1><p>RoyalT helps growing organizations strengthen technology strategy, security, governance, workforce operations, and Microsoft 365 through practical executive guidance.</p><div className="actions"><button className="gold" onClick={booking}>Schedule a Consultation</button><button className="outline" onClick={()=>go('Services')}>Explore Services</button></div></div><div className="logoPanel"><img src="/royalt-logo.png" onError={e=>{e.currentTarget.style.display='none';e.currentTarget.nextSibling.style.display='block'}} alt="RoyalT Enterprise IT Group logo"/><div className="logoFallback">RoyalT<br/><small>Enterprise IT Group</small></div></div></section>}
function Home({go,booking}){return <><Hero booking={booking} go={go}/><section className="profile"><div className="photo"><img src="/royal-headshot.jpg" onError={e=>{e.currentTarget.style.display='none';e.currentTarget.nextSibling.style.display='grid'}} alt="Royal Williams-Thompson professional headshot"/><div className="photoFallback">Add<br/>royal-headshot.jpg</div></div><div><span className="eyebrow">Founder & Principal Consultant</span><h2>Royal Williams-Thompson</h2><p className="mutedLight">RoyalT Enterprise IT Group, LLC</p><p>Providing Fractional CIO leadership, Microsoft 365 governance, identity and access management, endpoint management, workforce technology operations, and IT governance services designed to align technology with business objectives.</p><div className="tags">{['Fractional CIO','Microsoft 365','Identity & Access','IT Governance','Endpoint Management','Workforce Technology'].map(x=><span key={x}>{x}</span>)}</div><button className="gold" onClick={booking}>Schedule via Microsoft Bookings <ArrowRight size={18}/></button></div></section><ServiceGrid booking={booking}/><section className="approach"><div><span className="eyebrow dark">The RoyalT Approach</span><h2>From uncertainty to an actionable plan.</h2><p>Practical priorities, accountable ownership, and executive communication create a technology program leadership can understand and measure.</p></div><ol>{[['Assess','Understand the environment, risks, and operating needs.'],['Prioritize','Connect findings to business impact.'],['Implement','Coordinate improvements with clear ownership.'],['Govern','Provide recurring visibility and improvement.']].map((x,i)=><li key={x[0]}><b>0{i+1}</b><span><strong>{x[0]}</strong>{x[1]}</span></li>)}</ol></section><CTA booking={booking}/></>}
function ServiceGrid({booking}){return <section className="section"><span className="eyebrow dark">What We Do</span><h2>Technology leadership built around your business.</h2><div className="grid">{services.map(s=>{const Icon=s.icon;return <article className="card" key={s.title}><Icon size={30}/><small>{s.kicker}</small><h3>{s.title}</h3><p>{s.summary}</p><ul>{s.items.map(i=><li key={i}><CheckCircle2 size={17}/>{i}</li>)}</ul><button onClick={booking}>Discuss this service <ArrowRight size={17}/></button></article>})}</div></section>}
function About({booking}){return <><PageHero k="About RoyalT" t="Technology leadership grounded in business reality."/><section className="section two"><div><h2>Make technology clearer, safer, and more valuable.</h2><p>RoyalT helps leadership establish direction, define accountability, strengthen controls, and build repeatable technology operations.</p></div><div className="panel"><span className="eyebrow">Founder & Principal</span><h2>Royal Williams-Thompson</h2><p>Business-focused technology leadership connecting executive priorities with disciplined technical execution.</p><button className="gold" onClick={booking}>Connect with RoyalT</button></div></section></>}
function Services({booking}){return <><PageHero k="Services" t="Strategic leadership and disciplined technology operations."/><ServiceGrid booking={booking}/><CTA booking={booking}/></>}
function Industries({booking}){let data=[['Healthcare & Healthcare Administration','Governance for sensitive information, distributed teams, EHR access, payer portals, and workforce lifecycle processes.'],['Professional Services','Secure collaboration, onboarding, vendor oversight, and technology planning.'],['Growing Businesses','Fractional leadership for organizations that have outgrown informal IT decisions.'],['Mission-Driven Organizations','Practical governance, budgeting, security, and productivity guidance.']];return <><PageHero k="Industries" t="Technology guidance shaped by operational realities."/><section className="section"><div className="grid industries">{data.map((x,i)=><article className="card" key={x[0]}><small>0{i+1}</small><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section><CTA booking={booking}/></>}
function Resources() {
  const resources = [
    {
      title: "Technology Readiness Checklist",
      description:
        "A practical review of people, processes, systems, and risks to help identify technology priorities.",
      filename: "technology-readiness-checklist.txt",
      content: `ROYALT ENTERPRISE IT GROUP
TECHNOLOGY READINESS CHECKLIST

[ ] Business goals are connected to technology priorities.
[ ] Critical applications have accountable owners.
[ ] User accounts use individual sign-in and multifactor authentication.
[ ] Former employees and unused accounts are removed promptly.
[ ] Devices are inventoried, updated, encrypted, and protected.
[ ] Important data is backed up and recovery is tested.
[ ] Vendors, renewals, and technology spending are reviewed regularly.
[ ] Technology risks are reported to leadership with clear next actions.`,
    },
    {
      title: "New User Access Planning Guide",
      description:
        "A repeatable checklist for onboarding users, assigning access, and protecting business information.",
      filename: "new-user-access-planning-guide.txt",
      content: `ROYALT ENTERPRISE IT GROUP
NEW USER ACCESS PLANNING GUIDE

Before the start date:
- Confirm the user role, manager, location, and start date.
- List the systems and data required for the role.
- Confirm approval for sensitive access.

On the start date:
- Create an individual account.
- Require multifactor authentication.
- Issue only approved role-based access.
- Record devices, applications, and licenses assigned.

After onboarding:
- Confirm access is appropriate.
- Document exceptions and expiration dates.
- Review access after role changes.`,
    },
    {
      title: "IT Risk Discussion Guide",
      description:
        "Questions leaders can use to discuss security, continuity, vendors, and accountability.",
      filename: "it-risk-discussion-guide.txt",
      content: `ROYALT ENTERPRISE IT GROUP
IT RISK DISCUSSION GUIDE

Security:
- What information would cause the greatest harm if exposed?
- Where is multifactor authentication missing?
- Who reviews security alerts and vulnerabilities?

Continuity:
- Which systems must be restored first after an outage?
- When was the last backup recovery test?
- Who makes decisions during a disruption?

Accountability:
- Who owns each major technology decision?
- How are risks, costs, and action items reported?
- What should improve in the next 90 days?`,
    },
  ];

  return (
    <>
      <PageHero
        k="Client Resources"
        t="Practical guides for stronger technology decisions."
      />

      <section className="section">
        <p className="intro">
          Download these concise guides to help your team organize priorities,
          improve consistency, and make technology decisions with greater
          confidence.
        </p>

        <div className="grid">
          {resources.map((resource) => (
            <article className="card" key={resource.title}>
              <small>DOWNLOADABLE GUIDE</small>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>

              <a
                className="primary"
                href={`data:text/plain;charset=utf-8,${encodeURIComponent(
                  resource.content
                )}`}
                download={resource.filename}
              >
                Download guide <ArrowRight size={17} />
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}function Insights() {
  const insights = [
    {
      category: "DECISION MAKING",
      title: "Priorities & Planning",
      summary:
        "How to turn competing technology requests into a focused executive roadmap.",
      benefit:
        "A clear roadmap helps a growing business focus limited time and budget on the technology improvements that support its most important goals.",
    },
    {
      category: "LEADERSHIP",
      title: "Technology Investment",
      summary:
        "What leaders should review before approving a major IT purchase or renewal.",
      benefit:
        "A thoughtful review reduces unnecessary spending, improves vendor decisions, and helps each investment scale with the business instead of creating avoidable costs.",
    },
    {
      category: "GOVERNANCE",
      title: "Accountability & Governance",
      summary:
        "How clear ownership and recurring reporting improve technology outcomes.",
      benefit:
        "Defined ownership and regular reporting help leaders spot risks earlier, keep work moving, and build reliable technology operations as the organization grows.",
    },
  ];

  return (
    <>
      <PageHero
        k="Insights"
        t="Better technology decisions start with better questions."
      />

      <section className="section">
        <p className="intro">
          Practical perspectives for leaders who need to prioritize investments,
          manage risk, and make technology accountable to the business.
        </p>

        <div className="grid">
          {insights.map((insight) => (
            <article className="card" key={insight.title}>
              <small>{insight.category}</small>
              <h3>{insight.title}</h3>
              <p>{insight.summary}</p>
              <p>
                <strong>Why it matters:</strong> {insight.benefit}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}function Contact({booking}){
 const [sent,setSent]=useState(false);
 const [submitting,setSubmitting]=useState(false);
 const [error,setError]=useState('');
 const submit=async e=>{
  e.preventDefault();
  setSubmitting(true);
  setError('');
  try{
   const response=await fetch(FORMSPREE_ENDPOINT,{method:'POST',headers:{Accept:'application/json'},body:new FormData(e.currentTarget)});
   if(!response.ok) throw new Error('Form submission failed');
   setSent(true);
  }catch{
   setError('We could not send your request. Please email rwilliamsthompson@royaltenterprise.com directly.');
  }finally{
   setSubmitting(false);
  }
 };
 return <><PageHero k="Contact RoyalT" t="Let’s strengthen your technology strategy."/><section className="contact"><aside><h2>Start a conversation.</h2><p>The first step is understanding your organization, priorities, and desired outcome.</p><b>Email</b><a href="mailto:rwilliamsthompson@royaltenterprise.com">rwilliamsthompson@royaltenterprise.com</a><b>Service Area</b><p>Georgetown, Texas and remote engagements</p><button className="gold" onClick={booking}>Book a Consultation</button></aside>{sent?<div className="form"><h2>Thank you for reaching out to RoyalT Enterprise IT Group.</h2><p>A member of our team will contact you shortly.</p></div>:<form className="form" onSubmit={submit}><h2>Consultation request</h2>{[['Full name','fullName','text'],['Organization','organization','text'],['Business email','email','email'],['Phone','phone','tel']].map(([label,name,type])=><label key={name}>{label}<input required name={name} type={type}/></label>)}<label>Service interest<select required name="service"><option value="">Select a service</option>{services.map(x=><option key={x.title} value={x.title}>{x.title}</option>)}</select></label><label>How can we help?<textarea required name="message" rows="5"/></label>{error&&<p role="alert">{error}</p>}<button className="primary" type="submit" disabled={submitting}>{submitting?'Sending...':'Submit Consultation Request'}</button></form>}</section></>}
function PageHero({k,t}){return <section className="pageHero"><span className="eyebrow">{k}</span><h1>{t}</h1><p>RoyalT Enterprise IT Group provides practical, business-focused technology guidance for growing organizations.</p></section>}
function CTA({booking}){return <section className="cta"><div><span className="eyebrow">Let’s Talk</span><h2>Ready to bring clarity and control to your technology environment?</h2></div><button className="gold" onClick={booking}>Schedule a Consultation</button></section>}
function Footer({go}){
 const footerLinks=['About','Services','Industries','Resources','Contact'];
 return <footer>
  <div>
   <b>RoyalT Enterprise IT Group, LLC</b>
   <p>Strategic IT Solutions that Scale with Your Business</p>
   <div className="socialLinks">
    <a href={FACEBOOK_URL} target="_blank" rel="noreferrer" aria-label="RoyalT Enterprise on Facebook"><Facebook size={20}/></a>
    <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="RoyalT Enterprise on LinkedIn"><Linkedin size={20}/></a>
   </div>
  </div>
  <div>{footerLinks.map(item=><button key={item} type="button" onClick={()=>go(item)}>{item}</button>)}</div>
  <div>
   <p>Georgetown, Texas</p>
   <a href="mailto:rwilliamsthompson@royaltenterprise.com">rwilliamsthompson@royaltenterprise.com</a>
  </div>
  <small>© 2026 RoyalT Enterprise IT Group, LLC. All rights reserved.</small>
 </footer>
}
createRoot(document.getElementById('root')).render(<App/>);
