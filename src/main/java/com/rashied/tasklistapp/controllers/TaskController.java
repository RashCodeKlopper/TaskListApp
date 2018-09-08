/**
 * 
 */
package com.rashied.tasklistapp.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.rashied.tasklistapp.models.Task;
import com.rashied.tasklistapp.services.TaskService;


/**
 * @author rashied
 *
 */
@RestController
public class TaskController {

	@Autowired
    private TaskService taskService;

    @RequestMapping(method=RequestMethod.GET, value="/tasks")
    //public Iterable<Task> getAllTasks() {
    public List<Task> getAllTasks() {
    	
    	System.out.println("Getting all Tasks...");
    	
    	List<Task> taskList = new ArrayList<>();
    	taskService.findAllTasks().forEach(taskList::add);
    	
        return taskList;
    }

    @RequestMapping(method=RequestMethod.GET, value="/tasks/{id}")
    public Task findTaskById(@PathVariable long id) {
    	
    	System.out.println("Searching for  Task with ID = " + id + "...");
    	
        Optional<Task> foundTask = taskService.getTaskById(id);
        
        return foundTask.get();
    }
    
    @RequestMapping(method=RequestMethod.POST, value="/tasks/add")
    public Task addTask(@RequestBody Task task) {
    	
    	System.out.println("Adding Task...");
    	
    	taskService.saveTask(task);
    	
    	return task;
    }

//    @RequestMapping(method=RequestMethod.PUT, value="/tasks/{id}")
//    public Task updateTask(@PathVariable long id, @RequestBody Task task) {
//    	
//    	System.out.println("Update Task with ID = " + id + "...");
//    	
//    	taskService.updateTask(task);
//    	
//        return task;
//    }
    
	@PutMapping("/tasks/{id}")
	public ResponseEntity<Task> updateTask(@PathVariable("id") long id, @RequestBody Task task) {
		
		System.out.println("Update Task with ID = " + id + "...");
 
		Optional<Task> taskData = taskService.getTaskById(id);
 
		if (taskData.isPresent()) {
			Task _task = taskData.get();
			_task.setTitle(task.getTitle());
			_task.setDescription(task.getDescription());
			_task.setStatus(task.getStatus());
			return new ResponseEntity<>(taskService.updateTask(_task), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
    
	@DeleteMapping("/tasks/{id}")
	public ResponseEntity<String> deleteTask(@PathVariable("id") long id) {
		
		System.out.println("Delete Task with ID = " + id + "...");
 
		taskService.deleteTaskById(id);
 
		return new ResponseEntity<>("Task has been deleted!", HttpStatus.OK);
	}    
    
//    //@RequestMapping(method=RequestMethod.DELETE, value="/contacts/{id}")
//    	public void deleteAllTasks(@PathVariable String id) {
//        contactService.deleteContact(id);
//    }

	@DeleteMapping("/tasks/delete")
	public ResponseEntity<String> deleteAllTasks() {
		
		System.out.println("Deleting All Tasks...");
 
		taskService.deleteAllTasks();
		
		return new ResponseEntity<>("All Tasks have been deleted!", HttpStatus.OK);
	}
    
}