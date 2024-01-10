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
<title>Update a Book</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>
	<div class="container p-3">
		<h1>Update Pizza</h1>
		<form:form class="border border-dark p-3 bg-secondary text-light"
			action="/books/${book.id}" method="post" modelAttribute="book">
			<form:hidden path="id"/>
			<!-- This hidden input is needed to create a put request -->
			<input type="hidden" name="_method" value="put"/>
			<div class="mb-3">
				<form:label path="title" class="form-label">Book Title:</form:label>
				<form:input path="title" class="form-control" />
				<form:errors path="title" />
			</div>
			<div class="mb-3">
				<form:label path="Book Author" class="form-label">Author:</form:label>
				<form:input path="Book Author" class= "form-control"/>
				<form:errors path="Book Author" />
			</div>

			<div class="mb-3 d-flex flex-column">
				<form:label path="thoughts" class="form-label">Thoughts:</form:label>
				<form:input path="thoughts" class= "form-control"/>

			</div>

			<button type="submit" class="btn btn-primary">Submit</button>
		</form:form>
	</div>

</body>
</html>