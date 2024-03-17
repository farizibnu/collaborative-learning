package com.cole.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.lang.NonNull;

import com.cole.vo.Mahasiswa;

public class MahasiswaMapper implements RowMapper<Mahasiswa> {

	@Override
	public Mahasiswa mapRow(@NonNull ResultSet rs, int rowNum) throws SQLException {
		Mahasiswa mahasiswa = new Mahasiswa();

		mahasiswa.setId_mhs(rs.getLong("id_mhs"));
		mahasiswa.setNama(rs.getString("nama"));
		mahasiswa.setUsername(rs.getString("username"));
		mahasiswa.setEmail(rs.getString("email"));
		mahasiswa.setPassword(rs.getString("password"));
		mahasiswa.setTanggal_lahir(rs.getDate("tanggal_lahir"));
		mahasiswa.setLocation(rs.getString("location"));
		mahasiswa.setAbout(rs.getString("about"));
		mahasiswa.setKampus(rs.getString("kampus"));
		mahasiswa.setJurusan(rs.getString("jurusan"));
		mahasiswa.setSemester(rs.getInt("semester"));
		mahasiswa.setToken(rs.getString("token"));
		mahasiswa.setProfileUrl(rs.getString("profile_url"));

		return mahasiswa;

	}
}
