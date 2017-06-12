package restJersey.service;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import restJersey.bean.Grade;

//@Produces("application/json")
@Path("/gradeService")
public interface IGradeService {
	@GET
	@Path("/getAllGrade")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Grade> getAllGrade();
	
	@GET
	@Path("/getGradeBySno/{sno}")
	@Produces(MediaType.APPLICATION_JSON)
	public Grade getGradeBySno(@PathParam("sno") String sno);
	
	@GET
	@Path("/getGradeBySnoQuery")
	@Produces(MediaType.APPLICATION_JSON)
	public Grade getGradeBySnoQuery(@QueryParam("sno") String sno);
	
}
