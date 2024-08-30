import { useState } from 'react';
import { Link } from 'react-router-dom';
import { RedButton } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';
import { Header, Logo } from './styles/Header.styled';

const HeaderComponent = () => {
	const [isSignUpForm] = useState(window.location.pathname === '/sign-up');
	return (
		<Header className='bg-gradient-to-b from-black'>
			<Flex>
				<Link to={'sign-up'}>
					<Logo src={process.env.REACT_APP_IMAGE_BASE_PATH + 'logo.svg'} alt='Logo' />
				</Link>
				{isSignUpForm && (
					<RedButton>
						<Link to={'login'}>Sign In</Link>
					</RedButton>
				)}
			</Flex>
		</Header>
	);
};

export default HeaderComponent;
