import { RedButton } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';
import { Header, Logo } from './styles/Header.styled';

const headerComponent = ({ isSignUpForm = false }) => {
	return (
		<Header className='bg-gradient-to-b from-black'>
			<Flex>
				<Logo src={process.env.REACT_APP_IMAGE_BASE_PATH + 'logo.svg'} alt='Logo' />
				{isSignUpForm && <RedButton>Sign In</RedButton>}
			</Flex>
		</Header>
	);
};

export default headerComponent;
