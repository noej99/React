package com.noej.mpbe;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class MpBackEndApplication {

	public static void main(String[] args) {
		SpringApplication.run(MpBackEndApplication.class, args);
	}

}
