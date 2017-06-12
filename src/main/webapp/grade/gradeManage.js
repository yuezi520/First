$(function(){
	function getData(servicePath, params, datas, callback){
		var url = getRootPath()+"/services/gradeService/"+servicePath;
		if(params && params.length>0){
			for(var i = 0; i < params.length; i++){
				url += "/" + encodeURI(params[i]);
			}
		}
		$.ajax({
			url:url,
			dataType:"json",
			data:datas,
			success:function(result){
				eval(callback);
			}
		});
	}
	
	getData("getAllGrade", [], {}, "getAllGrade(result)");
	function getAllGrade(result){
		var htmltb = "";
		for(var i = 0; i < result.length; i++){
			var res = result[i];
			htmltb += "<tr>";
			htmltb += "<td>"+res.sno+"</td>" + "<td>"+res.sname+"</td>" + 
					  "<td>"+res.cname+"</td>" + "<td>"+res.score+"</td>";
			htmltb += "</tr>";
		}
		$("#gradeTb1 tbody").html(htmltb);
	}
	
	getData("getGradeBySno", ["1"], {}, "getGradeBySno(result)");
	function getGradeBySno(result){
		var htmltb = "";
		if(result){
			var res = result;
			htmltb += "<tr>";
			htmltb += "<td>"+res.sno+"</td>" + "<td>"+res.sname+"</td>" + 
					  "<td>"+res.cname+"</td>" + "<td>"+res.score+"</td>";
			htmltb += "</tr>";
		}
		$("#gradeTb2 tbody").html(htmltb);
	}
	
	getData("getGradeBySnoQuery", [], {sno:"2"}, "getGradeBySnoQuery(result)");
	function getGradeBySnoQuery(result){
		var htmltb = "";
		if(result){
			var res = result;
			htmltb += "<tr>";
			htmltb += "<td>"+res.sno+"</td>" + "<td>"+res.sname+"</td>" + 
					  "<td>"+res.cname+"</td>" + "<td>"+res.score+"</td>";
			htmltb += "</tr>";
		}
		$("#gradeTb3 tbody").html(htmltb);
	}
});