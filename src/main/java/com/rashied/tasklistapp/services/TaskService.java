/**
 * 
 */
package com.rashied.tasklistapp.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rashied.tasklistapp.models.Task;
import com.rashied.tasklistapp.repositories.TaskRepository;

/**
 * @author rashied
 *
 */
@Service
public class TaskService {

	@Autowired
    private TaskRepository taskRepository;

    public List<Task> findAllTasks() {
        
        Iterable<Task> tasksIterable = taskRepository.findAll();
        
    	// Convert Iterable to ArrayList
    	List<Task> taskList = new ArrayList<>();
    	
    	// Lambda expression
    	tasksIterable.forEach(item -> taskList.add(item));
    	
    	// Method reference
    	// taskRepository.findAll().forEach(taskList::add);
        
        return taskList;
    }

    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }

    public Task saveTask(Task task) {
        return taskRepository.save(task);
    }

    public Task updateTask(Task task) {
        return taskRepository.save(task);
    }
    
    public void completeTask(Task task) {
    	taskRepository.completeTask(task);
    }

    public void deleteTaskById(Long id) {
        Optional<Task> foundtask = taskRepository.findById(id);
        Task task = foundtask.get();
        taskRepository.delete(task);
    }
	
    public void deleteAllTasks() {
    	taskRepository.deleteAll();
    }
	
	
}
