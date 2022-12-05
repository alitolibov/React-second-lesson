import "./App.scss";
import Pageone from "./components/Pageone";
import Pagetwo from "./components/Pagetwo";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const data = [
	{
		id: 1,
		img: 'cofe.png',
		title: 'Brazil',
		price: 10.73,
	},
	{
		id: 2,
		img: 'cofe.png',
		title: 'Kenya',
		price: 10.73,
	},
	{
		id: 3,
		img: 'cofe.png',
		title: 'Columbia',
		price: 10.73,
	},
	{
		id: 4,
		img: 'cofe.png',
		title: 'Brazil',
		price: 10.73,
	},
	{
		id: 5,
		img: 'cofe.png',
		title: 'Brazil',
		price: 10.73,
	},
	{
		id: 6,
		img: 'cofe.png',
		title: 'Brazil',
		price: 10.73,
	}
]


function App() {



	return (
		<div className="App">
			<Routes>
			<Route path="/" element={<Pageone/>} />
				<Route path="/components/Pageone" element={<Pageone/>} />
				<Route path="/components/Pagetwo" element={<Pagetwo data={data}/>} />
			</Routes>
		</div>
	)
}

export default App;