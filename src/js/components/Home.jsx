import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

const [encendido, setEncendido] = useState("")

	return (
		
		<div className="semaforo row colum ">
			<div className={`red ${encendido == "red" ? "light" : ""}`} onClick={()=> setEncendido("red")} >
			</div>
			<div className={`yellow ${encendido == "yellow" ? "light" : ""}`} onClick={()=> setEncendido("yellow")} >
			</div>
			<div className={`green ${encendido == "green" ? "light" : ""}`} onClick={()=> setEncendido("green")} >
			</div>
		</div>
	);
};

export default Home;