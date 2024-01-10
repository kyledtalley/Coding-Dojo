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
<title>Book Shelf</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>
	<div class="container">
		<h1>Add your new game</h1>
		<form:form action="/games/create" method="POST" modelAttribute="game">
			<form:input type="hidden" path="developer" value="${user.id }"></form:input>
			<form:errors class="text-danger pb-3" path="*" />
			<div class="form-group mb-3">
				<form:label path="title">Title</form:label>
				<form:input path="title"></form:input>
			</div>
			<div class="form-group mb-3">
				<form:label path="genre">Genre</form:label>
				<form:input path="genre"></form:input>
			</div>
			<div class="form-group mb-3">
				<form:label path="description">Description</form:label>
				<form:input path="description"></form:input>
			</div>
			<div class="submit-group">
				<button class="btn btn-dark">Create</button>
			</div>

		</form:form>
		<a href="/games">Home</a>

	</div>
</body>
</html>

