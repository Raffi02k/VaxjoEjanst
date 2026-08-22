import { Zap } from 'lucide-react'
import PageMeta from '../components/PageMeta'
import { projects } from '../data/projects'

export default function ProjectsPage(){return <>
  <PageMeta title="Projekt | Växjö Eltjänst" description="Projekt och referenser från Växjö Eltjänst."/>
  <section className="page-hero dark-page"><div className="shell"><span className="eyebrow light">PROJEKT</span><h1>Riktigt arbete ska få ta plats.</h1><p>Den här sidan är byggd som en case-portfolio. När riktiga projektbilder och projektfakta finns kan varje case få egen sida.</p></div></section>
  <section className="section-pad"><div className="shell project-grid wide">{projects.map((p,i)=><article className="project-card" key={p.slug}><div className="project-media">{p.image?<img src={p.image} alt=""/>:<div className="project-placeholder"><Zap size={52}/></div>}<span className="project-index">0{i+1}</span></div><div className="project-meta"><span>{p.tag}</span><span className="demo-label">CASE-MALL</span></div><h3>{p.title}</h3><p>{p.description}</p></article>)}</div></section>
</>}
