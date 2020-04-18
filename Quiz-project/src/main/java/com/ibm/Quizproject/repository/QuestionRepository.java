package com.ibm.Quizproject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ibm.Quizproject.entities.Question;


public interface QuestionRepository extends JpaRepository<Question,Integer> {

}
