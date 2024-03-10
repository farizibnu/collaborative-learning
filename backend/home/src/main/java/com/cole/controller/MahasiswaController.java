package com.cole.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cole.service.MahasiswaService;
import com.cole.vo.Mahasiswa;
import com.cole.vo.Result;

import jakarta.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin
public class MahasiswaController {
	
	@Autowired
	MahasiswaService mahasiswaService;
	
	@GetMapping("/mahasiswa/{id}")
	public Mahasiswa getMahasiswa(@PathVariable("id") Long id_mhs) {
		Mahasiswa mahasiswa = mahasiswaService.getMahasiswa(id_mhs);
		return mahasiswa;
	}

	
	@GetMapping("/mahasiswas")
	public List<Mahasiswa> getMahasiswas(){
		List<Mahasiswa> mahasiswas = mahasiswaService.getMahasiswas();
		return mahasiswas;
	}
	
	@PostMapping("/mahasiswa/login")
    public Object loginMahasiswa(HttpServletResponse response, @RequestBody Mahasiswa mahasiswaParam) {
        Mahasiswa mahasiswa = mahasiswaService.loginMahasiswa(mahasiswaParam.getEmail(), mahasiswaParam.getPassword());
        if (mahasiswa != null) {
            return new Result(200, "Success");
        } else {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return new Result(401, "Unauthorized");
        }
    }

	@PostMapping("/mahasiswa")
	public Object savePost(HttpServletResponse response, @RequestBody Mahasiswa mahasiswaParam) { 
		Mahasiswa mahasiswa = new Mahasiswa(mahasiswaParam.getNama(), mahasiswaParam.getUsername(), 
				mahasiswaParam.getEmail(),mahasiswaParam.getPassword(),
				mahasiswaParam.getTanggal_lahir(), mahasiswaParam.getLocation(), mahasiswaParam.getAbout(),mahasiswaParam.getKampus(),
				mahasiswaParam.getJurusan(),mahasiswaParam.getSemester());
		
		boolean isSuccess = mahasiswaService.saveMahasiswa(mahasiswa);
		
		if(isSuccess) {
			return new Result(200, "Success");
		} else {
			response.setStatus (HttpServletResponse.SC_INTERNAL_SERVER_ERROR); 
			return new Result(500, "Fail");
		}
	}
	
	@PutMapping("/mahasiswa/{id}")
	public Object modifyMahasiswa(HttpServletResponse response, @PathVariable("id") Long id_mhs, @RequestBody Mahasiswa mahasiswaParam) { 
	    Mahasiswa mahasiswa = new Mahasiswa(id_mhs, mahasiswaParam.getNama(), mahasiswaParam.getUsername(), 
				mahasiswaParam.getEmail(), mahasiswaParam.getPassword(),
	            mahasiswaParam.getTanggal_lahir(), mahasiswaParam.getLocation(),mahasiswaParam.getAbout(), 
				mahasiswaParam.getKampus(),mahasiswaParam.getJurusan(), mahasiswaParam.getSemester());
	    
	    boolean isSuccess = mahasiswaService.updateMahasiswa(mahasiswa);
	    if(isSuccess) {
	        return new Result(200, "Success");
	    } else {
	        response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR); 
	        return new Result(500, "Fail");
	    }
	}

}
