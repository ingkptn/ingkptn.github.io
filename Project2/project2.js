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
            const vid = document.createElement('p');
            const img = document.createElement('img');
            const overlay = document.createElement('img');
            
            
            date.textContent = item.Date;
            time.textContent = item.Time;
            vid.textContent = item.Video + " " + item.VideoLength;
            img.src = "assets/images/" + item.Photo + ".jpg";
            overlay.src = "assets/background1.png"

                textdiv.appendChild(date);
                textdiv.appendChild(time);
                videodiv.appendChild(vid);
                div.appendChild(img);
                div.appendChild(textdiv);
                div.appendChild(videodiv);
                div.appendChild(overlay);
                grid.appendChild(div);

            
            div.classList.add("container");
            overlay.classList.add("overlay");
            textdiv.classList.add("textdiv");
            videodiv.classList.add("videodiv");

            
        });
        
        
    })


 




