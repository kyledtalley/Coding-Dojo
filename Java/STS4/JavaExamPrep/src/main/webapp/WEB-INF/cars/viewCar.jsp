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
<title>View Car</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>
	<h1>
		<c:out value="${car.year } ${car.make } ${car.model }"></c:out>
	</h1>

	<h2>
		Posted On:
		<c:out value="${car.createdAt }"></c:out>
	</h2>
	<h3>
		Asking Price: <c:out value="$${car.price }"></c:out>
	</h3>
	<div class="container">
		<p>
			Color:
			<c:out value="${car.color }"></c:out>

		</p>
		<p>
			Transmission:
			<c:out value="${car.transmission }"></c:out>

		</p>
		<p>
			Doors:
			<c:out value="${car.numOfDoors }"></c:out>

		</p>

	</div>


</body>
</html>

