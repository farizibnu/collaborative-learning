package com.cole.service;

import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.cole.vo.UserTokenInfo;

@Service
public class UserProfileService {

    public UserTokenInfo fetchUserProfile(String accessToken) {
        try {
            String apiUrl = "https://www.googleapis.com/oauth2/v1/userinfo";
            HttpHeaders headers = new HttpHeaders();
            headers.set("Authorization", "Bearer " + accessToken);
            headers.set("Accept", "application/json");
            HttpEntity<String> entity = new HttpEntity<>(headers);

            ResponseEntity<UserTokenInfo> responseEntity = new RestTemplate().exchange(apiUrl, HttpMethod.GET, entity,
                    UserTokenInfo.class);

            if (responseEntity.getStatusCode() == HttpStatus.OK) {
                return responseEntity.getBody();
            } else {
                return null;
            }
        } catch (HttpClientErrorException.Unauthorized unauthorizedException) {
            // Handle Unauthorized (401) exception
            // You may log the exception or handle it in a way that suits your application
            return null;
        } catch (Exception e) {
            // Handle other exceptions
            e.printStackTrace(); // Log or handle the exception as needed
            return null;
        }
    }
}