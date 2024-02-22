package com.cole.vo;

import java.util.Date;

public class Course {
	private Long id;
	private String shortname;
	private String fullname;
	private int category;
	private Date startDate;
	private Date endDate;
	
	public Course(){	
	}
	
	public Course(Long id, int category, String shortname, String fullname) {
		super();
		this.id = id;
		this.category = category;
		this.shortname = shortname;
		this.fullname = fullname;
		this.startDate = new Date();
		this.endDate = new Date();
	}
	
	public int getCategory() {
		return category;
	}

	public void setCategory(int category) {
		this.category = category;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getShortname() {
		return shortname;
	}

	public void setShortname(String shortname) {
		this.shortname = shortname;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	
	
}
