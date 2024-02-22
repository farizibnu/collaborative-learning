package com.cole.vo;

public class Mahasiswa {
	private Long id_mhs;
	private String nama;
	private String username;
	private String bio;
	private String about;
	private String kampus;
	private String jurusan;
	private int semester;
	
	// Constructor
	public Mahasiswa () {
	}
	
	// Constructor
	public Mahasiswa (
	 String nama,
	 String username,
	 String bio,
	 String about,
	 String kampus,
	 String jurusan,
	 int semester) {
		this.nama = nama;
		this.username = username;
		this.bio = bio;
		this.about = about;
		this.kampus = kampus;
		this.jurusan = jurusan;
		this.semester = semester;
	}
	
	//Getter and Setter
	public Long getId_mhs() {
		return id_mhs;
	}
	public void setId_mhs(Long id_mhs) {
		this.id_mhs = id_mhs;
	}
	public String getNama() {
		return nama;
	}
	public void setNama(String nama) {
		this.nama = nama;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getBio() {
		return bio;
	}
	public void setBio(String bio) {
		this.bio = bio;
	}
	public String getAbout() {
		return about;
	}
	public void setAbout(String about) {
		this.about = about;
	}
	public String getKampus() {
		return kampus;
	}
	public void setKampus(String kampus) {
		this.kampus = kampus;
	}
	public String getJurusan() {
		return jurusan;
	}
	public void setJurusan(String jurusan) {
		this.jurusan = jurusan;
	}
	public int getSemester() {
		return semester;
	}
	public void setSemester(int semester) {
		this.semester = semester;
	}
}
