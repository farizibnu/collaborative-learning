package com.cole.vo;

import java.util.Date;

public class Mahasiswa {
	private Long id_mhs;
	private String nama;
	private String username;
	private String email;
	private String password;
	private Date tanggal_lahir;
	private String location;
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
	 String email,
	 String password,
	 String about,
	 String kampus,
	 String jurusan,
	 int semester) {
		this.nama = nama;
		this.username = username;
		this.email = email;
		this.password = password;
		this.about = about;
		this.kampus = kampus;
		this.jurusan = jurusan;
		this.semester = semester;
	}
	
	public Mahasiswa (
			 Long id_mhs,
			 String nama,
			 String username,
			 String email,
			 String password,
			 String bio,
			 String about,
			 String kampus,
			 String jurusan,
			 int semester) {
				this.id_mhs = id_mhs;
				this.nama = nama;
				this.username = username;
				this.email = email;
				this.password = password;
				this.about = about;
				this.kampus = kampus;
				this.jurusan = jurusan;
				this.semester = semester;
			}
	
	//Getter and Setter
	public Date getTanggal_lahir() {
		return tanggal_lahir;
	}

	public void setTanggal_lahir(Date tanggal_lahir) {
		this.tanggal_lahir = tanggal_lahir;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
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
	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
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
