/**
 * 
 */
package com.rashied.tasklistapp.unittests;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace.NONE;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import com.rashied.tasklistapp.enums.TaskStatus;
import com.rashied.tasklistapp.models.Task;
import com.rashied.tasklistapp.repositories.TaskRepository;

/**
 * @author rashied
 *
 */
@ActiveProfiles("test")
@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace = NONE)
public class TaskRepositoryTest {
	
	@Autowired
	private TestEntityManager entityManager;

	@Autowired
	private TaskRepository taskRepository;

	@Test
	public void findAllTest() {

		// given
		Task firstTask = new Task();
		firstTask.setDescription("descr 1");
		firstTask.setStatus(TaskStatus.TODO.toString());
		entityManager.persist(firstTask);
		entityManager.flush();

		Task secondTask = new Task();
		secondTask.setDescription("descr 2");
		secondTask.setStatus(TaskStatus.TODO.toString());
		entityManager.persist(secondTask);
		entityManager.flush();

		// Convert Iterable to ArrayList
		List<Task> taskList = new ArrayList<>();

		// Lambda expression
		// taskService.findAllTasks().forEach(item -> taskList.add(item));

		// Method reference
		taskRepository.findAll().forEach(taskList::add);

		// when
		List<Task> foundTasks = taskList;

		// then
		// Assert by list size 
		// Warning: table 'task' must contain 6 records already => please execute the provided .sql file from /db folder
		assertThat(foundTasks.size()).isEqualTo(8);
		// Assert by index number
		assertThat(foundTasks.get(6)).isEqualTo(firstTask);
		assertThat(foundTasks.get(7)).isEqualTo(secondTask);
	}
	
}
