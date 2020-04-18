package com.ibm.Quizproject;


import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


import com.ibm.Quizproject.entities.Question;
import com.ibm.Quizproject.entities.Quiz;
import com.ibm.Quizproject.services.QuizService;
//import com.ibm.entities.Course;

@SpringBootTest
@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
class QuizProjectApplicationTests {

	@Autowired
	QuizService quizService;
	
	/*@Test
	public void testAddQuiz()
	{
		Option option1=new Option("Twitter",false);
		Option option2=new Option("Google",true);
		Option option3=new Option("Microsoft",false);
		Option option4=new Option("Facebook",false);
		List<Option> options=new ArrayList<Option>();
		options.add(option1);
		options.add(option2);
		options.add(option3);
		options.add(option4);
		Question question1=new Question("Which community Angular JS belongs to?",options);
		List<Question> question=new ArrayList<Question>();
		question.add(question1);
		Quiz quiz1=new Quiz("Angular Quiz",question);
		quizService.addQuiz(quiz1);
		
		
	}*/
}
