package com.ibm.Quizproject.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Alternative {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	int id;
	String text;
	boolean right;
	
	public Alternative()
	{
		
	}
	public Alternative(int id, String text, boolean right) {
		super();
		this.id = id;
		this.text = text;
		this.right = right;
	}
	public Alternative(String text, boolean right) {
		super();
		this.text = text;
		this.right = right;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public boolean isRight() {
		return right;
	}
	public void setRight(boolean right) {
		this.right = right;
	}
	@Override
	public String toString() {
		return "Alternative [id=" + id + ", text=" + text + ", right=" + right + "]";
	}
	
}
