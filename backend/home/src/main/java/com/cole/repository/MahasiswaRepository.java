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
		
		RowMapper <Mahasiswa> rowMapper = new MahasiswaMapper();
		
		return this.jdbcTemplate.queryForObject(sql, rowMapper, id);
	}
	
	public List<Mahasiswa> findMahasiswas() {
		String sql = "SELECT * FROM mahasiswa";
		RowMapper<Mahasiswa> rowMapper = new MahasiswaMapper();
		return this.jdbcTemplate.query(sql, rowMapper);
	}
	
	public int saveMahasiswa(Mahasiswa mahasiswa) {
		String sql = "INSERT INTO mahasiswa(nama, username, bio, about, kampus, jurusan, semester) VALUES(?,?,?,?,?,?,?)";
		
		return jdbcTemplate.update(sql, mahasiswa.getNama(), mahasiswa.getUsername(),
				mahasiswa.getBio(), mahasiswa.getAbout(), mahasiswa.getKampus(),
				mahasiswa.getJurusan(), mahasiswa.getSemester());
	}
	
	
}
