// JSON data

fetch('project2.json')
    .then(response => response.json())
    .then(data => {
        const grid = document.getElementById('grid-container');

        data.forEach(item => {
            const div = document.createElement('div');
            const textdiv = document.createElement('div');
            const date = document.createElement('p');
            const time = document.createElement('p');
            const videoinfo = document.createElement('div');
            const video = document.createElement('video');
            const vid = document.createElement('p');
            const img = document.createElement('img');
            const overlay = document.createElement('img');
            const info = document.createElement('div');
            const observation = document.createElement('p');
            const invasion = document.createElement('p');
            const coordinates = document.createElement('p');
            
            date.textContent = item.Date;
            time.textContent = item.Time;
            vid.textContent = item.VideoLength;
            img.src = "assets/images/" + item.Photo + ".jpg";
            video.src = "assets/videos/" + item.Video + ".mp4";
            overlay.src = "assets/background1.png";
            observation.textContent = "Notes: " + item.Observations;
            invasion.textContent = "Invasion Level: " + item.Invasionlevel;
            coordinates.textContent = item.Coordinates;
            

                textdiv.appendChild(date);
                textdiv.appendChild(time);
                videoinfo.appendChild(vid);
                div.appendChild(img);
                div.appendChild(textdiv);
                div.appendChild(video);
                div.appendChild(videoinfo);
                div.appendChild(overlay);
                grid.appendChild(div);
                info.appendChild(observation);
                info.appendChild(invasion);
                info.appendChild(observation);
                info.appendChild(coordinates);

            div.classList.add("container");
            overlay.classList.add("overlay");
            textdiv.classList.add("textdiv");
            videoinfo.classList.add("videodiv");
            video.classList.add("video");
            info.classList.add("info");

            video

            if (item.Video == "") {
                                img.style.opacity = "1";
                                overlay.style.opacity = "0.1";
                                video.style.display = "none";
                                
                            } else {
                                img.style.display = "none";
                                overlay.style.opacity = "0.2";
                            }

            video.muted = true;

            function displayinfo(){
                div.appendChild(info);
            }

            div.addEventListener('click', displayinfo)

            function closeinfo(){
                div.removeChild(info);
            }

            div.addEventListener('dblclick', closeinfo)
            
    

            



    // FILTER SYSTEM

    function filterinvasion(){
        div.style.opacity="1";
    invasionfilter.style.display = "flex";
    invasionbutton.style.backgroundColor = "#50C878";
    invasionbutton.style.color = "black";
    mediabutton.style.backgroundColor = "black";
    mediabutton.style.color = "#50C878";
    mediafilter.style.display = "none";
    videogrid.style.display = "none";
    div.removeChild(info);
    
    }       

    invasionbutton.addEventListener('click',filterinvasion)
           
    function filtermedia(){
        div.style.display ="inline-block";
        mediabutton.style.backgroundColor = "#50C878";
        mediabutton.style.color = "black";
        invasionbutton.style.backgroundColor = "black";
        invasionbutton.style.color = "#50C878";
        mediafilter.style.display = "flex";
        invasionfilter.style.display = "none";
        videogrid.style.display = "none";
        div.removeChild(info);
        }       
    
        mediabutton.addEventListener('click',filtermedia)
          
        

    // FILTER BY MEDIA
    filterimage.addEventListener("click",() => {
        filterimage.style.backgroundColor= "#50C878";
        filterimage.style.color= "black";
        filtervideo.style.backgroundColor= "black";
        filtervideo.style.color= "#50C878";
        filterinfo.style.backgroundColor= "black";
        filterinfo.style.color= "#50C878";
        if (item.Video == ""){
            div.style.opacity = "1";
            
        }
        else {
            div.style.opacity = "0"
        }
        div.removeChild(info);
    })

    filtervideo.addEventListener("click",() => {
        filtervideo.style.backgroundColor= "#50C878";
        filtervideo.style.color= "black";
        filterimage.style.backgroundColor= "black";
        filterimage.style.color= "#50C878";
        filterinfo.style.backgroundColor= "black";
        filterinfo.style.color= "#50C878";
        if (item.Video == ""){
            div.style.opacity = "0";
        }
        else {
            div.style.opacity = "1";
        }
        div.removeChild(info);
        
    })

    filterinfo.addEventListener("click",() => {
        filterinfo.style.backgroundColor= "#50C878";
        filterinfo.style.color= "black";
        filterimage.style.backgroundColor= "black";
        filterimage.style.color= "#50C878";
        filtervideo.style.backgroundColor= "black";
        filtervideo.style.color= "#50C878";
        div.style.opacity = "1";
        div.appendChild(info);
        
    })

    // FILTER BY INVASION LEVEL
    

    filter1.addEventListener("click",() => {
                if (item.Invasionlevel == "1") {
                    // div.style.opacity = "1";
                    div.style.display = "inline-block";
                } else {
                    // div.style.opacity = "0";
                    div.style.display = "none";
                    videogrid.style.display = "none";
                }
                div.removeChild(info);
    });

    filter2.addEventListener("click",() => {
        if (item.Invasionlevel == "2") {
            // div.style.opacity = "1";
            div.style.display = "inline-block";
        } else {
            // div.style.opacity = "0";
            div.style.display = "none";
            videogrid.style.display = "none";
        }    
        div.removeChild(info);
    });

    filter3.addEventListener("click",() => {
        if (item.Invasionlevel == "3") {
            // div.style.opacity = "1";
            div.style.display = "inline-block";
        } else {
            // div.style.opacity = "0";
            div.style.display = "none";
            videogrid.style.display = "none";
        }
        div.removeChild(info);
    });

    filter4.addEventListener("click",() => {
        if (item.Invasionlevel == "4") {
            div.style.display = "inline-block";
            // div.style.opacity = "1";
        } else {
            // div.style.opacity = "0";
            div.style.display = "none";
            videogrid.style.display = "none";
        }
        div.removeChild(info);
    });

    filter5.addEventListener("click",() => {
        if (item.Invasionlevel == "5") {
            // div.style.opacity = "1";
            div.style.display = "inline-block";
        } else {
            // div.style.opacity = "0";
            div.style.display = "none";
            videogrid.style.display = "none";
        }
        div.removeChild(info);
    });

    filter6.addEventListener("click",() => {
        if (item.Invasionlevel == "6") {
            // div.style.opacity = "1";
            div.style.display = "inline-block";
        } else {
            // div.style.opacity = "0";
            div.style.display = "none";
            videogrid.style.display = "none";
        }
        div.removeChild(info);
    });


    filter7.addEventListener("click",() => {
        if (item.Invasionlevel == "7") {
            // div.style.opacity = "1";
            div.style.display = "inline-block";
        } else {
            // div.style.opacity = "0";
            div.style.display = "none";
            videogrid.style.display = "none";
        }
        div.removeChild(info);
    });


    filter8.addEventListener("click",() => {
        if (item.Invasionlevel == "8") {
            // div.style.opacity = "1";
            div.style.display = "inline-block";
        } else {
            // div.style.opacity = "0";
            div.style.display = "none";
            videogrid.style.display = "none";
        }
        div.removeChild(info);
    });

    filter9.addEventListener("click",() => {
        if (item.Invasionlevel == "9") {
            // div.style.opacity = "1";
            div.style.display = "inline-block";
        } else {
            // div.style.opacity = "0";
            div.style.display = "none";
            videogrid.style.display = "none";
        }
        div.removeChild(info);
    });

    filter10.addEventListener("click",() => {
        if (item.Invasionlevel == "10") {
            div.style.opacity = "1";
        } else {
            // div.style.opacity = "0";
            div.style.display = "none";
            videogrid.style.display = "grid";
        }
    });


    // instructions.addEventListener('click', showinstruction)

    // function showinstruction(){
    //     instructions.textContent = "Hover to play videos. Click to display information, double click to close";
    // }


    // RESET FILTERS
   

    reset.addEventListener("click",() => {
            div.style.opacity= "1";
            div.style.display= "inline-block";
            videogrid.style.display = "none";
            filtervideo.style.backgroundColor= "black";
            filtervideo.style.color= "#50C878";
            filterimage.style.backgroundColor= "black";
            filterimage.style.color= "#50C878";
            filterinfo.style.backgroundColor= "black";
            filterinfo.style.color= "#50C878";
            div.removeChild(info);
            
            // invasionfilter.style.display = "none";
            // filter.style.display = "none";
    })


    // VIDEO PLAY ON HOVER

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






// NAVIGATION BUTTONS

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
       cancelButton.addEventListener("click", scrollup);



    

    //    WARNING WINDOW POPUP


       let gridcontainer = document.getElementById('grid-container');
       let filter = document.getElementById('filter-system');

       function proceed(){
        warningButtons.style.display = "none";
        loading.style.display = "block";
        warningWindow.style.animationPlayState = "running";
        gridcontainer.style.animationPlayState = "running";
        filter.style.animationPlayState = "running";
        warning.textContent = "Proceeding...";
       }


       proceedButton.addEventListener("click", proceed);




    // WEBCAMS
        var video1 = document.querySelector("#videoElement1");
        var video2 = document.querySelector("#videoElement2");
        var video3 = document.querySelector("#videoElement3");
        var video4 = document.querySelector("#videoElement4");
        var video5 = document.querySelector("#videoElement5");
        var video6 = document.querySelector("#videoElement6");
        var video7 = document.querySelector("#videoElement7");
        var video8 = document.querySelector("#videoElement8");
        var video9 = document.querySelector("#videoElement9");
        var video10 = document.querySelector("#videoElement10");
        var video11 = document.querySelector("#videoElement11");
        var video12 = document.querySelector("#videoElement12");

    if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true })
    .then(function (stream) {
    video1.srcObject = stream;
    video2.srcObject = stream;
    video3.srcObject = stream;
    video4.srcObject = stream;
    video5.srcObject = stream;
    video6.srcObject = stream;
    video7.srcObject = stream;
    video8.srcObject = stream;
    video9.srcObject = stream;
    video10.srcObject = stream;
    video11.srcObject = stream;
    video12.srcObject = stream;
    })

    .catch(function (err0r) {
    console.log("Something went wrong!");
    });
    }








   