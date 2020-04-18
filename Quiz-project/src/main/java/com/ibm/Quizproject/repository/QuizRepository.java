package com.ibm.Quizproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.Quizproject.entities.Quiz;

public interface QuizRepository extends JpaRepository<Quiz,Integer>{

	public Quiz findByName(String name);
}
