package com.rashied.tasklistapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.rashied.tasklistapp.models.Task;

public interface TaskRepository extends CrudRepository<Task, Long> {

	//@Override
	//Optional<Task> findById(Long id);
	
}
