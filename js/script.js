/* Top Month Script */
/* Month Array */
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
/* Gets month and year */
const d = new Date();
var month = monthNames[d.getMonth()];
console.log([d.getMonth()]);
var year = d.getFullYear();
/* inputs the month and year value on top of page  */
document.getElementById("dateTop").innerHTML = (month + " " + year);
