let a={
	name:"sathish",
	age:18,
	
	education:{
		department:"BCA",
		degree:"UG",
	},
	
	collegeplace:{
		place:"sivakasi",
	}
	
}

let{name,age,education,collegeplace}=a;
let{department,degree}=education;
let{place}=collegeplace;
console.log(name,age,department,degree,place);