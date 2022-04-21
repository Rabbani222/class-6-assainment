


const students_list =[
    [ 'Fahim','1','15','7','Male','Patuakhali','8000' ],
    [ 'Fatema','2','25','8','Female','Dhaka','5000' ],
    [ 'Titu','3','12','5','Male','Kuakata','3000' ],
    [ 'Safa','4','15','4','Female','Mirpur','2000' ],
    [ 'Bahaddin','5','35','3','Male','Madaripur','5000' ],
    [ 'Kabir','6','45','6','Male','Bhola','6000' ],
    [ 'Anika','7','45','9','Female','Kolapara','1500' ],
    [ 'Piyash','8','10','8','Male','Uttora','1800' ],
    [ 'Sowrov','9','5','6','Male','Badda','2500' ],
    [ 'Hasan','10','6','5','Male','Amtoli','3500' ],
    [ 'Priya','11','9','3','Female','Lebukhali','4500' ],
    [ 'Hosen','12','12','4','Male','Patuakhali','5700' ],
    [ 'Piyal','13','14','9','Male','Patuakhali','3700' ],
    [ 'Busra','14','18','2','Female','Dumki','4700' ],
    [ 'Kabila','15','17','6','Male','Patuakhali','6700' ],
    [ 'Mithu','16','19','5','Male','Dhaka','7500' ],
    [ 'Maya','17','20','7','Female','Mirpur','9200' ],
    [ 'Nahid','18','23','4','Male','Patuakhali','8300' ],
    [ 'Sufia','19','26','3','Female','Kolapara','10000' ],
    [ 'Sumon','20','32','5','Male','Amtoli','11000' ],
    [ 'Uttom','21','33','10','Male','Patuakhali','12000' ],
    [ 'Korim','22','38','8','Male','Golacipa','13000' ],
    [ 'Sakil','23','39','10','Male','Amkhola','13500' ],
    [ 'Aysha','24','36','8','Female','Badura','14500' ],
    [ 'Fardin','25','7','4','Male','Golacipa','5500' ],
    [ 'Kalam','26','8','7','Male','Patuakhali','3300' ],
    [ 'Jamila','27','18','5','Female','Zhalokathi','2500' ],
    [ 'Mamun','28','20','6','Male','Patuakhali','1200' ],
    [ 'Debassis','29','19','9','Male','Dumki','9300' ],
    [ 'Kamila','30','20','10','Female','Zhalokathi','10000' ],
];



students_list.sort().forEach( (data,index) => {
        console.log(` 
            Id           :${index +1}

            Name        : ${data[0]}
            Roll        : ${data[1]}
            Age         : ${data[2]}
            Class       : ${data[3]}
            Gender      : ${data[4]}
            Location    : ${data[5]}
            Ad.Fees     : ${data[6]}

        
        `);
    
});




                                                                                                            // Total Admnission fees 




// let total_amount = 0;
// students_list.forEach( (data,index) => {

//         console.log(` Name : ${data[0]} - Admission Fees : ${data[6]} `);
//      total_amount += +data[6]
// });

// console.log(` 
// ============================================>
// Total Amount : ${total_amount} Taka.


// `);





                                                                                                        // Find All Female Students



// students_list.sort().forEach( (data,index) => {
//     if(data[4] === 'Female'){
//         console.log(` 
//             Id           :${index +1}

//             Name        :${data[0]}
//             Roll        : ${data[1]}
//             Age         : ${data[2]}
//             Class       :${data[3]}
//             Gender      :${data[4]}
//             Location    : ${data[5]}
//             Ad.Fees     :${data[6]}

        
//         `);
//     }
// });


                                                                                            // Find class wise student result



// students_list.sort().forEach( (data,index) => {
//     if(data[3] === '3' || data[3] === '4' || data[3] === '5'){
//             console.log(` 
//             Id          : ${index + 1}

//             Name        : ${data[0]}
//             Class       : ${data[3]}
//         `);
    
//     }
   
    
// });




                                                                                        // Location wise student result



// students_list.forEach( (data,index) => {
//         console.log(` 
//             Id          : ${index + 1}
//             Name        : ${data[0]}
//             Location    : ${data[5]}
//         `);
    
// });






                                                                            // find student between 10 - 25 age 


// students_list.sort().forEach( (data,index) => {
//     if(data[2] >= 10 && data[2] <= 25){
//             console.log(` 
//             Id          : ${index + 1}

//             Name        : ${data[0]}
//             Age         : ${data[2]}
//         `);
    
//     }
   
    
// });


