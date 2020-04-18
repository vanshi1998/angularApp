package com.ibm.Quizproject.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//import com.ibm.Quizproject.entities.Question;
import com.ibm.Quizproject.entities.Quiz;
import com.ibm.Quizproject.services.QuizService;


@RestController
@CrossOrigin
@RequestMapping(path="/api")

public class QuizController {

	@Autowired
	QuizService quizService;
	
	@RequestMapping(path="/quiz", method = RequestMethod.POST)
	public void addQuiz(@RequestBody Quiz quiz)
	{
		System.out.println("To add a quiz"+quiz);
		quizService.addQuiz(quiz);
	}
	
	@GetMapping("/quiz")
	public List<Quiz> fetchAllQuiz()
	{
		List<Quiz> quiz=quizService.fetchAllQuizes();
		return quiz;
	}
	
	@GetMapping("/quiz/{name}")
	public Quiz fetchQuizByName(@PathVariable("name") String name)
	{
		Quiz quiz=quizService.fetchQuizByName(name);
		return quiz;
	}
}










