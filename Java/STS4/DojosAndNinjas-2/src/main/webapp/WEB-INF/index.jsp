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

		<h1>Create a Dojo</h1>

		<form:form action="/dojos" method="post" modelAttribute="dojo">
			<div>
				<form:label path="name">Location:</form:label>
				<form:input path="name" />
				<form:errors path="name" />
			</div>
			<button type="submit" class="btn btn-primary">Submit</button>
		</form:form>

		<p>
			<a href="/ninjas/new">Create a Ninja</a>
		</p>

		<h5>Dojos</h5>
		<table>
			<thead>

				<tr>
					<th>Location</th>

				</tr>
			</thead>
			<tbody>
				<c:forEach var="dojo" items="${allDojos}">

					<tr>
						<td><c:out value="${dojo.name}"></c:out></td>
					</tr>
				</c:forEach>
			</tbody>


		</table>

		<h5>Ninjas</h5>
		<table>
			<thead>

				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Age</th>
				</tr>
			</thead>
			<tbody>

				<c:forEach var="ninja" items="${allNinjas}">
					<tr>

						<td><c:out value="${ninja.first_name}"></c:out></td>
						<td><c:out value="${ninja.last_name}"></c:out></td>
						<td><c:out value="${ninja.age}"></c:out></td>
						<td><a href="/dojos/${ninja.dojo.id}">Dojo Link</a></td>
					</tr>
				</c:forEach>
			</tbody>


		</table>

	</div>


</body>
</html>