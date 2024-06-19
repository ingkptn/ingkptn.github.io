fetch('portfolio.json')
.then(response => response.json())
    .then(data => {
        const flex = document.getElementById('gridContainer');

        data.forEach(item => {
            const div = document.createElement('div');
            const img = document.createElement('img');
            const medium = document.createElement('p');
            const dimensions = document.createElement('p');
            const year = document.createElement('p');
            const description = document.createElement('p');

            img.src="portfolio/" + item.Photo + ".png";
            medium.textContent = item.Medium;
            dimensions.textContent = item.Dimensions;
            year.textContent = item.Year;
            description.textContent = item.Description;

            flex.appendChild(div);
            div.appendChild(img);
            div.appendChild(year);
            div.appendChild(medium);
            div.appendChild(dimensions);
            div.appendChild(description);
            
            div.classList.add("container");
            year.classList.add("year");

    })
})









// fetch('project2.json')
//     .then(response => response.json())
//     .then(data => {
//         const grid = document.getElementById('grid-container');

//         data.forEach(item => {
//             const div = document.createElement('div');
//             const textdiv = document.createElement('div');
//             const date = document.createElement('p');
//             const time = document.createElement('p');
//             const videoinfo = document.createElement('div');
//             const video = document.createElement('video');
//             const vid = document.createElement('p');
//             const img = document.createElement('img');
//             const overlay = document.createElement('img');
//             const info = document.createElement('div');
//             const observation = document.createElement('p');
//             const invasion = document.createElement('p');
//             const coordinates = document.createElement('p');
            
//             date.textContent = item.Date;
//             time.textContent = item.Time;
//             vid.textContent = item.VideoLength;
//             img.src = "assets/images/" + item.Photo + ".jpg";
//             video.src = "assets/videos/" + item.Video + ".mp4";
//             overlay.src = "assets/background1.png";
//             observation.textContent = "Notes: " + item.Observations;
//             invasion.textContent = "Invasion Level: " + item.Invasionlevel;
//             coordinates.textContent = item.Coordinates;
            

//                 textdiv.appendChild(date);
//                 textdiv.appendChild(time);
//                 videoinfo.appendChild(vid);
//                 div.appendChild(img);
//                 div.appendChild(textdiv);
//                 div.appendChild(video);
//                 div.appendChild(videoinfo);
//                 div.appendChild(overlay);
//                 grid.appendChild(div);
//                 info.appendChild(observation);
//                 info.appendChild(invasion);
//                 info.appendChild(observation);
//                 info.appendChild(coordinates);