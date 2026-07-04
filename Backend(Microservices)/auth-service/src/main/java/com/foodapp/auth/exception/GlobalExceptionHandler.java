package com.foodapp.auth.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(
            UserAlreadyExistsException.class)
    public ResponseEntity<?> handleUserExists(
            UserAlreadyExistsException ex) {

        return ResponseEntity
                .status(HttpStatus.CONFLICT)
                .body(Map.of(
                        "timestamp",
                        LocalDateTime.now(),
                        "message",
                        ex.getMessage()
                ));
    }

    @ExceptionHandler(
            InvalidCredentialsException.class)
    public ResponseEntity<?> handleInvalidCredentials(
            InvalidCredentialsException ex) {

        return ResponseEntity
                .status(HttpStatus.UNAUTHORIZED)
                .body(Map.of(
                        "timestamp",
                        LocalDateTime.now(),
                        "message",
                        ex.getMessage()
                ));
    }
}