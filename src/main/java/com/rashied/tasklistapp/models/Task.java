/**
 * 
 */
package com.rashied.tasklistapp.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author rashied
 *
 */
@Entity
@Table(name = "task")
public class Task {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)	// Please use GenerationType.IDENTITY when persisting to a MySQL db
	private long id;									// Failure to do so will result in a 'hibernate_sequence' doesn't exist' error
	@Column(name = "description")						// On databases like Postgres you can proceed to use GenerationType.AUTO
	private String description;
	
	@Column(name = "status")
	private String status;

	public Task() {
		super();
	}

	public Task(String description, String status) {
		super();
		this.description = description;
		this.status = status;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
	public String toString() {
		return "Task [id=" + id + "\ndescription=" + description + "\nstatus=" + status + "]";
	}
	
}
