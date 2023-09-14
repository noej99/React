package com.noej.mpbe.member;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity(name = "mp_member")
public class Member {
	
	@Id
	@Column(name = "mm_id")
	private String id;
	
	@Column(name = "mm_pw")
	private String pw;
	
	@Column(name = "mm_name")
	private String name;

}
