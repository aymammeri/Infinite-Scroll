// Unsplash API
const count = 10;
const apiKey = 'a4MmsZ3MWen7GjhmSB6LliOwUTVnu1WhvxDRsRyPY7I';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        alert(error);
    }
        
    
}

// On load
getPhotos();