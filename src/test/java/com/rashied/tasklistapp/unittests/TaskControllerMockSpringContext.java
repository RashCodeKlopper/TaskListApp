/**
 * 
 */
package com.rashied.tasklistapp.unittests;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;

import com.rashied.tasklistapp.controllers.TaskController;
import com.rashied.tasklistapp.services.TaskService;

/**
 * @author rashied
 *
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class TaskControllerMockSpringContext {

    @MockBean
    TaskService taskServiceMock;
    
    @Autowired
    TaskController taskControllerImpl;
   
    
    
    
}
