
const API = "https://youtube-v31.p.rapidapi.com/playlistItems?playlistId=RDZiQo7nAkQHU&part=snippet&maxResults=50"

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1258fd4b9dmshc776912c142866cp195ab9jsn23c58adb6927',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data
}

