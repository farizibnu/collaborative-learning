package com.cole.vo;

public class Result {
	int result;
	String message;
	Long userId; // Menambahkan properti userId

	public Result() {
	}
		
	public Result(int result, String message) {
		this.result = result;
		this.message = message;
	}

	public Result(int result, String message, Long userId) {
        this.result = result;
        this.message = message;
        this.userId = userId;
    }
		
	public int getResult() {
		return result;
	}
	public void setResult(int result) {
		this.result = result;
	}
	
	public String getMessage() { 
		return message; 
	}
	
	public void setMessage(String message) { 
		this.message = message; 
	}

	public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}