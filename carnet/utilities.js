function loadFormLocalStorage(name) 
{
	var jsonData= window.localStorage.getItem(name);
	return JSON.parse(jsonData);
}

function savetoLocalStorage (data,name) 
{
	var jsonData=JSON.stringify(data);
	localStorage.setItem(name,jsonData);
}

