window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

        function scrolldown(){
            document.body.style.overflowY = 'scroll';
            document.body.style.overflowX = 'hidden';
            window.scrollTo({top: 1200, behavior: 'smooth'})
        }

        test.addEventListener("click", scrolldown);

        function scrollright(){
            document.body.style.overflowX = 'scroll';
            document.body.style.overflowY = 'hidden';
            window.scrollTo({left: 2000, behavior: 'smooth'})
        }

       aboutbutton.addEventListener("click", scrollright);

       function scrollback(){
            document.body.style.overflowX = 'scroll';
            document.body.style.overflowY = 'hidden';
            window.scrollTo({left: 0, behavior: 'smooth'})
        }

       homebutton.addEventListener("click", scrollback);

       function scrollup(){
            document.body.style.overflowY = 'scroll';
            document.body.style.overflowX = 'hidden';
            window.scrollTo({top: 0, behavior: 'smooth'})
        }

       returnbutton.addEventListener("click", scrollup);

       
   
        var video1 = document.querySelector("#videoElement1");
        var video2 = document.querySelector("#videoElement2");
        var video3 = document.querySelector("#videoElement3");
        var video4 = document.querySelector("#videoElement4");
        var video5 = document.querySelector("#videoElement5");
        var video6 = document.querySelector("#videoElement6");

    if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
    video1.srcObject = stream;
    video2.srcObject = stream;
    video3.srcObject = stream;
    video4.srcObject = stream;
    video5.srcObject = stream;
    video6.srcObject = stream;
    })

    .catch(function (err0r) {
    console.log("Something went wrong!");
    });
    }

fetch('project2.json')
    .then(response => response.json())
    .then(data => {
        const grid = document.getElementById('grid-container');

        data.forEach(item => {
            const div = document.createElement('div');
            const textdiv = document.createElement('div');
            const date = document.createElement('p');
            const time = document.createElement('p');
            const videodiv = document.createElement('div');
            const video = document.createElement('video');
            const vid = document.createElement('p');
            const img = document.createElement('img');
            const overlay = document.createElement('img');
            const largescreen = document.createElement('img');
            
            date.textContent = item.Date;
            time.textContent = item.Time;
            vid.textContent = item.VideoLength;
            img.src = "assets/images/" + item.Photo + ".jpg";
            video.src = "assets/videos/" + item.Video + ".mp4";
            overlay.src = "assets/background1.png";
            largescreen.src = "assets/img/" + item.Photo + ".jpg";
            

                textdiv.appendChild(date);
                textdiv.appendChild(time);
                videodiv.appendChild(vid);
                div.appendChild(img);
                div.appendChild(textdiv);
                div.appendChild(video);
                div.appendChild(videodiv);
                div.appendChild(overlay);
                grid.appendChild(div);

            div.classList.add("container");
            overlay.classList.add("overlay");
            textdiv.classList.add("textdiv");
            videodiv.classList.add("videodiv");
            video.classList.add("video");

            if (item.Video == "") {
                                img.style.opacity = "1";
                                overlay.style.opacity = "0.1";
                                video.style.display = "none"
                                
                            } else {
                                img.style.display = "none";
                                overlay.style.opacity = "0.2";
                            }

            
            
                              

            

            filter1.addEventListener("click",() => {
                if (item.Invasionlevel == "1") {
                    div.style.opacity = "1";
                } else {
                    div.style.opacity = "0";
                    videogrid.style.display = "none";
                }
        });

    filter2.addEventListener("click",() => {
        if (item.Invasionlevel == "2") {
            div.style.opacity = "1";
        } else {
            div.style.opacity = "0";
            videogrid.style.display = "none";
        }    
});

    filter3.addEventListener("click",() => {
        if (item.Invasionlevel == "3") {
            div.style.opacity = "1";
        } else {
            div.style.opacity = "0";
            videogrid.style.display = "none";
        }
    });

    filter4.addEventListener("click",() => {
        if (item.Invasionlevel == "4") {
            div.style.opacity = "1";
        } else {
            div.style.opacity = "0";
            videogrid.style.display = "none";
        }
    });

    filter5.addEventListener("click",() => {
        if (item.Invasionlevel == "5") {
            div.style.opacity = "1";
        } else {
            div.style.opacity = "0";
            videogrid.style.display = "none";
        }
    });

    filter6.addEventListener("click",() => {
        if (item.Invasionlevel == "6") {
            div.style.opacity = "1";
        } else {
            div.style.opacity = "0";
            videogrid.style.display = "none";
        }
    });


    filter7.addEventListener("click",() => {
        if (item.Invasionlevel == "7") {
            div.style.opacity = "1";
        } else {
            div.style.opacity = "0";
            videogrid.style.display = "none";
        }
    });


    filter8.addEventListener("click",() => {
        if (item.Invasionlevel == "8") {
            div.style.opacity = "1";
        } else {
            div.style.opacity = "0";
            videogrid.style.display = "none";
        }
    });

    filter9.addEventListener("click",() => {
        if (item.Invasionlevel == "9") {
            div.style.opacity = "1";
        } else {
            div.style.opacity = "0";
            videogrid.style.display = "none";
        }
    });

    filter10.addEventListener("click",() => {
        if (item.Invasionlevel == "10") {
            div.style.opacity = "1";
        } else {
            div.style.opacity = "0";
            videogrid.style.display = "grid";
        }
    });

    reset.addEventListener("click",() => {
        if (item.Invasionlevel > 0 ) {
            div.style.opacity = "1";
            videogrid.style.display = "none";
        }
    })


        div.addEventListener('mouseenter', () => {
            overlay.style.opacity = "0.05";
            video.play();
            });
                          
        div.addEventListener('mouseleave', () => {
            overlay.style.opacity = "0.15"
            video.pause();
            });


    })
    
    

    })


