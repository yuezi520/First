package restJersey.dao;

import java.util.List;

import restJersey.bean.Grade;

public interface IGradeDao {
	/**
	 * 获取所有学生成绩
	 * @return
	 */
	public List<Grade> getAllGrade(Grade grade);
}
