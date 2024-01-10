<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>TITLE</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<script type="text/javascript" src="/js/app.js"></script>
</head>
<body>

	<c:if test="${notLoggedIn != null}">
		<div class="alert alert-danger">${notLoggedIn}</div>
	</c:if>
	
	<h1>Login Page</h1>
	<a href="/books">Home</a>
	<div class="container d-flex justify-content-around">

		<c:out value="${loggedIn}"></c:out>
		<form:form action="/auth/registration" modelAttribute="user">
			<form:errors class="text-danger pb-3" path="*" />
			<div class="form-group mb-3">
				<form:label path="firstName">First Name</form:label>
				<form:input path="firstName" />
			</div>
			<div class="form-group mb-3">
				<form:label path="lastName">LastName</form:label>
				<form:input path="lastName" />
			</div>
			<div class="form-group mb-3">
				<form:label path="email">Email</form:label>
				<form:input path="email" />
			</div>
			<div class="form-group mb-3">
				<form:label path="password">Password</form:label>
				<form:input path="password" />
			</div>
			<div class="form-group mb-3">
				<form:label path="confirmPassword">Confirm Password</form:label>
				<form:input path="confirmPassword" />
			</div>
			<div class="submitgroup">
				<button class="btn btn-dark">Register</button>
			</div>

		</form:form>

		<form:form action="/auth/login" modelAttribute="loginUser">
			<form:errors path="*" class="text-danger pb-3" />
			<div class="form-group mb-3">
				<form:label path="email">Email</form:label>
				<form:input path="email"></form:input>
			</div>
			<div class="form-group mb-3">
				<form:label path="password">Password</form:label>
				<form:input path="password"></form:input>
			</div>

			<div class="submitgroup">
				<button class="btn btn-dark">Login</button>
			</div>
		</form:form>



	</div>



</body>
</html>