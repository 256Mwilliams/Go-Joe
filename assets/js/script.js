var getUserRepos = function() {
	var response = fetch("http://api.aviationstack.com/v1/airlines?access_key=e24c534598f2825f58045c7c74198594&country_name=")
	console.log(response);
};
getUserRepos();