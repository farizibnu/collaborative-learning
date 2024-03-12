package com.cole.vo;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "mahasiswa")
public class Mahasiswa {
	@Id
	@Column(name = "id_mhs")
	private Long id_mhs;

	@Column(name = "nama")
	private String nama;

	@Column(name = "username")
	private String username;

	@Column(name = "email")
	private String email;

	@Column(name = "password")
	private String password;

	@Column(name = "tanggal_lahir")
	private Date tanggal_lahir;

	@Column(name = "location")
	private String location;

	@Column(name = "about")
	private String about;

	@Column(name = "kampus")
	private String kampus;

	@Column(name = "jurusan")
	private String jurusan;

	@Column(name = "semester")
	private int semester;

	@Column(name = "token")
	private String token;
	
	@Column(name = "profile_url")
	private String ProfileUrl;

	// Constructor
	public Mahasiswa() {
	}

	// constructor with id
	public Mahasiswa(
			Long id_mhs,
			String nama,
			String username,
			String email,
			String password,
			Date tanggal_lahir,
			String location,
			String about,
			String kampus,
			String jurusan,
			int semester,
			String token,
			String ProfileUrl) {
		this.id_mhs = id_mhs;
		this.nama = nama;
		this.username = username;
		this.email = email;
		this.password = password;
		this.tanggal_lahir = tanggal_lahir;
		this.location = location;
		this.about = about;
		this.kampus = kampus;
		this.jurusan = jurusan;
		this.semester = semester;
		this.ProfileUrl = ProfileUrl;
	}

	// Constructor
	public Mahasiswa(
			String nama,
			String username,
			String email,
			String password,
			Date tanggal_lahir,
			String location,
			String about,
			String kampus,
			String jurusan,
			int semester,
			String token,
			String ProfileUrl) {
		this.nama = nama;
		this.username = username;
		this.email = email;
		this.password = password;
		this.tanggal_lahir = tanggal_lahir;
		this.location = location;
		this.about = about;
		this.kampus = kampus;
		this.jurusan = jurusan;
		this.semester = semester;
		this.token = token;
		this.ProfileUrl = ProfileUrl;
	}

	// Getter and Setter
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

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getProfileUrl() {
		return ProfileUrl;
	}

	public void setProfileUrl(String ProfileUrl) {
		this.ProfileUrl = ProfileUrl;
	}
}
