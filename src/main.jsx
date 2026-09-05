import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  BriefcaseBusiness,
  Cloud,
  Users,
  Laptop,
  FileCheck2,
  Facebook,
  Linkedin
} from 'lucide-react';

import './styles.css';

const go = (p) => {

const LINKEDIN_URL =
  'https://www.linkedin.com/company/royalt-enterprise-it-group';

const FACEBOOK_URL =
  'https://www.facebook.com/people/RoyalT-Enterprise';

const services = [
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
const go = (p) => {
  setPage(p);
  setMenu(false);
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
const booking = () =>
  window.open(BOOKINGS_URL, "_blank", "noopener,noreferrer");
 return <div><header><button className="brand" onClick={()=>go('Home')}><img src="/royalt-logo.png" onError={e=>e.currentTarget.style.display='none'} alt="RoyalT Enterprise IT Group logo"/><span><b>RoyalT Enterprise IT Group</b><small>Strategic IT Solutions that Scale with Your Business</small></span></button><nav>{nav.map(n=><button className={page===n?'active':''} onClick={()=>go(n)} key={n}>{n}</button>)}<button className="gold" onClick={booking}>Schedule a Consultation</button></nav><button className="mobile" onClick={()=>setMenu(!menu)} aria-label="Toggle navigation">{menu?<X/>:<Menu/>}</button></header>{menu&&<div className="mobilemenu">{nav.map(n=><button onClick={()=>go(n)} key={n}>{n}</button>)}</div>}<main>{page==='Home'?<Home go={go} booking={booking}/>:page==='About'?<About booking={booking}/>:page==='Services'?<Services booking={booking}/>:page==='Industries'?<Industries booking={booking}/>:page==='Resources'?<Resources go={go}/>:page==='Insights'?<Insights/>:<Contact booking={booking}/>}</main><Footer go={go}/></div>
}
function Hero({booking,go}){return <section className="hero"><div><span className="pill">Fractional CIO • Microsoft 365 • IT Governance</span><h1>Strategic technology leadership that <em>scales with your business.</em></h1><p>RoyalT helps growing organizations strengthen technology strategy, security, governance, workforce operations, and Microsoft 365 through practical executive guidance.</p><div className="actions"><button className="gold" onClick={booking}>Schedule a Consultation</button><button className="outline" onClick={()=>go('Services')}>Explore Services</button></div></div><div className="logoPanel"><img src="/royalt-logo.png" onError={e=>{e.currentTarget.style.display='none';e.currentTarget.nextSibling.style.display='block'}} alt="RoyalT Enterprise IT Group logo"/><div className="logoFallback">RoyalT<br/><small>Enterprise IT Group</small></div></div></section>}
function Home({go,booking}){return <><Hero booking={booking} go={go}/><section className="profile"><div className="photo"><img src="/royal-headshot.jpg" onError={e=>{e.currentTarget.style.display='none';e.currentTarget.nextSibling.style.display='grid'}} alt="Royal Williams-Thompson professional headshot"/><div className="photoFallback">Add<br/>royal-headshot.jpg</div></div><div><span className="eyebrow">Founder & Principal Consultant</span><h2>Royal Williams-Thompson</h2><p className="mutedLight">RoyalT Enterprise IT Group, LLC</p><p>Providing Fractional CIO leadership, Microsoft 365 governance, identity and access management, endpoint management, workforce technology operations, and IT governance services designed to align technology with business objectives.</p><div className="tags">{['Fractional CIO','Microsoft 365','Identity & Access','IT Governance','Endpoint Management','Workforce Technology'].map(x=><span key={x}>{x}</span>)}</div><button className="gold" onClick={booking}>Schedule via Microsoft Bookings <ArrowRight size={18}/></button></div></section><ServiceGrid booking={booking}/><section className="approach"><div><span className="eyebrow dark">The RoyalT Approach</span><h2>From uncertainty to an actionable plan.</h2><p>Practical priorities, accountable ownership, and executive communication create a technology program leadership can understand and measure.</p></div><ol>{[['Assess','Understand the environment, risks, and operating needs.'],['Prioritize','Connect findings to business impact.'],['Implement','Coordinate improvements with clear ownership.'],['Govern','Provide recurring visibility and improvement.']].map((x,i)=><li key={x[0]}><b>0{i+1}</b><span><strong>{x[0]}</strong>{x[1]}</span></li>)}</ol></section><CTA booking={booking}/></>}
function ServiceGrid({booking}){return <section className="section"><span className="eyebrow dark">What We Do</span><h2>Technology leadership built around your business.</h2><div className="grid">{services.map(s=>{const Icon=s.icon;return <article className="card" key={s.title}><Icon size={30}/><small>{s.kicker}</small><h3>{s.title}</h3><p>{s.summary}</p><ul>{s.items.map(i=><li key={i}><CheckCircle2 size={17}/>{i}</li>)}</ul><button onClick={booking}>Discuss this service <ArrowRight size={17}/></button></article>})}</div></section>}
function About({booking}){return <><PageHero k="About RoyalT" t="Royal Williams-Thompson is the Founder and Principal Consultant of RoyalT Enterprise IT Group, LLC. With expertise in Microsoft 365, identity and access management, workforce technology governance, and strategic IT leadership, Royal helps organizations strengthen security, improve operational efficiency, and align technology investments with business objectives."/><section className="section two"><div><h2>Make technology clearer, safer, and more valuable.</h2><p>RoyalT helps leadership establish direction, define accountability, strengthen controls, and build repeatable technology operations.</p></div><div className="panel"><span className="eyebrow">Founder & Principal</span><h2>Royal Williams-Thompson</h2><p>Business-focused technology leadership connecting executive priorities with disciplined technical execution.</p><button className="gold" onClick={booking}>Connect with RoyalT</button></div></section></>}
function Services({booking}){return <><PageHero k="Services" t="Strategic leadership and disciplined technology operations."/><ServiceGrid booking={booking}/><CTA booking={booking}/></>}
function Industries({booking}){let data=[['Healthcare & Healthcare Administration','Governance for sensitive information, distributed teams, EHR access, payer portals, and workforce lifecycle processes.'],['Professional Services','Secure collaboration, onboarding, vendor oversight, and technology planning.'],['Growing Businesses','Fractional leadership for organizations that have outgrown informal IT decisions.'],['Mission-Driven Organizations','Practical governance, budgeting, security, and productivity guidance.']];return <><PageHero k="Industries" t="Technology guidance shaped by operational realities."/><section className="section"><div className="grid industries">{data.map((x,i)=><article className="card" key={x[0]}><small>0{i+1}</small><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section><CTA booking={booking}/></>}
function Resources({go}){return <><PageHero k="Client Resources" t="Practical tools for stronger technology decisions."/><section className="section"><div className="grid">{['Technology Readiness Checklist','New User Access Planning Guide','IT Risk Discussion Guide'].map(x=><article className="card" key={x}><small>RESOURCE</small><h3>{x}</h3><p>Request this resource to begin a structured conversation about technology risk, ownership, and priorities.</p><button onClick={()=>go('Contact')}>Request resource <ArrowRight size={17}/></button></article>)}</div></section></>}
function Insights(){return <><PageHero k="Insights" t="Through Fractional CIO services and trusted advisory support, Royal partners with business leaders to develop scalable technology strategies, manage vendor relationships, optimize workforce technology platforms, and establish effective governance practices that support sustainable growth."/><section className="section"><div className="grid">{[['Identity & Access','Why individual accounts and MFA matter'],['Technology Governance','When growing businesses need Fractional CIO leadership'],['Microsoft 365','Turning Microsoft 365 into a governed platform']].map(x=><article className="card" key={x[1]}><small>{x[0]}</small><h3>{x[1]}</h3><p>Executive guidance designed to connect technology decisions with security, accountability, and business outcomes.</p></article>)}</div></section></>}
function Contact({booking}){const [sent,setSent]=useState(false);return <><PageHero k="Contact RoyalT" t="Let’s strengthen your technology strategy."/><section className="contact"><aside><h2>Start a conversation.</h2><p>The first step is understanding your organization, priorities, and desired outcome.</p><b>Email</b><a
  href="mailto:rwilliamsthompson@royaltenterprise.com"
>
  rwilliamsthompson@royaltenterprise.com
</a><b>Service Area</b><p>Georgetown, Texas and remote engagements</p><button className="gold" onClick={booking}>Book a Consultation</button></aside>{sent?<div className="form"><h2>Thank you for contacting RoyalT.</h2><p>This demo confirms the form experience. Connect the production form to Power Automate or an approved secure form service.</p></div>:<form className="form" onSubmit={e=>{e.preventDefault();setSent(true)}}><h2>Consultation request</h2>{['Full name','Organization','Business email','Phone'].map(x=><label key={x}>{x}<input required type={x.includes('email')?'email':'text'}/></label>)}<label>Service interest<select required><option value="">Select a service</option>{services.map(x=><option key={x.title}>{x.title}</option>)}</select></label><label>How can we help?<textarea required rows="5"/></label><button className="primary">Submit Consultation Request</button><small>Prototype form. Connect a secure form processor before launch.</small></form>}</section></>}
function PageHero({k,t}){return <section className="pageHero"><span className="eyebrow">{k}</span><h1>{t}</h1><p>RoyalT Enterprise IT Group provides practical, business-focused technology guidance for growing organizations.</p></section>}
function CTA({booking}){return <section className="cta"><div><span className="eyebrow">Let’s Talk</span><h2>Ready to bring clarity and control to your technology environment?</h2></div><button className="gold" onClick={booking}>Schedule a Consultation</button></section>}
function Footer({ go }) {
  return (
    <footer>
      <div>
        <b>RoyalT Enterprise IT Group, LLC</b>

        <p>
          Strategic IT Solutions that Scale with Your Business
        </p>

     <div className="socialLinks">
  <a
    href="https://www.facebook.com/people/RoyalT-Enterprise"
   <Facebook size={20} />
</a>

  https://www.linkedin.com/company/royalt-enterprise-it-group
    <Linkedin size={20} />
</a>
</div>
</div>
<div>
{[
"About",
"Services",
"Industries",
"Resources",
"Contact"
].map((item) => (
<button
key={item}
onClick={() => go(item)}
>
{item}
</button>
))}
</div>
<div>
<p>Georgetown, Texas</p>
<a href="mailto:rwilliamsthompson@royaltenterprise.com">
rwilliamsthompson@royaltenterprise.com
</a>
{BOOKINGS_URL}
Schedule a Consultation
</a>
</div>
<small>
© 2026 RoyalT Enterprise IT Group, LLC.
All rights reserved.
</small>
</footer>
);
}createRoot(document.getElementById('root')).render(<App/>);
