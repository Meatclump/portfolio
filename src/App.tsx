import { createContext, useState, type Dispatch, type SetStateAction } from "react"
import SubTitle from "./components/header/branding/SubTitle"
import TagLine from "./components/header/branding/TagLine"
import Title from "./components/header/branding/Title"
import HeaderContainer from "./components/header/HeaderContainer"
import NavContainer from "./components/header/nav/NavContainer"
import NavElement from "./components/header/nav/NavElement"
import MainContainer from "./components/main/MainContainer"
import SocialContainer from "./components/header/social/SocialContainer"
import SocialItem from "./components/header/social/SocialItem"
import { FaGithub, FaLinkedin } from "react-icons/fa6"

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
			<ActiveNavItemContext value={{ activeNavItem, setActiveNavItem }}>
				<HeaderContainer>
					<Title>Henrik Persson</Title>
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

				</MainContainer>
			</ActiveNavItemContext>
		</div>
	)
}

export default App
