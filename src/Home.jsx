import { lazy, Suspense } from 'react'
import {
	Container,
	Header,
	Title,
	CharactersContianer,
	Character,
	Name,
	CharacterImg,
	Description,
} from './styles'
import { characters } from './characters'

function Home() {
	return (
		<Container>
			<Header src='/characters/dragonballLogo.png'></Header>
			<Title>Characters</Title>
			<CharactersContianer>
				{characters.map(character => (
					<Character key={character.name}>
						<Name>{character.name}</Name>
						<CharacterImg
							src={`/characters/${character.img}`}
							alt={character.name}
							loading='lazy'
						/>
						<Description>{character.description}</Description>
					</Character>
				))}
			</CharactersContianer>
		</Container>
	)
}

export default Home
