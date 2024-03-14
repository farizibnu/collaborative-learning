package com.cole.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cole.repository.DosenRepository;
import com.cole.vo.Dosen;

@Service
public class DosenService {
    @Autowired
    DosenRepository dosenRepository;

    public Dosen getDosen(Long id_dosen) {
        Dosen dosen = dosenRepository.findOne(id_dosen);
        return dosen;
    }

    public Dosen loginDosen(String email, String password) {
        Dosen dosen = dosenRepository.findDosenByEmailAndPassword(email, password);
        return dosen;
    }

    public List<Dosen> getDosens() {
        List<Dosen> dosenList = dosenRepository.findDosens();
        return dosenList;
    }

    public boolean saveDosen(Dosen dosen) {
        int result = dosenRepository.saveDosen(dosen);
        boolean isSuccess = true;

        if (result == 0) {
            isSuccess = false;
        }
        return isSuccess;
    }

    public boolean updateDosen(Dosen dosen) {
        Dosen result = dosenRepository.findOne(dosen.getId_dosen());

        if (result == null)
            return false;

        // Update fields that are allowed to be updated
        if (dosen.getNama() != null) {
            result.setNama(dosen.getNama());
        }
        if (dosen.getEmail() != null) {
            result.setEmail(dosen.getEmail());
        }
        if (dosen.getPassword() != null) {
            result.setPassword(dosen.getPassword());
        }
        if (dosen.getKampus() != null) {
            result.setKampus(dosen.getKampus());
        }
        if (dosen.getJurusan() != null) {
            result.setJurusan(dosen.getJurusan());
        }
        if (dosen.getRiwayat_s1() != null) {
            result.setRiwayat_s1(dosen.getRiwayat_s1());
        }
        if (dosen.getRiwayat_s2() != null) {
            result.setRiwayat_s2(dosen.getRiwayat_s2());
        }
        if (dosen.getRiwayat_s3() != null) {
            result.setRiwayat_s3(dosen.getRiwayat_s3());
        }
        if (dosen.getAbout() != null) {
            result.setAbout(dosen.getAbout());
        }

        // Save the updated Dosen object
        dosenRepository.updateDosen(result);
        return true;
    }
}
