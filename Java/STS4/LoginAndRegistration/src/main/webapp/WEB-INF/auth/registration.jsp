<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Registration</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="/css/style.css">
 <script type="text/javascript" src="/js/app.js"></script>
</head>
<body>

	<div class="container">

		<h1>Register</h1>
		<form:form class="border border-dark p-3 bg-secondary text-light" action="/auth/registration" method="POST" modelAttribute="user">
			<form:errors path="*"/>
			<div class="mb-3">
				<form:label path="userName" class="form-label">First name:</form:label>
				<form:input path="userName" class="form-control" />
				<form:errors path="userName" />
			</div>
			<div class="mb-3">
				<form:label path="email" class="form-label">Email:</form:label>
				<form:input type="email" path="email" class="form-control" />
				<form:errors path="email" />
			</div>
			<div class="mb-3">
				<form:label path="password" class="form-label">Password:</form:label>
				<form:input type= "password" path="password" class="form-control" />
				<form:errors path="password" />
			</div>
			<div class="mb-3">
				<form:label path="confirm" class="form-label">Confirm Password:</form:label>
				<form:input type="password" path="confirm" class="form-control" />
				<form:errors path="confirm" />
			</div>
			
			<button type="submit" class="btn btn-primary">Register</button>
		</form:form>

	</div>
</body>
</html>