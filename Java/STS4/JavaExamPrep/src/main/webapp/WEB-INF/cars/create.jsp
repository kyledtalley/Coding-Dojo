<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. -->
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!-- Formatting (dates) -->
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Cars</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>
	<div class="container">

		<h1>Add a car</h1>
		<form:form action="/cars" method="POST" modelAttribute="car">
			<form:input type="hidden" path="owner" value="${user.id }"></form:input>
			<form:errors path="*"></form:errors>
			<div class="form-group">
				<form:label path="make">Make</form:label>
				<form:input path="make"></form:input>
			</div>
			<div class="form-group">
				<form:label path="model">Model</form:label>
				<form:input path="model"></form:input>

			</div>
			<div class="form-group">
				<form:label path="year">Year</form:label>
				<form:input path="year" type="number" min="1600" max="2024"></form:input>
			</div>
			<div class="form-group">
				<form:label path="color">Color</form:label>
				<form:input path="color"></form:input>
			</div>
			<div class="form-group">
				<form:label path="price">Price</form:label>
				<form:input type="number" path="price"></form:input>
			</div>
			<div class="form-group">
				<form:label path="numOfDoors">Number Of Doors</form:label>
				<form:input type="number" step=".01" min="2" path="numOfDoors"></form:input>
			</div>
			<div class="form-group">
				<form:label path="transmission">Transmission</form:label>
				<form:select path="transmission">
					<form:option value="automatic">Automatic</form:option>
					<form:option value="manual">Manual</form:option>
				</form:select>
			</div>

			<div class="submit-group">
				<button class="btn btn-dark">Create</button>
			</div>

		</form:form>
		<a href="/auth/logout" >Logout</a>

	</div>
</body>
</html>

