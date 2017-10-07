function pluck (obj, result1) {
	for (let i = 0; i < obj.length; i++) {
        const result = obj[i].name;
        result1.push(result);
    }
}
