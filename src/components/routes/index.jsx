import { Route, Routes } from 'react-router-dom';
import ContactPage from '../../pages/ContactPage';
import HomePage from '../../pages/HomePage';
import NotFundPage from '../../pages/NotFundPage';

function Routers() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="*" element={<NotFundPage />} />
		</Routes>
	);
}

export default Routers;
