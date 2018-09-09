/**
 * 
 */
package com.rashied.tasklistapp.services;

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

    public Iterable<Task> findAllTasks() {
        Iterable<Task> tasks;
        tasks = taskRepository.findAll();
        return tasks;
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
