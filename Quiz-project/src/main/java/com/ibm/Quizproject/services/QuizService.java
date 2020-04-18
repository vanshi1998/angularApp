package com.ibm.Quizproject.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.Quizproject.entities.Question;
import com.ibm.Quizproject.entities.Quiz;
import com.ibm.Quizproject.repository.QuestionRepository;
import com.ibm.Quizproject.repository.QuizRepository;

@Service
public class QuizService {

	@Autowired
	QuizRepository quizRepository;
	
	@Autowired
	QuestionRepository questionRepository;
	
	public void addQuiz(Quiz toAdd) {
		try {
			quizRepository.save(toAdd);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

	public List<Quiz> fetchAllQuizes() {
		return quizRepository.findAll();
		
	}
	
	public List<Question> fetchAllQuestions()
	{
		return null;
	}

	public Quiz fetchQuizByName(String name) {
		return quizRepository.findByName(name);
	}
	
	
}
