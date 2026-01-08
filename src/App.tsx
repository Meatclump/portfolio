import { createContext, useState, type Dispatch, type SetStateAction } from "react"
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
						<About>
							<Heading>
								About
							</Heading>
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
						<ExperienceContainer>
							<Heading>
								Experience
							</Heading>
							<CardWrapper from="2023" to="2025" skills={["JavaScript", "TypeScript", "HTML & CSS", "React", "Remix", "AstroJS", "React Router"]}>
								<CardTitle href="https://srcpa.gov/">
									Frontend Developer · Santa Rosa County Property Appraiser
								</CardTitle>
								<CardParagraph>
									Designed, built and maintained the frontend code for the new website, as well as a number of integrated web apps (map, online filing system, etc). Worked closely with backend developers, product owner and other stakeholders to achieve the desired look and feel, while advocating for accessibility and best practices.
								</CardParagraph>
							</CardWrapper>
							<CardWrapper from="2016" to="2023" skills={["JavaScript", "TypeScript", "HTML & CSS", "React", "PHP", "WordPress", "SASS", "Bootstrap"]}>
								<CardTitle href="https://www.footbridgemedia.com/">
									Web Developer · Footbridge Media
								</CardTitle>
								<CardParagraph>
									Created lead-generating websites for contractors, and internal tools to improve efficiency of website turn-around. Primarily worked with PHP and JavaScript, but also React for some internal tools, such as a website crawler for parsing potential website content issues.
								</CardParagraph>
							</CardWrapper>
						</ExperienceContainer>
					</MainContainer>
				</ActiveNavItemContext>
			</div>
		</div>
	)
}

export default App
