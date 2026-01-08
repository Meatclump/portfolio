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
import AboutTitle from "./components/main/about/Title"
import Paragraph from "./components/main/about/Paragraph"
import PLink from "./components/main/about/ParagraphLink"
import ParagraphLink from "./components/main/about/ParagraphLink"

export interface iActiveNavItemContext {
	activeNavItem: number
	setActiveNavItem: Dispatch<SetStateAction<number>>
}

const ActiveNavItemContext = createContext<iActiveNavItemContext | null>(null)

function App() {
	const navItems = [
		{ id: 0, href: "#about", text: "About" },
		{ id: 1, href: "#projects", text: "Projects" },
	]
	const [activeNavItem, setActiveNavItem] = useState(1)
	return (
		<div className="flex min-h-screen bg-slate-900 px-12 py-16">
			<div className="flex max-w-7xl mx-auto w-full">
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
							<AboutTitle>
								About
							</AboutTitle>
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
					</MainContainer>
				</ActiveNavItemContext>
			</div>
		</div>
	)
}

export default App
