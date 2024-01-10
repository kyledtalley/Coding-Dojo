<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Register Ninja</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<link rel="stylesheet" type="text/css" href="/css/style.css">
<script type="text/javascript" src="/js/app.js"></script>
</head>
<body>
	<div class="container">
		<form:form action="/ninjas/new" method="post" modelAttribute="ninja">
			<p>
				<form:label path="dojo">Location:</form:label>
				<form:select path="dojo">
					<c:forEach items="${allDojos }" var="dojo">
						<option value="${dojo.id }">${dojo.name}</option>
					</c:forEach>
				</form:select>

			</p>
			<div class="form-group">
				<form:label path="first_name">First Name:</form:label>
				<form:input path="first_name"></form:input>
			</div>


			<div class="form-group">
				<form:label path="last_name">Last Name:</form:label>
				<form:input path="last_name"></form:input>
			</div>
			<div class="form-group">
				<form:label path="age">Age:</form:label>
				<form:input path="age"></form:input>
			</div>
			<button class="btn btn-dark">Create</button>
		</form:form>
	</div>
</body>
</html>