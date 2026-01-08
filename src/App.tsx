import { createContext, useEffect, useState, type Dispatch, type SetStateAction } from "react"
import SubTitle from "./components/header/branding/SubTitle"
import TagLine from "./components/header/branding/TagLine"
import BrandingTitle from "./components/header/branding/Title"
import HeaderContainer from "./components/header/HeaderContainer"
import NavContainer from "./components/header/nav/NavContainer"
import NavElement from "./components/header/nav/NavElement"
import MainContainer from "./components/main/MainContainer"
import SocialContainer from "./components/header/social/SocialContainer"
import SocialItem from "./components/header/social/SocialItem"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import About from "./components/main/about/AboutContainer"
import Heading from "./components/main/Heading"
import Paragraph from "./components/main/about/Paragraph"
import ParagraphLink from "./components/main/about/ParagraphLink"
import ExperienceContainer from "./components/main/experience/ExperienceContainer"
import CardWrapper from "./components/main/experience/card/Wrapper"
import CardTitle from "./components/main/experience/card/Title"
import CardParagraph from "./components/main/experience/card/Paragraph"
import ProjectsContainer from "./components/main/projects/ProjectsContainer"
import ProjectWrapper from "./components/main/projects/card/Wrapper"
import ProjectTitle from "./components/main/projects/card/Title"
import ProjectParagraph from "./components/main/projects/card/Paragraph"
import { InView } from "react-intersection-observer"

export interface iActiveNavItemContext {
	activeNavItem: number
	setActiveNavItem: Dispatch<SetStateAction<number>>
}

const ActiveNavItemContext = createContext<iActiveNavItemContext | null>(null)

function App() {
	const navItems = [
		{ id: 0, href: "#about", text: "About" },
		{ id: 1, href: "#experience", text: "Experience" },
		{ id: 2, href: "#projects", text: "Projects" },
	]
	const [activeNavItem, setActiveNavItem] = useState(0)

	const [aboutInView, setAboutInView] = useState(false)
	const [projectsInView, setProjectsInView] = useState(false)
	const [experienceInView, setExperienceInView] = useState(false)

	// Update state for active nav item on scroll
	useEffect(() => {
		if (aboutInView) {
			setActiveNavItem(0)
		} else if (experienceInView) {
			setActiveNavItem(1)
		} else if (projectsInView) {
			setActiveNavItem(2)
		}
	}, [aboutInView, projectsInView, experienceInView])

	return (
		<div className="flex bg-slate-900">
			<div className="flex flex-col lg:flex-row max-w-7xl mx-auto w-full">
				<ActiveNavItemContext value={{ activeNavItem, setActiveNavItem }}>
					<HeaderContainer>
						<BrandingTitle>Henrik Persson</BrandingTitle>
						<SubTitle>Web Developer</SubTitle>
						<TagLine>
							I create responsive websites and web apps with accessibility and user experience in mind.
						</TagLine>
						<NavContainer>
							{navItems.map(item => (
								<NavElement
									key={item.id}
									active={item.id === activeNavItem}
									href={item.href}
								>
									{item.text}
								</NavElement>
							))}
						</NavContainer>
						<SocialContainer>
							<SocialItem href="https://github.com/Meatclump">
								<FaGithub />
							</SocialItem>
							<SocialItem href="https://www.linkedin.com/in/henrik-persson-7b35b972/">
								<FaLinkedin />
							</SocialItem>
						</SocialContainer>
					</HeaderContainer>
					<MainContainer>
						<InView as="div" onChange={inView => setAboutInView(inView)}>
							<Heading>
								About
							</Heading>
						</InView>
						<About>
							<Paragraph>
								I am a web developer with a great interest in React, similar frameworks, usability and accessibility. For the past decade I've been working as a developer in the USA, where I have used everything from <ParagraphLink href="https://www.php.net/">PHP</ParagraphLink> and <ParagraphLink href="https://wordpress.com/">Wordpress</ParagraphLink> to <ParagraphLink href="https://astro.build/">AstroJS</ParagraphLink> and <ParagraphLink href="https://reactrouter.com/">React Router</ParagraphLink>.
							</Paragraph>
							<Paragraph>
								In recent years I have been primarily working with modern web development technologies to create responsive and performant websites and web apps with accessibility in mind.
							</Paragraph>
							<Paragraph>
								I am proficient in various component libraries, and a hobby of mine is recreating these myself to see how they are implemented and function.
							</Paragraph>
						</About>
						<InView as="div" onChange={inView => setExperienceInView(inView)}>
							<Heading>
								Experience
							</Heading>
						</InView>
						<ExperienceContainer>
							<CardWrapper
								from="2023"
								to="2025"
								skills={["JavaScript", "TypeScript", "HTML & CSS", "React", "Remix", "AstroJS", "React Router"]}
								href="https://srcpa.gov/"
							>
								<CardTitle>
									Frontend Developer · Santa Rosa County Property Appraiser
								</CardTitle>
								<CardParagraph>
									Designed, built and maintained the frontend code for the new website, as well as a number of integrated web apps (map, online filing system, etc). Worked closely with backend developers, product owner and other stakeholders to achieve the desired look and feel, while advocating for accessibility and best practices.
								</CardParagraph>
							</CardWrapper>
							<CardWrapper
								from="2016"
								to="2023"
								skills={["JavaScript", "TypeScript", "HTML & CSS", "React", "PHP", "WordPress", "SASS", "Bootstrap"]}
								href="https://www.footbridgemedia.com/"
							>
								<CardTitle>
									Web Developer · Footbridge Media
								</CardTitle>
								<CardParagraph>
									Created lead-generating websites for contractors, and internal tools to improve efficiency of website turn-around. Primarily worked with PHP and JavaScript, but also React for some internal tools, such as a website crawler for parsing potential website content issues.
								</CardParagraph>
							</CardWrapper>
							<CardWrapper
								from="Feb 2015"
								to="Jun 2015"
								skills={["JavaScript", "NodeJS", "ExpressJS", "AngularJS", "HTML & CSS"]}
								href="https://www.pinmeto.com/"
							>
								<CardTitle>
									Student Intern · PinMeTo
								</CardTitle>
								<CardParagraph>
									Design and coding of a prototype in NodeJS and Express for editing and synchronizing location data for businesses across multiple platforms such as google maps, facebook and foursquare.
								</CardParagraph>
							</CardWrapper>
						</ExperienceContainer>
						<InView as="div" onChange={inView => setProjectsInView(inView)}>
							<Heading>
								Projects
							</Heading>
						</InView>
						<ProjectsContainer>
							<ProjectWrapper
								skills={[]}
								href="https://srcpa.gov/"
								image="/projects/srcpa.jpg"
							>
								<ProjectTitle>
									SRCPA Website
								</ProjectTitle>
								<ProjectParagraph>
									Responsive and accessible website primarily built in AstroJS, along with several integrated Remix apps.
								</ProjectParagraph>
							</ProjectWrapper>
							<ProjectWrapper
								skills={[]}
								href="https://www.goblueribbon.com/"
								image="/projects/blueribbon.jpg"
							>
								<ProjectTitle>
									BlueRibbon Website
								</ProjectTitle>
								<ProjectParagraph>
									Contractor website made in an in-house JavaScript CMS.
								</ProjectParagraph>
							</ProjectWrapper>
							<ProjectWrapper
								skills={[]}
								href="https://www.goblueribbon.com/"
								image="/projects/crawler.jpg"
							>
								<ProjectTitle>
									Website Content Crawler
								</ProjectTitle>
								<ProjectParagraph>
									JavaScript website crawler. Built for checking website content for SEO issues.
								</ProjectParagraph>
							</ProjectWrapper>
						</ProjectsContainer>
					</MainContainer>
				</ActiveNavItemContext>
			</div>
		</div>
	)
}

export default App
