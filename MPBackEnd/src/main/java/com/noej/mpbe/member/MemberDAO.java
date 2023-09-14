package com.noej.mpbe.member;

import java.time.Duration;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.resource.OAuth2ResourceServerProperties.Jwt;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtParser;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;

@Service
public class MemberDAO {

	@Autowired
	private MemberRepo mr;

	private static final String KEY = "1234567890123456789012345678901234567890";

	private BCryptPasswordEncoder bcpe;

	public MemberDAO() {
		bcpe = new BCryptPasswordEncoder();
	}

	public Member join(Member m) {
		try {
			if (mr.findById(m.getId()).isEmpty()) {
				m.setPw(bcpe.encode(m.getPw()));
				return mr.save(m);
			}
			return null;
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	public MemberJWT login(Member inputMember) {
		try {
			Optional<Member> dbMember = mr.findById(inputMember.getId());

			if (dbMember.isPresent()) {
				if (bcpe.matches(inputMember.getPw(), dbMember.get().getPw())) {
					String token = Jwts.builder().signWith(Keys.hmacShaKeyFor(KEY.getBytes("utf-8")))
							.setExpiration(new Date(new Date().getTime() + Duration.ofSeconds(10).toMillis()))
							.claim("id", dbMember.get().getId()).claim("pw", dbMember.get().getPw())
							.claim("name", dbMember.get().getName()).compact();
					return new MemberJWT(token);
				} else {
					return new MemberJWT("실패(PW)");
				}
			} else {
				return new MemberJWT("실패(미가입)");
			}
		} catch (Exception e) {
			e.printStackTrace();
			return new MemberJWT("실패(DB)");
		}
	}

	public Member get(String token) {
		try {
			JwtParser jp = Jwts.parserBuilder().setSigningKey(Keys.hmacShaKeyFor(KEY.getBytes("utf-8"))).build();
			Jws<Claims> jwt = jp.parseClaimsJws(token);
			Claims c = jwt.getBody();
			String id = (String) c.get("id");
			String pw = (String) c.get("pw");
			String name = (String) c.get("name");
			return new Member(id, pw, name);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}

	public MemberJWT updateToken(String token) {
		try {
			JwtParser jp = Jwts.parserBuilder().setSigningKey(Keys.hmacShaKeyFor(KEY.getBytes("utf-8"))).build();
			Jws<Claims> jwt = jp.parseClaimsJws(token);
			Claims c = jwt.getBody();
			String id = (String) c.get("id");
			String pw = (String) c.get("pw");
			String name = (String) c.get("name");
			
			String token2 = Jwts.builder().signWith(Keys.hmacShaKeyFor(KEY.getBytes("utf-8"))).setExpiration(new Date(new Date().getTime() + Duration.ofSeconds(10).toMillis()))
					.claim("id", id).claim("pw", pw).claim("name", name).compact();
			
			return new MemberJWT(token2);
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
}
