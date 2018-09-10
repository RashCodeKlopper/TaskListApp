/**
 * 
 */
package com.rashied.tasklistapp.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rashied.tasklistapp.models.Task;

/**
 * @author mabdoelkariem
 *
 */
@Repository
public interface TaskRepository extends CrudRepository<Task, Long>, TaskRepositoryCustom {

	
}
