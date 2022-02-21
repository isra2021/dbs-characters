import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: auto;
	background-color: #ff6f00;
	padding-bottom: 20px;
	padding-top: 20px;
	overflow: hidden;
`

export const Header = styled.img`
	display: block;
	margin: 0 auto;
	width: min(80%, 500px);
	margin-bottom: 40px;
`

export const Title = styled.h2`
	font-size: 45px;
	font-weight: 700;
	width: 70%;
	margin: 0 auto;
	margin-bottom: 20px;

	@media screen and (max-width: 380px) {
		font-size: 35px;
	}
`

export const CharactersContianer = styled.section`
	width: 70%;
	font-size: 16px;
	margin: 0 auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 30px;

	@media screen and (max-width: 380px) {
		font-size: 12px;
	}
`

export const Character = styled.article`
	flex-grow: 1;
	flex-basis: 301px;
	font-size: 1em;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	background-color: #fff;
	padding: 15px;
	overflow: hidden;

	&:hover {
		transition: 0.7s all ease;
		transform: scale(1.1, 1.1);
		outline: 3px solid #e70017;
	}
`

export const Name = styled.h2`
	font-size: 2.19em;
	margin-right: auto;
`

export const CharacterImg = styled.img`
	width: 12.5em;
	height: 19em;
`

export const Description = styled.p`
	width: 90%;
	height: 100px;
	font-size: 1.3em;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		-webkit-appearance: none;
	}

	&::-webkit-scrollbar:vertical {
		width: 3px;
	}

	&::-webkit-scrollbar-button:increment {
		display: none;
	}

	&::-webkit-scrollbar-button {
		display: none;
	}

	&::-webkit-scrollbar-thumb {
		background: #797979;
		border-radius: 20px;
		height: 50px;
	}

	&::-webkit-scrollbar-track {
		background-color: #ccc;
	}
`
