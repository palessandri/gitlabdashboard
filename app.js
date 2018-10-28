var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
    $http.get("https://gitlab.com/api/v4/projects?private_token=HzWWzeHrizRfsyNLGkCo&visibility=private&per_page=5")
    .then(function(projectsResponse) {
        
		var filteredProjects = [];
		var filteredIssues = [];
		$scope.ii = 0;
		
		allProjects = projectsResponse.data;
		
		for(i=0;i<allProjects.length;i++){
			var project = {};	
			var projectID = allProjects[i]["id"];
			/*$http.get("https://gitlab.com/api/v4/projects/" + projectID + "/issues?private_token=HzWWzeHrizRfsyNLGkCo")
			.then(function(issuesResponse) {
				$scope.ii++;
				filteredIssues = [];
				allIssues = issuesResponse.data;
				for(j=0;j<allIssues.length;j++){
					var issue = {};
					issue["id"] = allIssues[j]["id"];
					issue["title"] = allIssues[j]["title"];
					issue["state"] = allIssues[j]["state"];
					filteredIssues.push(issue);
				}
				
			});*/

			project["id"] = allProjects[i]["id"];
			project["name"] = allProjects[i]["name"];
			project["description"] = allProjects[i]["description"];
			project["issues"] = $scope.id;//filteredIssues;
			project["pdp_count"] = 55;
			project["pdp_level"] = 'low';
			project["noestimation_count"] = 55;
			project["noestimation_level"] = 'medium';
			project["noduration_count"] = 55;
			project["noduration_level"] = 'high';
			project["nodefinition_count"] = 55;
			project["nodefinition_level"] = 'medium';
			filteredProjects.push(project);
			
		}

		console.log(filteredProjects);
		$scope.filteredProjects = filteredProjects;
    });
});