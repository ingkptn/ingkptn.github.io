

fetch('project2.json')
    .then(response => response.json())
    .then(data => {
        const grid = document.getElementById('grid-container');

        data.forEach(item => {
            const div = document.createElement('div');
            const p = document.createElement('p');
            const img = document.createElement('img');
            

            p.textContent = item.Date + ' ' + item.Time;
            img.src = "assets/img/" + item.Photo + ".jpg";
            
            
                div.appendChild(img);
                div.appendChild(p);
                grid.appendChild(div);

            
            div.classList.add("container");
        });
        
        
    })
