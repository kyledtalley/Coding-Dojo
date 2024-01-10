<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
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
<title>Tacos</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>
	<div class="container">

		<h1>Start a new song!</h1>
		<c:out value="${noSong}"></c:out>
		<form:form class="border border-dark p-3 bg-secondary text-light"
			action="/songs/create" method="POST" modelAttribute="song">
			<div class="mb-3">
				<form:label path="title" class="form-label">Song Title</form:label>
				<form:input path="title" class="form-control" />
				<form:errors path="title" />
			</div>
			<div class="mb-3">
				<form:label path="genre" class="form-label">Genre</form:label>
				<form:input path="genre" class="form-control" />
				<form:errors path="genre" />
			</div>
			<div class="mb-3">
				<form:label path="lyrics" class="form-label">Add your lyrics:</form:label>
				<form:input path="lyrics" class="form-control" rows = "5"/>
				<form:errors path="lyrics" />
			</div>



			<button type="submit" class="btn btn-primary">Submit</button>
		</form:form>
	</div>
</body>
</html>
