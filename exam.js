//[id , brand , model , type , pricePerDay, available]
carBooking =[
        [1,'Toyota', 'Corolla' , 'Sedan' ,50 ,10],
        [2,'Honda', 'Civic' , 'Sedan' ,55 ,8],
        [3,'Ford', 'Mustang' , 'Sports Car' ,80 ,5],
        [4,'Jeep', 'Wrangler' , 'SUV' ,70 ,7],
        [5,'Nissan', 'Altima' , 'Sedan' ,45 ,12]
];
//1)print all car brands
carBooking.forEach(car=>{
    console.log(car[1]);
})
console.log('------------------------------');
//2)print total number of cars available
p=carBooking.map(av=>av[5]).reduce((a,b)=>a+b)
console.log(p);
console.log('------------------------------');
//3)print sedan car details
q=carBooking.filter(data=>data[3]=='Sedan')
console.log(q);
console.log('------------------------------');

//4)print cars with price per day >60
s=carBooking.filter(data=>data[4]>60).forEach(car=>console.log(car[1]))
console.log('------------------------------');

//5)print details of jeep wrangler
c=carBooking.filter(data=>data[1]=='Jeep')
console.log(c);
console.log('------------------------------');

//6)sort cars based on the descending order of the price per day
carBooking.sort((a,b)=>b[4]-a[4])
console.log(carBooking);
console.log('------------------------------');

//7)sort cars based on the ascending order of available cars 
carBooking.sort((a,b)=>a[5]-b[5])
console.log(carBooking);
console.log('------------------------------');

//8)find the car with the most available among cars
car=carBooking.sort((x,y)=>y[5]-x[5])
console.log(car[0][1])
console.log('------------------------------');

//9)calculate the revenue if all the cars are rented for a day
r=carBooking.map(data=>data[4]).reduce((a,b)=>a+b)
console.log(r);
console.log('------------------------------');

//10)count the number of sedan cars
r=carBooking.map(data=>data[3]=='Sedan').reduce((a,b)=>a+b)
console.log(r);
console.log('------------------------------');
//11)print all car barnds
carBooking.forEach(car=>{
    console.log(car[1]);
})
console.log('------------------------------');
//12)find the total number of available cars at all time
r=carBooking.map(data=>data[5]).reduce((a,b)=>a+b)
console.log(r);
console.log('------------------------------');
//13)find the cars with least availability
car=carBooking.sort((x,y)=>x[5]-y[5])
console.log(car[0][1])
console.log('------------------------------');
//14)check if there is any car with a price per day of exactly 55
s=carBooking.some(data=>data[4]==55)
console.log(s?'yes':'no');
