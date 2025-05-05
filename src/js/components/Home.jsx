import React from "react";
import { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./SecondsCounter";

var seconds =0;
const Home = () => {
	seconds++
	return (
		<div className="text-center">
           <SecondsCounter seconds={seconds}/>
		</div>
	);
};

export default Home;