package com.cole.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cole.repository.MahasiswaRepository;
import com.cole.vo.Mahasiswa;

@Service
public class MahasiswaService {
	@Autowired
	MahasiswaRepository mahasiswaRepository;
	
	// Get mahasiswa by id service
	public Mahasiswa getMahasiswa(Long id_mhs) {
		Mahasiswa mahasiswa = mahasiswaRepository.findOne(id_mhs);
		
		return mahasiswa;
	}

	// Login mahasiswa service
	public Mahasiswa loginMahasiswa(String email, String password) {
        Mahasiswa mahasiswa = mahasiswaRepository.findMahasiswaByEmailAndPassword(email, password);
        return mahasiswa;
    }

	// Get list mahasiswa service
	public List<Mahasiswa> getMahasiswas() {
		List<Mahasiswa> mahasiswaList = mahasiswaRepository.findMahasiswas();
	
		return mahasiswaList;
	}
	
	// Save/Register mahasiswa service
	public int saveMahasiswa (Mahasiswa mahasiswa) {
		int result = mahasiswaRepository.saveMahasiswa(mahasiswa);
		return result;
	}
	
	// Update mahasiswa service
	public boolean updateMahasiswa(Mahasiswa mahasiswa) {
	    Mahasiswa result = mahasiswaRepository.findOne(mahasiswa.getId_mhs());

		//return false
	    if (result == null)
	        return false;

	    // Update fields that are allowed to be updated
	    if (mahasiswa.getNama() != null) {
	        result.setNama(mahasiswa.getNama());
	    }
	    if (mahasiswa.getUsername() != null) {
	        result.setUsername(mahasiswa.getUsername());
	    }
	    if (mahasiswa.getEmail() != null) {
	        result.setEmail(mahasiswa.getEmail());
	    }
	    if (mahasiswa.getTanggal_lahir() != null) {
	        result.setTanggal_lahir(mahasiswa.getTanggal_lahir());
	    }    
		if (mahasiswa.getLocation()!=null) {
			result.setLocation(mahasiswa.getLocation());
		}
	    if (mahasiswa.getAbout() != null) {
	        result.setAbout(mahasiswa.getAbout());
	    }
	    if (mahasiswa.getKampus() != null) {
	        result.setKampus(mahasiswa.getKampus());
	    }
	    if (mahasiswa.getJurusan() != null) {
	        result.setJurusan(mahasiswa.getJurusan());
	    }
	    if (mahasiswa.getSemester() == 0){
	        result.setSemester(mahasiswa.getSemester());
	    }

	    // Check if password is provided and update it if necessary
	    String newPassword = mahasiswa.getPassword();
	    if (newPassword != null && !newPassword.isEmpty()) {
	        result.setPassword(newPassword);
	    }

	    // Save the updated Mahasiswa object
	    mahasiswaRepository.updateMahasiswa(result);
	    return true;
	}

	
	
}
