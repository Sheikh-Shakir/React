import { Link } from 'react-router-dom';
import classes from './Products.module.css';
import React from "react";
const Products = () => {
	return <>
		<section className={classes.list}>
			<h1>The Products Page</h1>
			<ul>
				<li><Link to='/products/p1'>A Book</Link></li>
				<li><Link to='/products/p2'>A Carpet</Link></li>
				<li><Link to='/products/p3'>Online Course</Link></li>
			</ul>
		</section>
	</>
}
export default Products;