package com.ibm.Quizproject.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Question {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	String title;
	
	@OneToMany(cascade=CascadeType.ALL)
	List<Alternative> choices;
	
	public Question()
	{
		
	}

	public Question(int id, String title, List<Alternative> choices) {
		super();
		this.id = id;
		this.title = title;
		this.choices = choices;
	}

	public Question(String title, List<Alternative> choices) {
		super();
		this.title = title;
		this.choices = choices;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<Alternative> getChoices() {
		return choices;
	}

	public void setChoices(List<Alternative> choices) {
		this.choices = choices;
	}

	@Override
	public String toString() {
		return "Question [id=" + id + ", title=" + title + ", choices=" + choices + "]";
	}
	
	
	
}
