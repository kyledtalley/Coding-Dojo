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
	<div class="container">
	
		<table class="table table-striped table-dark mt-3">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">User Names</th>
					<th scope="col">User Emails</th>
					<th scope="col">User Passwords(test)</th>

				</tr>
			</thead>
			<tbody>
				<c:forEach var="user" items="${allUsers}">
					<tr>
						<td><c:out value="${user.id}"></c:out></td>
						<td><c:out value="${user.userName}"></c:out></td>
						<td><c:out value="${user.email}"></c:out></td>
						<td><c:out value="${user.password}"></c:out></td>
					</tr>
				</c:forEach>
		</table>
		<a href="/auth/registration">Register</a>
		<a href="/auth/logout">Logout</a>
	</div>
</body>
</html>