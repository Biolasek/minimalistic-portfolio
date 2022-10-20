import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

type Tech = {
  name: string,
  icon: string
}

type Links = {
  icon: string,
  name: string,
  url: string,
}

const technologies: Array<Tech> = [
  { name: "NodeJS", icon: "/tech/nodejs.svg" },
  { name: "VueJS", icon: "/tech/vue.svg" },
  { name: "NextJS", icon: "/tech/nextjs.svg" },
  { name: "TypeScript", icon: "/tech/typescript.svg" },
  { name: "JavaScript", icon: "/tech/js.svg" },
  { name: "HTML", icon: "/tech/html.svg" },
  { name: "CSS", icon: "/tech/css.svg" },
  { name: "Bootstrap", icon: "/tech/bootstrap.svg" }
];

const links: Array<Links> = [
  { icon: "/icons/github.svg", name: "github", url: "https://github.com/Biolasek" },
  { icon: "/icons/linkedin.svg", name: "linkedin", url: "https://www.linkedin.com/in/spodsiadlyy/" },
];

const Home: NextPage = () => {
  const [repos, setRepos] = useState([]);
  const getData = async () => {
    const response = await fetch('https://api.github.com/users/Biolasek/repos');
    const data = await response.json();
    setRepos(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <main className={`mt-auto mb-auto ${styles.leftSlide}`}>
        <Link href="/">
          <a><Image src="/logo.svg" alt="spcode.pl" height={50} width={180} priority /></a>
        </Link>
        <h1 className={`${styles.textBlack} mt-5 mb-0`}>Sebastian Podsiadły</h1>
        <p className={`${styles.textPosition} fw-bold text-uppercase`}>Junior Fullstack Developer</p>
        <div className="mt-5 d-flex flex-wrap">
          {technologies.map((tech: Tech, index: number) => (
            <div className={styles.techImages} key={index}>
              <Image alt={tech.name} title={tech.name} src={tech.icon} width={44} height={44} priority />
            </div>
          ))}
        </div>
        <div className={`mt-5 mb-5 row ${styles.cardsContainer}`}>
          {repos?.length > 0 && (
            repos.map((repo: any, index: number) => (
              <a href={repo.html_url} target="_blank" rel="noreferrer" className={`${styles.cardBody} ${styles.reposPosition} col-xxl-2 col-lg-3 col-md-5 col-12 mb-3`} key={index}>
                <h3 className={styles.cardTitle}>{repo.name}</h3>
                <p className={styles.cardDescription}>{repo.description}</p>
              </a>
            ))
          )}
        </div>
      </main>
      <footer className="mb-auto mb-5">
        <div className="d-flex flex-wrap justify-content-between">
          <div className="col-md-12 col-lg-6 d-flex flex-wrap">
            {links.map((link: Links, index: number) => (
              <a key={index} href={link.url} target="_blank" rel="noreferrer" className={`d-flex align-items-center ${styles.linksMargin}`}>
                <Image alt={link.name} src={link.icon} width={24} height={24} priority />
                <p className={`m-0 mx-2 ${styles.fontMedium}`}>{link.name}</p>
                <Image alt={link.name} src="/icons/link.svg" width={24} height={24} priority />
              </a>
            ))}
          </div>
          <div className={`col-md-12 col-lg-6 ${styles.footerText}`}>
            <p className={`${styles.fontMedium} m-0`}>designed and developed by <a className="fw-bold" href="https://spcode.pl/" target="_blank" rel="noreferrer">Sebastian Podsiadły</a></p>
            <p className={`${styles.fontMedium} m-0`}>built with <a className="fw-bold" href="https://nextjs.org/" target="_blank" rel="noreferrer">next.js</a>, hosted on <a className="fw-bold" href="https://www.cloudflare.com/" target="_blank" rel="noreferrer">cloudflare pages</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
