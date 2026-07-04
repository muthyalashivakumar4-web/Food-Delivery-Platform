package com.foodapp.common.exception;

import com.foodapp.common.dto.ErrorResponse;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(
            ResourceNotFoundException.class)
    public ResponseEntity<ErrorResponse>
    handleNotFound(
            ResourceNotFoundException ex) {

        return ResponseEntity
                .status(404)
                .body(
                        new ErrorResponse(
                                ex.getMessage(),
                                404,
                                LocalDateTime.now()
                        )
                );
    }

    @ExceptionHandler(
            BadRequestException.class)
    public ResponseEntity<ErrorResponse>
    handleBadRequest(
            BadRequestException ex) {

        return ResponseEntity
                .badRequest()
                .body(
                        new ErrorResponse(
                                ex.getMessage(),
                                400,
                                LocalDateTime.now()
                        )
                );
    }
}