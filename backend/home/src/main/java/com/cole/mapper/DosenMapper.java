package com.cole.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;
import org.springframework.lang.NonNull;

import com.cole.vo.Dosen;

public class DosenMapper implements RowMapper<Dosen> {
    
    @Override
    public Dosen mapRow(@NonNull ResultSet rs, int rowNum) throws SQLException {
        Dosen dosen = new Dosen();
        
        dosen.setId_dosen(rs.getLong("id_dosen"));
        dosen.setNama(rs.getString("nama"));
        dosen.setEmail(rs.getString("email"));
        dosen.setPassword(rs.getString("password"));
        dosen.setKampus(rs.getString("kampus"));
        dosen.setJurusan(rs.getString("jurusan"));
        dosen.setRiwayat_s1(rs.getString("riwayat_s1"));
        dosen.setRiwayat_s2(rs.getString("riwayat_s2"));
        dosen.setRiwayat_s3(rs.getString("riwayat_s3"));
        dosen.setAbout(rs.getString("about"));
        
        return dosen;
    }
}
