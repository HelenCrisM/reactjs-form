import { Fragment } from 'react';
import Form from './components/Form';
import GlobalStyle from './theme/globalStyles';

function App() {
	return (
		<>
			<Fragment>
				<GlobalStyle />
				<Form />
			</Fragment>
		</>
	);
}

export default App;
