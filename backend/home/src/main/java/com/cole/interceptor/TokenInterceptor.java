package com.cole.interceptor;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import com.cole.vo.Result;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

public class TokenInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response,
            @NonNull Object handler) throws Exception {
        // Check if the "user_token" header is present in the request
        if (request.getHeader("Authorization") == null) {
            return false;
        }
        String authorizationHeader = request.getHeader("Authorization");
        String userToken = authorizationHeader.replace("Bearer ", "");
        if (userToken == null || userToken.isEmpty()) {
            // Token is missing, return deny response
            sendJsonResponse(response, HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized", "Missing user_token");
            return false;
        }

        // Token is present, allow the request to proceed
        return true;
    }

    private void sendJsonResponse(HttpServletResponse response, int statusCode, String status, String message)
            throws IOException {
        response.setStatus(statusCode);
        response.setContentType(MediaType.APPLICATION_JSON_VALUE);

        Map<String, Object> jsonResponse = new HashMap<>();
        jsonResponse.put("code", statusCode);
        jsonResponse.put("status", status);
        jsonResponse.put("message", message);

        String jsonResponseString = new ObjectMapper().writeValueAsString(jsonResponse);

        try (PrintWriter writer = response.getWriter()) {
            writer.write(jsonResponseString);
        }
    }

    @Override
    public void postHandle(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response,
            @NonNull Object handler, @Nullable ModelAndView modelAndView) throws Exception {
        // This method can be left empty
    }

    @Override
    public void afterCompletion(@NonNull HttpServletRequest request, @NonNull HttpServletResponse response,
            @NonNull Object handler, @Nullable Exception ex) throws Exception {
        // This method can be left empty
    }
}