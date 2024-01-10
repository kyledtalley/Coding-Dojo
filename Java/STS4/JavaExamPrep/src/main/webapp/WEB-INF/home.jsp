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
<title>Home</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>

	<h1>
		Welcome,
		<c:out value="${loggedInUser.firstName}"></c:out>
	</h1>
	<button class="btn btn-dark text-right">Logout</button>
	<h2>All Vehicles For Sale</h2>
	<table class="table">
		<tr>
			<th>#</th>
			<th>Make</th>
			<th>Model</th>
			<th>Color</th>
			<th>Year</th>
			<th>Transmission</th>
			<th>Number of Doors</th>
			<th>Price</th>
			<th>Date Posted</th>
		</tr>
		<c:forEach var="car" items="${allCars }">
			<tr>
				<td><a href="/cars/${car.id }"><c:out value="${car.id }"></c:out></a></td>
				<td><c:out value="${car.make }"></c:out></td>
				<td><c:out value="${car.model }"></c:out></td>
				<td><c:out value="${car.color }"></c:out></td>
				<td><c:out value="${car.year }"></c:out></td>
				<td><c:out value="${car.transmission }"></c:out></td>
				<td><c:out value="${car.numOfDoors }"></c:out></td>
				<td><c:out value="${car.price }"></c:out></td>
				<td><c:out value="${car.createdAt }"></c:out></td>
			</tr>
		</c:forEach>


	</table>

	<h2>My Cars For Sale</h2>




	<table class="table">
		<tr>
			<th>#</th>
			<th>Make</th>
			<th>Model</th>
			<th>Color</th>
			<th>Year</th>
			<th>Transmission</th>
			<th>Number of Doors</th>
			<th>Price</th>
			<th>Date Posted</th>
		</tr>
		<c:forEach var="car" items="${allCars }">
			<c:if test="${loggedInUser.myCars.contains(car) }">
				<tr>
					<td><a href="/cars/${car.id }"><c:out value="${car.id }"></c:out></a></td>
					<td><c:out value="${car.make }"></c:out></td>
					<td><c:out value="${car.model }"></c:out></td>
					<td><c:out value="${car.color }"></c:out></td>
					<td><c:out value="${car.year }"></c:out></td>
					<td><c:out value="${car.transmission }"></c:out></td>
					<td><c:out value="${car.numOfDoors }"></c:out></td>
					<td><c:out value="${car.price }"></c:out></td>
					<td><c:out value="${car.createdAt }"></c:out></td>

					<td><a href="/cars/edit/${car.id }">Edit</a>
						<form action="/cars/${car.id } method="post">
							<input type="hidden" name="_method" value="delete"/>
						</form></td>
				</tr>
			</c:if>
		</c:forEach>


	</table>


</body>
</html>

