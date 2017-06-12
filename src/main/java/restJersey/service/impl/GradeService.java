package restJersey.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import restJersey.bean.Grade;
import restJersey.dao.IGradeDao;
import restJersey.service.IGradeService;

@Service("gradeService")
public class GradeService implements IGradeService {
	@Autowired
	IGradeDao gradeDao;

	@Override
	public List<Grade> getAllGrade() {
		Grade grade = new Grade();
		gradeDao.getAllGrade(grade);
		return grade.getList();
	}

	@Override
	public Grade getGradeBySno(String sno) {
		Grade grade = new Grade();
		grade.setSno(sno);
		gradeDao.getAllGrade(grade);
		if(null != grade.getList())
			return grade.getList().get(0);
		return null;
	}

	@Override
	public Grade getGradeBySnoQuery(String sno) {
		Grade grade = new Grade();
		grade.setSno(sno);
		gradeDao.getAllGrade(grade);
		if(null != grade.getList())
			return grade.getList().get(0);
		return null;
	}

}
