import React from 'react';
import ScreenFirst from "./ScreenFirst";
import ScreenThree from "./ScreenThree";
import ScreenTwo from "./ScreenTwo";
import Header from './Header';
import Footer from './Footer';
const arr = [
	{
		id: 1,
		img: 'coffee.png',
		title: 'Solimo Coffee Beans 2 kg',
		price: 10.73,
		qt: 0
	},
	{
		id: 2,
		img: 'info.png',
		title: 'Solimo Coffee Beans 2 kg',
		price: 10.73,
		qt: 10
	},
	{
		id: 3,
		img: 'types.png',
		title: 'Solimo Coffee Beans 2 kg',
		price: 10.73,
		qt: 0
	},
]


const Pageone = () => {
    return ( 
        <>
        <Header/>
			<ScreenFirst/>
			<ScreenTwo/>
			<ScreenThree data={arr}/>
			<Footer/>
        </>
     );
}
 
export default Pageone;