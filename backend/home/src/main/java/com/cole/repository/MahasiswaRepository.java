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
		String sql = "INSERT INTO mahasiswa(nama, username, email, password, tanggal_lahir, location, about, kampus, jurusan, semester) VALUES(?,?,?,?,?,?,?,?,?,?)";
		
		return jdbcTemplate.update(sql, mahasiswa.getNama(), mahasiswa.getUsername(),
				mahasiswa.getEmail(), mahasiswa.getPassword(),
				mahasiswa.getTanggal_lahir(), mahasiswa.getLocation(), mahasiswa.getAbout(), mahasiswa.getKampus(),
				mahasiswa.getJurusan(), mahasiswa.getSemester());
	}
	
	public int updateMahasiswa(Mahasiswa mahasiswa) {
	    String sql = "UPDATE mahasiswa SET nama = ?, username = ?, email = ?, password = ?, tanggal_lahir = ?, location = ?, about = ?, kampus = ?, jurusan = ?, semester = ? WHERE id_mhs = ?";
	    
	    return jdbcTemplate.update(sql, mahasiswa.getNama(), mahasiswa.getUsername(),
	            mahasiswa.getEmail(), mahasiswa.getPassword(),
	            mahasiswa.getTanggal_lahir(), mahasiswa.getLocation(),mahasiswa.getAbout(), mahasiswa.getKampus(),
	            mahasiswa.getJurusan(), mahasiswa.getSemester(), mahasiswa.getId_mhs());
	}

	
	public Mahasiswa findMahasiswaByEmailAndPassword(String email, String password) {
        String sql = "SELECT * FROM mahasiswa WHERE email = ? AND password = ?";
        RowMapper<Mahasiswa> rowMapper = new MahasiswaMapper();
        List<Mahasiswa> mahasiswaList = jdbcTemplate.query(sql, rowMapper, email, password);
        return mahasiswaList.isEmpty() ? null : mahasiswaList.get(0);
    }
}
