package com.cole.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cole.vo.Course;

@RestController
@CrossOrigin
public class CourseController {
	
	@GetMapping("/course")
	public Course getCourse() {
		Course course = new Course(1L, 2, "CC2", "CobaCourse2");
		return course;
	}
}
