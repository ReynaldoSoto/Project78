var names =["Reynaldo Soto",
"Reylynn Soto",
"Ricardo Soto",
"Jennifer Lucio"       
]
var images =["Screenshot_20190518-094007_WhatsApp.jpg",
            "20200904_161131.jpg",
            "20200627_093011.jpg",
            "20200227_124845.jpg",
] 
var i=0;
function nextslide()
 {
   document.getElementById("next_name").innerHTML= names[i];
        document.getElementById("album").innerHTML= images[i];                                                                 
        i++;
}

