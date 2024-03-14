package com.cole.repository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import com.cole.mapper.DosenMapper;
import com.cole.vo.Dosen;

@Repository
public class DosenRepository {
    
    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    public Dosen findOne(Long id) {
        String sql = "SELECT * FROM dosen WHERE id_dosen = ?";
        RowMapper<Dosen> rowMapper = new DosenMapper();
        return this.jdbcTemplate.queryForObject(sql, rowMapper, id);
    }
    
    public List<Dosen> findDosens() {
        String sql = "SELECT * FROM dosen";
        RowMapper<Dosen> rowMapper = new DosenMapper();
        return this.jdbcTemplate.query(sql, rowMapper);
    }
    
    public int saveDosen(Dosen dosen) {
        String sql = "INSERT INTO dosen(nama, email, password, kampus, jurusan, riwayat_s1, riwayat_s2, riwayat_s3, about) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)";
        return jdbcTemplate.update(sql, dosen.getNama(), dosen.getEmail(), dosen.getPassword(), 
                dosen.getKampus(), dosen.getJurusan(), dosen.getRiwayat_s1(), dosen.getRiwayat_s2(), 
                dosen.getRiwayat_s3(), dosen.getAbout());
    }
    
    public int updateDosen(Dosen dosen) {
        String sql = "UPDATE dosen SET nama = ?, email = ?, password = ?, kampus = ?, jurusan = ?, riwayat_s1 = ?, riwayat_s2 = ?, riwayat_s3 = ?, about = ? WHERE id_dosen = ?";
        return jdbcTemplate.update(sql, dosen.getNama(), dosen.getEmail(), dosen.getPassword(), 
                dosen.getKampus(), dosen.getJurusan(), dosen.getRiwayat_s1(), dosen.getRiwayat_s2(), 
                dosen.getRiwayat_s3(), dosen.getAbout(), dosen.getId_dosen());
    }
    
    public Dosen findDosenByEmailAndPassword(String email, String password) {
        String sql = "SELECT * FROM dosen WHERE email = ? AND password = ?";
        RowMapper<Dosen> rowMapper = new DosenMapper();
        List<Dosen> dosenList = jdbcTemplate.query(sql, rowMapper, email, password);
        return dosenList.isEmpty() ? null : dosenList.get(0);
    }
}
