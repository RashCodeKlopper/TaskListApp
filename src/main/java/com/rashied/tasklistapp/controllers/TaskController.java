/**
 * 
 */
package com.rashied.tasklistapp.controllers;

import java.util.List;
import java.util.Optional;

import org.json.JSONException;
import org.json.JSONObject;
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

import com.rashied.tasklistapp.enums.TaskStatus;
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
    public List<Task> getAllTasks() {
    	
    	System.out.println("Getting all Tasks...");
    	
    	List<Task> taskList = taskService.findAllTasks();
    	
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
    	
    	// Every new task contains status 'TODO'
    	task.setStatus(TaskStatus.TODO.toString());
    	
    	taskService.saveTask(task);
    	
    	return task;
    }
    
	@PutMapping("/tasks/{id}")
	public ResponseEntity<Task> updateTask(@PathVariable("id") long id, @RequestBody Task task) {
		
		System.out.println("Update Task with ID = " + id + "...");
 
		Optional<Task> taskData = taskService.getTaskById(id);
 
		if (taskData.isPresent()) {
			Task _task = taskData.get();
			_task.setDescription(task.getDescription());
			_task.setStatus(task.getStatus());
			
			return new ResponseEntity<>(taskService.updateTask(_task), HttpStatus.OK);
			
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
    
	@PutMapping("/tasks/complete/{id}")
	public void completeTask(@PathVariable("id") long id, @RequestBody Task task) {
		
		System.out.println("Complete Task with ID = " + id + "...");
 
		Optional<Task> taskData = taskService.getTaskById(id);
 
		if (taskData.isPresent()) {
			
			Task _task = taskData.get();
			_task.setDescription(task.getDescription());
			_task.setStatus(TaskStatus.DONE.toString());
			
			taskService.completeTask(_task);
			
			System.out.println("Completing task response: " + HttpStatus.OK);
			
		} else {
			System.out.println("Completing task response: " + HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping("/tasks/{id}")
	public ResponseEntity<JSONObject> deleteTask(@PathVariable("id") long id) {
		
		System.out.println("Delete Task with ID = " + id + "...");
 
		taskService.deleteTaskById(id);
 
		JSONObject jsonObj = new JSONObject();
		
		try {
			
			jsonObj.put("message", "Task has been deleted!");
			
		} catch (JSONException e) {
			e.printStackTrace();
		}
 
		return new ResponseEntity<JSONObject>(jsonObj, HttpStatus.OK);
	}    

	@DeleteMapping("/tasks/delete")
	public ResponseEntity<JSONObject> deleteAllTasks() {
		
		System.out.println("Deleting All Tasks...");
 
		taskService.deleteAllTasks();
		
		JSONObject jsonObj = new JSONObject();
		
		try {
			
			jsonObj.put("message", "All Tasks have been deleted!");
			
		} catch (JSONException e) {
			e.printStackTrace();
		}
		
		return new ResponseEntity<JSONObject>(jsonObj, HttpStatus.OK);
	}
    
}
