package com.ibm.Quizproject.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
//import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Quiz {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	String name;

	@OneToMany(cascade=CascadeType.ALL)
	List<Question> questions;
	
	public Quiz()
	{
		
	}
	public Quiz(String name, List<Question> questions) {
		super();
		this.name = name;
		this.questions = questions;
	}
	public Quiz(int id, String name, List<Question> questions) {
		super();
		this.id = id;
		this.name = name;
		this.questions = questions;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<Question> getQuestions() {
		return questions;
	}
	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}
	@Override
	public String toString() {
		return "Quiz [id=" + id + ", name=" + name + ", questions=" + questions + "]";
	}
	
	
	
	
	
}
