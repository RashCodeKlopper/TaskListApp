/**
 * 
 */
package com.rashied.tasklistapp.unittests;

import static org.hamcrest.collection.IsCollectionWithSize.hasSize;
import static org.hamcrest.core.Is.is;
import static org.mockito.BDDMockito.given;
import static org.springframework.http.MediaType.APPLICATION_JSON;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.rashied.tasklistapp.controllers.TaskController;
import com.rashied.tasklistapp.enums.TaskStatus;
import com.rashied.tasklistapp.models.Task;
/**
 * @author rashied
 *
 */
@RunWith(SpringRunner.class)
@WebMvcTest(TaskController.class)
public class TaskControllerMockTest {

   @Autowired
   private MockMvc mockMvc;

   @MockBean
   private TaskController taskController;

   @Test
   public void getTasksTest() throws Exception {
	   
	   Task task = new Task();
	   task.setDescription("description 1");
	   task.setStatus(TaskStatus.TODO.toString());
	   
	   // Create an ArrayList containing 1 Task object
	   ArrayList<Task> allTasks = Stream
		        .of(task)
		        .collect(Collectors.toCollection(ArrayList::new));
	   
       given(taskController.getAllTasks()).willReturn(allTasks);

       mockMvc.perform(get("/tasks")
               .contentType(APPLICATION_JSON))
               .andExpect(status().isOk())
               .andExpect(jsonPath("$", hasSize(1)))
               .andExpect(jsonPath("$[0].description", is(task.getDescription())))
       		   .andExpect(jsonPath("$[0].status", is(task.getStatus())));
   }
   
}
