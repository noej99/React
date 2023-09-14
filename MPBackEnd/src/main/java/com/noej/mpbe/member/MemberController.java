package com.noej.mpbe.member;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import jakarta.servlet.http.HttpServletResponse;

@Controller
public class MemberController {
// jackson-mapper-asl
	// jwt

	@Autowired
	private MemberDAO mDAO;

	@RequestMapping(value = "/member.join", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public @ResponseBody Member memberJoin(Member m, HttpServletResponse res) {
		res.addHeader("Access-Control-Allow-Origin", "*");
		mDAO.join(m);
		return m;
	}

	@RequestMapping(value = "/member.login", method = RequestMethod.POST, produces = "application/json;charset=utf-8")
	public @ResponseBody MemberJWT memberLogin(Member m, HttpServletResponse res) {
		res.addHeader("Access-Control-Allow-Origin", "*");
		return mDAO.login(m);
	}

	@RequestMapping(value = "/member.info.get", produces = "application/json;charset=utf-8")
	public @ResponseBody Member memberInfoGet(@RequestParam("token") String token, HttpServletResponse res) {
		res.addHeader("Access-Control-Allow-Origin", "*");
		return mDAO.get(token);
	}

	@RequestMapping(value = "/member.token.update", produces = "application/json;charset=utf-8")
	public @ResponseBody MemberJWT memberTokenUpdate(@RequestParam("token") String token, Member m,
			HttpServletResponse res) {
		res.addHeader("Access-Control-Allow-Origin", "*");
		return mDAO.updateToken(token);
	}
}
