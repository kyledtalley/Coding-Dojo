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
<title>Books</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>
	<div class="container">

		<h1>Add a book</h1>
		<form:form action="/books" method="POST" modelAttribute="book">
			<form:input type="hidden" path="postedBy" value="${user.id }"></form:input>
			<form:errors path="*"></form:errors>
			<div class="form-group">
				<form:label path="title">Title</form:label>
				<form:input path="title"></form:input>
			</div>
			<div class="form-group">
				<form:label path="author">Author</form:label>
				<form:input path="author"></form:input>

			</div>
			<div class="form-group">
				<form:label path="thoughts">Thoughts</form:label>
				<form:input path="thoughts"></form:input>
			</div>


			<div class="submit-group">
				<button class="btn btn-dark">Create</button>
			</div>

		</form:form>
		<a href="/auth/logout" >Logout</a>

	</div>
</body>
</html>

