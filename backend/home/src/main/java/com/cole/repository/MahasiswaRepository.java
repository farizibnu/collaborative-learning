package com.cole.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.cole.mapper.MahasiswaMapper;
import com.cole.vo.Mahasiswa;

@Repository
public class MahasiswaRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	public Mahasiswa findOne(Long id) {
		String sql = "SELECT * FROM mahasiswa WHERE id_mhs = ?";

		RowMapper<Mahasiswa> rowMapper = new MahasiswaMapper();

		return this.jdbcTemplate.queryForObject(sql, rowMapper, id);
	}

	public List<Mahasiswa> findMahasiswas() {
		String sql = "SELECT * FROM mahasiswa";
		RowMapper<Mahasiswa> rowMapper = new MahasiswaMapper();
		return this.jdbcTemplate.query(sql, rowMapper);
	}

	public Mahasiswa findByUsername(String username) {
		String sql = "SELECT * FROM mahasiswa WHERE username = ?";
		RowMapper<Mahasiswa> rowMapper = new MahasiswaMapper();
		List<Mahasiswa> mahasiswaList = jdbcTemplate.query(sql, rowMapper, username);
		return mahasiswaList.isEmpty() ? null : mahasiswaList.get(0);
	}

	public Mahasiswa findByEmail(String email) {
		String sql = "SELECT * FROM mahasiswa WHERE email = ?";
		RowMapper<Mahasiswa> rowMapper = new MahasiswaMapper();
		List<Mahasiswa> mahasiswaList = jdbcTemplate.query(sql, rowMapper, email);
		return mahasiswaList.isEmpty() ? null : mahasiswaList.get(0);
	}

	// REGISTER
	public int saveMahasiswa(Mahasiswa mahasiswa) {
		// Check if username already exists
		Mahasiswa existingUsername = findByUsername(mahasiswa.getUsername());
		if (existingUsername != null) {
			return 0; // Username already taken
		}

		// Check if email already exists
		Mahasiswa existingEmail = findByEmail(mahasiswa.getEmail());
		if (existingEmail != null) {
			return -1; // Email already registered
		}

		String sql = "INSERT INTO mahasiswa(nama, username, email, password, tanggal_lahir, location, about, kampus, jurusan, semester,token,profile_url, role) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";

		return jdbcTemplate.update(sql, mahasiswa.getNama(), mahasiswa.getUsername(),
				mahasiswa.getEmail(), mahasiswa.getPassword(),
				mahasiswa.getTanggal_lahir(), mahasiswa.getLocation(), mahasiswa.getAbout(), mahasiswa.getKampus(),
				mahasiswa.getJurusan(), mahasiswa.getSemester(), mahasiswa.getToken(), mahasiswa.getProfileUrl(), "mahasiswa");
	}

	public int updateMahasiswa(Mahasiswa mahasiswa) {
		String sql = "UPDATE mahasiswa SET nama = ?, username = ?, email = ?, password = ?, tanggal_lahir = ?, location = ?, about = ?, kampus = ?, jurusan = ?, semester = ?, token = ?, profile_url = ? WHERE id_mhs = ?";

		return jdbcTemplate.update(sql, mahasiswa.getNama(), mahasiswa.getUsername(),
				mahasiswa.getEmail(), mahasiswa.getPassword(),
				mahasiswa.getTanggal_lahir(), mahasiswa.getLocation(), mahasiswa.getAbout(), mahasiswa.getKampus(),
				mahasiswa.getJurusan(), mahasiswa.getSemester(), mahasiswa.getId_mhs());
	}

	public Mahasiswa findMahasiswaByEmailAndPassword(String email, String password) {
		String sql = "SELECT * FROM mahasiswa WHERE email = ? AND password = ?";
		RowMapper<Mahasiswa> rowMapper = new MahasiswaMapper();
		List<Mahasiswa> mahasiswaList = jdbcTemplate.query(sql, rowMapper, email, password);
		return mahasiswaList.isEmpty() ? null : mahasiswaList.get(0);
	}
}
