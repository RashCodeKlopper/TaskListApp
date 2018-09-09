/**
 * 
 */
package com.rashied.tasklistapp.repositories.impl;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import javax.persistence.Query;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.rashied.tasklistapp.models.Task;
import com.rashied.tasklistapp.repositories.TaskRepositoryCustom;

/**
 * @author rashied
 *
 */
@Repository
public class TaskRepositoryCustomImpl implements TaskRepositoryCustom {
	
	@PersistenceContext
    EntityManager entityManager;
	
	/* (non-Javadoc)
	 * @see com.rashied.tasklistapp.repositories.TaskRepositoryCustom#completeTask(com.rashied.tasklistapp.models.Task)
	 */
	@Override
	@Modifying
	@Transactional
	public void completeTask(Task task) {

		String taskStatus = task.getStatus();
		Long taskId = task.getId();
		
		Query query = entityManager.createNativeQuery("UPDATE task t set t.status = ? WHERE t.id = ?", Task.class);
		query.setParameter(1, taskStatus);
		query.setParameter(2, taskId);
		
		entityManager.joinTransaction();
		
		query.executeUpdate();
		
	}

}
