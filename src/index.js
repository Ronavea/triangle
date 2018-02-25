/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
 
  let count = 0;	
 
  for (let i = 0; i < preferences.length; i++)
	{
		let j,a,b,c;
		j = i; 	
		a = j = preferences[j]-1; 
		b = j = preferences[j]-1;
		c = j = preferences[j]-1;	
		if ((i == j) && (a != b) && (a != c))	
			{count++;};
		preferences[i] = 0; 
	}
	
	return count; 
};
