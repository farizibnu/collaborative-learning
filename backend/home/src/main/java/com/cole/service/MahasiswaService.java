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
	
	public Mahasiswa getMahasiswa(Long id_mhs) {
		Mahasiswa mahasiswa = mahasiswaRepository.findOne(id_mhs);
		
		return mahasiswa;
	}
	
	public List<Mahasiswa> getMahasiswas() {
		List<Mahasiswa> mahasiswaList = mahasiswaRepository.findMahasiswas();
	
		return mahasiswaList;
	}
	
	public boolean saveMahasiswa (Mahasiswa mahasiswa) {
		int result = mahasiswaRepository.saveMahasiswa(mahasiswa);
		boolean isSuccess = true;
		
		if (result == 0) {
			isSuccess = false;
		}
		return isSuccess;
	}
	
	
}
