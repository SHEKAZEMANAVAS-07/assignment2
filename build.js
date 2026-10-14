// const place = [{city:"chennai", km: 100 },{city:"bangalore",km:450 },{city:"hyderabad", km: 550 },{city:"delhi", km: 2000 }];
// const passed = place.slice(1,3).filter((s) => s.km >= 500);
// console.log(passed);

const id = {name: "Venkat", dept: "CSE", marks: 100, city:"karaikudi", greet() {
     this.degree="B.E";
     this.college="SACE";
    
}}
id.greet();




// const user = {title: "Developer", team: "AI", experience: 5, location: "Chennai", 
//     intro:function() { return "Hello, I'm " + this.title + " from the " + this.team + " team."; } };
// console.log(user.intro());