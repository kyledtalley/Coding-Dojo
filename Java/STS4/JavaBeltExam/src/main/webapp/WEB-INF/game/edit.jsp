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
<title>Update</title>
<link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/main.css">
<!-- change to match your file/naming structure -->
<script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="/js/app.js"></script>
<!-- change to match your file/naming structure -->
</head>
<body>
	<c:if test="${game.developer.id != loggedInUser.id }">Oak's words echoed... There's a time and place for everything, but not now.
	<a href="/games"> Go Home</a>
	</c:if>
	<c:if test="${game.developer.id == loggedInUser.id }">
		<div class="container p-3">
			<h1>Update Game</h1>
			<form:form class="border border-dark p-3 bg-secondary text-light"
				action="/games/${game.id}" method="post" modelAttribute="game">
				<form:hidden path="id" />
				<!-- This hidden input is needed to create a put request -->
				<input type="hidden" name="_method" value="put" />
				<div class="mb-3">
					<form:label path="title" class="form-label">Title</form:label>
					<form:input path="title" class="form-control" />
					<form:errors path="title" />
				</div>
				<div class="mb-3">
					<form:label path="genre" class="form-label">Genre</form:label>
					<form:input path="genre" class="form-control" />
					<form:errors path="genre" />
				</div>

				<div class="mb-3 d-flex flex-column">
					<form:label path="description" class="form-label">Description</form:label>
					<form:input path="description" class="form-control" />
					<form:errors path="description" />
				</div>


				<form:hidden path="developer.id" />


				<button type="submit" class="btn btn-primary">Submit</button>
			</form:form>
		</div>
	</c:if>

</body>
</html>